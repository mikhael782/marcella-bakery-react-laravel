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

export default function PromoProducts () {
    const navigate = useNavigate();
    const { id, slug } = useParams();
    const [promos, setPromos] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [qty, setQty] = useState(1);
    const [selectedSize, setSelectedSize] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDataPromoProduct = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/promo-products/${id}/${slug}`);
                if (!res.ok) throw new Error("Item tidak ditemukan");
                const data = await res.json();
                setPromos(data);
                setMainImage(data.images_main);
                setSelectedSize(data.sizes ? data.sizes[0] : null);
            } catch(err) {
                Swal.fire({
                    title: "Oops!",
                    text: "Item tidak ditemukan",
                    icon: "error",
                    confirmButtonColor: "#ec4899",
                    confirmButtonText: "close"
                }).then(() => {
                    navigate("/");
                });
            } finally {
                setTimeout(() => setLoading(false), 800);
            }
        };
        fetchDataPromoProduct();        
    }, [id, slug, navigate]);

    if (!promos && !loading) {
        return null;
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
                        <div className="w-10 h-10 mt-6 border-4 border-pink-500 border-dashed rounded-full animate-spin"></div>

                        <p className="text-gray-500 mt-2">Loading gallery...</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Preview Content */}
            {!loading && promos && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duratio: 0.8 }}
                    className="pt-24"
                >
                    <div className="max-w-6xl mb-4 mx-auto flex flex-col md:flex-row gap-8 px-4"
                        style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
                            <p className="text-pink-500 font-medium text-left">Promo Product {'>'} {promos.category} {'>'} {promos.name}</p>
                    </div>

                    <div 
                        className="max-w-6xl mx-auto p-8 flex flex-col md:flex-row gap-8 bg-pink-100 rounded-2xl"
                        style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}
                    >
                        {/* Bagian kiri: Image utama + preview */}
                        <div className="flex flex-col items-center md:items-start gap-4">
                            <img 
                                src= {mainImage}
                                alt= {promos.name}
                                className="w-80 aspect-[4/4] object-cover rounded-lg shadow-lg"
                            />

                            {/* Preview images */}
                            <div className="flex gap-2 mt-2">
                                {promos.images_preview?.map((img, idx) => (
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

                        {/* Bagian kanan: deskripsi */}
                        <div className="flex-1">
                            <h2 className="text-2xl font-medium text-pink-500 mb-4">
                                {promos.name}
                            </h2>

                            <p className="text-pink-500 font-medium mb-4">
                                Rp {Number(promos.price).toLocaleString("id-ID")}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => {
                                    const fullStars = Math.floor(promos?.rating || 0);
                                    const hasHalfStar = (promos?.rating || 0) % 1 >= 0.5;

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
                                            key={1}
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

                            <hr className="border-pink-500 my-4 border-2"/>

                            <p className="text-gray-700 mt-4 mb-4">
                                {promos.description}
                            </p>

                            {/* Size */}
                            {promos.sizes && (
                                <div className="flex flex-col mt-4">
                                    <p className="text-pink-500 font-medium">Choose Size</p>
                                    <div className="flex items-center gap-2 mt-2">
                                        {promos.sizes.map((size, idx) => 
                                            <button
                                                key={idx}
                                                className={`px-3 py-1 border rounded-lg cursor-pointer 
                                                    ${ selectedSize === size ? "bg-pink-500 text-white" : "bg-white text-pink-500" }
                                                `}
                                                onClick={() => setSelectedSize(size)}
                                            >
                                                {size}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            )}

                            <hr className="border-pink-500 my-4 border-2"/>

                            {/* Qty selector */}
                            <div className="flex items-center gap-2 mt-4">
                                <div className="flex items-center border border-pink-500 rounded-lg">
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
                                            text: `Add to Cart : ${promos.name} ${selectedSize ?? ""} x${qty}`,
                                            showConfirmButton: false,
                                            timer: 1500,
                                            timerProgressBar: true
                                        })
                                    }
                                >
                                    <FontAwesomeIcon icon={faCartShopping}/>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Review Carousel */}
                    {promos.reviews && promos.reviews.length > 0 && (
                        <div
                            className="max-w-6xl mx-auto p-8 flex flex-col gap-4 bg-pink-100 rounded-2xl mt-4"
                            style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}
                        >
                            <h3 className="text-2xl text-pink-500 font-medium mb-2">Reviews</h3>

                            <Swiper
                                modules={[Pagination, Autoplay]}
                                spaceBetween={20}
                                slidesPerView={1}
                                pagination= {{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                className="w-full max-w-2xl mx-auto cursor-pointer"
                            >
                                {promos.reviews.map((review, idx) =>
                                    <SwiperSlide key={idx} className="w-full">
                                        <div className="w-full p-4 border border-pink-500 rounded-lg bg-white h-40 overflow-y-auto flex flex-col justify-center">
                                            <div className="flex items-center gap-2 mb-2">
                                                {[...Array(5)].map((_, i) => {
                                                    const fullStars = Math.floor(promos?.rating || 0);
                                                    const hasHalfStar = (promos?.rating || 0) % 1 >= 0.5;

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
                                                            key={1}
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
                </motion.div>
            )}
        </>
    );
}