import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarSolid, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Swal from "sweetalert2";
import slugify from "../utils/slugify";

export default function Preview() {
    const navigate = useNavigate();
    const { id, slug } = useParams(); 
    const [item, setItems] = useState(null);
    const [mainImage, setMainImage]  = useState("");
    const [qty, setQty] = useState(1);
    // ukuran cake
    const [selectedSize, setSelectedSize] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedItems, setRelatedItems] = useState([]);

    // Fetch item utama
    useEffect(() => {
        const fetchDataPreview = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/preview/${id}/${slug}`);
                if (!res.ok) throw new Error("Item tidak ditemukan");
                const data = await res.json();
                setItems(data);
                setMainImage(data.images_main);
                setSelectedSize(data.sizes ? data.sizes[0] : null);
            } catch (err) {
                Swal.fire({
                    title: "Oops!",
                    text: "Item tidak ditemukan",
                    icon: "error",
                    confirmButtonColor: "#ec4899",
                    confirmButtonText: "Close"
                }).then(() => {
                    navigate("/"); // redirect ke halaman menu (atau ganti sesuai routing kamu)
                });
            } finally {
                setTimeout(() => setLoading(false), 800);
            }
        };
        fetchDataPreview();
    }, [id, slug, navigate]);

    // Fetch related items
    useEffect(() => {
        const fetchRelatedItems = async () => {
            if (!item?.menu_id) return;

            try{
                const res = await fetch(`/api/menus/related/${item.menu_id}`);
                if (!res.ok) throw new Error("Related Item tidak ditemukan");
                const data = await res.json();
                setRelatedItems(data);
            } catch(err) {
                console.error(err);
            }
        };
        fetchRelatedItems();
    }, [item]);

    if (!item && !loading) {
        return null; // hanya return null kalau udah gak loading + item kosong
    }

    return (
        <>
            {/* Loading Overlay */}
            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="loader"
                        className="fixed inset-0 bg-pink-100 flex flex-col justify-center items-center z-50" 
                        style={{ fontFamily:'"Comic Sans MS", "Comic Neue", sans-serif',}}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        {/* Logo kue */}
                        <div className="text-6xl animate-bounce">🍰</div>

                        {/* Branding */}
                        <h2 className="text-2xl font-bold text-pink-600 mt-4">
                            Marcella Bakery & Cake
                        </h2>

                        {/* Spinner */}
                        <div className="w-10 h-10 mt-4 border-4 border-pink-500 border-dashed rounded-full animate-spin"></div>

                        <p className="text-pink-500 mt-4 font-semibold">Loading gallery...</p>
                    </motion.div>
                )}
            </AnimatePresence>
        
            {/* Preview Content */}
            {!loading && item  && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duratio: 0.8 }}
                    className="pt-24"
                >
                    <div className="max-w-6xl mb-4 mx-auto flex flex-col md:flex-row gap-8 px-4"
                        style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
                            <p className="text-pink-500 font-medium text-left">Preview {'>'} {item.category} {'>'} {item.name}</p>
                    </div>

                    <div
                        className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-8 bg-pink-100 rounded-2xl"
                        style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}
                    >
                        {/* Bagian kiri: Image utama + preview */}
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <img
                                src={mainImage}
                                alt={item.name}
                                className="w-80 aspect-[4/4] object-cover rounded-lg shadow-lg"
                            />

                            {/* Preview images */}
                            <div className="flex gap-2 mt-2">
                                {item.images_preview?.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`preview ${idx}`}
                                        className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                        onClick={() => setMainImage(img)}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Bagian kanan: Deskripsi */}
                        <div className="flex-1">
                            <h2 className="text-xl font-semibold text-pink-500 mb-3">
                                {item.name}
                            </h2>

                            <p className="text-pink-500 font-medium mb-3">
                                Rp {Number(item.price).toLocaleString("id-ID")}
                            </p>
                            
                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-3">
                                {[...Array(5)].map((_, i) => {
                                    const fullStars = Math.floor(item?.rating || 0); // misal ada rating decimal
                                    const hasHalfStar = (item?.rating || 0) % 1 >= 0.5; 

                                    if (i < fullStars) {
                                        // bintang penuh
                                        return <FontAwesomeIcon
                                            key={`star-${i}`}
                                            icon={faStarSolid}
                                            className="text-amber-400"
                                        />
                                    } else if (i === fullStars && hasHalfStar) {
                                        // bintang setengah
                                        return <FontAwesomeIcon
                                            key={`star-${i}`}
                                            icon={faStarHalfStroke}
                                            className="text-amber-400"
                                        />
                                    } else {
                                        // bintang kosong
                                        return <FontAwesomeIcon
                                            key={`star-${i}`}
                                            icon={faStarRegular}
                                            className="text-amber-400"
                                        />
                                    }
                                })}
                                {/* <span className="ml-1 text-gray-600 text-sm">({item.rating}/5)</span> */}
                            </div>

                            <hr className="border-pink-500 my-4 border-2"/>

                            <p className="text-pink-500 font-semibold">Description</p>

                            <p className="text-pink-500 mt-2 mb-3">
                                {item.description}
                            </p>

                            {/* Size */}
                            {Array.isArray(item.sizes) && item.sizes.length > 0 && (
                                <div className="flex flex-col mt-3">
                                    <p className="text-pink-500 font-semibold">Choose Size</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        {item.sizes.map((size, idx) => (
                                            <button
                                                key={idx}
                                                className={`px-3 py-1 border rounded-lg cursor-pointer 
                                                    ${selectedSize === size.size
                                                        ? "bg-pink-500 text-white border-pink-500"
                                                        : "bg-white text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white"
                                                    }
                                                `}
                                                onClick={() => setSelectedSize(size.size)}
                                                >
                                                {size.size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <hr className="border-pink-500 my-4 border-2"/>

                            {/* Qty selector */}
                            <div className="flex items-center gap-2 mt-3">
                                <div className="flex items-center border rounded-lg border-pink-600">
                                    <button
                                        disabled={qty <= 1}
                                        className="px-3 py-1 text-pink-500 font-medium cursor-pointer disabled:opacity-40"
                                        onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                                    >
                                        -
                                    </button>

                                    <span className="px-4">{qty}</span>
                                    
                                    <button
                                        className="px-3 py-1 text-pink-500 font-medium cursor-pointer"
                                        onClick={() => setQty(qty + 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition cursor-pointer"
                                    onClick={() => 
                                        Swal.fire({
                                            toast: true,
                                            position: 'top-end',
                                            icon: 'success',
                                            text: `Add to Cart: ${item.name} ${selectedSize ?? ""} x${qty}`,
                                            showConfirmButton: false,
                                            timer: 1500,
                                            timerProgressBar: true,
                                        })
                                    }
                                >
                                    <FontAwesomeIcon icon={faCartShopping}/>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Review Carousel */}
                    {item.reviews && item.reviews.length > 0 && (
                        <div 
                            className="max-w-6xl mx-auto p-8 flex flex-col gap-4 bg-pink-100 rounded-2xl mt-3" 
                            style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}
                        >
                            <h3 className="text-2xl text-pink-500 font-medium mb-2">
                                Reviews
                            </h3>

                            <Swiper
                                modules={[Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                className="w-full max-w-2xl mx-auto cursor-pointer"
                            >
                                {item.reviews.map((review, idx) =>
                                    <SwiperSlide key={idx} className="w-full">
                                        <div className="w-full p-4 border rounded-lg bg-white h-40 overflow-y-auto flex flex-col justify-center border-pink-500">
                                            <div className="flex items-center gap-2 mb-2">
                                                {[...Array(5)].map((_, i) => {
                                                    const fullStars = Math.floor(review.rating); // misal ada rating decimal
                                                    const hasHalfStar = review.rating % 1 >= 0.5; 

                                                    if (i < fullStars) {
                                                        // bintang penuh
                                                        return <FontAwesomeIcon
                                                            key={i}
                                                            icon={faStarSolid}
                                                            className="text-amber-400"
                                                        />
                                                    } else if (i === fullStars && hasHalfStar) {
                                                        // bintang setengah
                                                        return <FontAwesomeIcon
                                                            key={i}
                                                            icon={faStarHalfStroke}
                                                            className="text-amber-400"
                                                        />
                                                    } else {
                                                        // bintang kosong
                                                        return <FontAwesomeIcon
                                                            key={i}
                                                            icon={faStarRegular}
                                                            className="text-amber-400"
                                                        />
                                                    }
                                                })}
                                            </div>

                                            <p className="font-medium">
                                                {review.name}
                                            </p>

                                            <p className="text-pink-500 font-medium">
                                                {review.comment}
                                            </p>
                                        </div>
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    )}

                    {/* Related Items */}
                    {relatedItems.length > 0 && (
                        <div className="max-w-6xl mx-auto p-8 mt-6 mb-6 bg-pink-100 rounded-2xl" 
                            style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
                            <motion.h2 
                                className="text-xl font-bold text-pink-500 mb-6 text-center relative"
                                initial={{ opacity: 0, y: -50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                You May Also Like
                                <span className="block w-36 h-1 bg-pink-500 mt-3 rounded mx-auto"></span>
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                                {relatedItems.map((item, idx) => (
                                    <motion.div
                                        key={item.id}
                                        className="bg-gray-50 rounded-xl shadow-lg p-4 cursor-pointer"
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-52 object-cover rounded-lg mb-4"
                                        />

                                        <div className="flex flex-col items-center">
                                            <h3 className="text-lg font-bold text-pink-500 mb-2 text-center">
                                                {item.name}
                                            </h3>

                                            <p className="text-pink-500 mb-3 text-center">
                                                Rp {parseFloat(item.price).toLocaleString("id-ID")}
                                            </p>

                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="px-4 py-1 bg-pink-500 text-white rounded-lg cursor-pointer"
                                                onClick={() => navigate(`/preview/${item.preview_id}/${slugify(item.slug)}`)}
                                            >
                                                Preview
                                            </motion.button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </motion.div>
            )}
        </>
    );
}