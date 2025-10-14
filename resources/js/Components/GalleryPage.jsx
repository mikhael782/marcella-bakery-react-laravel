import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryPage = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const [filtered, setFiltered] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    const categories = [
        { title: "All", value: "all" },
        { title: "Bolu", value: "bolu" },
        { title: "Bread", value: "bread" },
        { title: "Brownies", value: "brownies" },
        { title: "Cake", value: "cake" },
        { title: "Cookies", value: "cookies" },
        { title: "Pastries", value: "pastries" },
        { title: "Traditional Food", value: "traditional-food" }
    ];

    // update images setiap kali categoryId berubah
    useEffect(() => {
        const fetchGalleryPages = async () => {
            setLoading(true); // set ke true setiap kali pindah kategori
            try {
                const url =
                    categoryId && categoryId.toLowerCase() !== "all"
                        ? `http://localhost:8000/api/categories/${categoryId}/gallery`
                        : `http://localhost:8000/api/gallerys`;

                const res = await fetch(url);
                const data = await res.json();
                setFiltered(data.map((item) => ({ src: item.images })));
            } catch (err) {
                console.error(err);
            } finally {
                // delay biar loading transisinya smooth
                setTimeout(() => setLoading(false), 800);
            }
        };
        fetchGalleryPages();
    }, [categoryId]);

    const currentCategory = categories.find (
        (cat) => cat.value.toLowerCase() === categoryId?.toLowerCase()
    );

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

            {/* Gallery Content */}
            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="max-w-7xl mx-auto py-16 px-4 mb-20"
                        style={{ fontFamily:'"Comic Sans MS", "Comic Neue", sans-serif',}}
                    >
                        <h2 className="text-xl font-bold text-pink-500 mt-10 mb-6 capitalize">
                            {currentCategory ? currentCategory.title : "All"}{" "}
                            Gallery
                        </h2>

                        {/* Tabs */}
                        <div className="flex justify-center gap-8 mb-10 flex-wrap">
                            {categories.map((cat, idx) => {
                                const active = (categoryId || "all").toLowerCase() === cat.value.toLowerCase();

                                return (
                                    <motion.button
                                        key={idx}
                                        onClick={() =>
                                            navigate(cat.value === "all"
                                                    ? "/gallery"
                                                    : `/gallery/${cat.value.toLowerCase()}`
                                            )
                                        }
                                        className={`relative pb-2 text-lg transition-all cursor-pointer ${
                                            active
                                                ? "text-pink-500 font-bold"
                                                : "text-gray-700 hover:text-pink-500"
                                        }`}
                                    >
                                        {cat.title}
                                        {active && (
                                            <motion.div
                                                layoutId="underline"
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 500,
                                                    damping: 30,
                                                }}
                                                className="absolute left-0 right-0 -bottom-1 h-0.5 bg-pink-500 rounded"
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Gallery Grid */}
                        <div
                            key={categoryId} // penting biar re-render setiap ganti kategori
                            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                        >
                            {filtered.length > 0 ? (
                                filtered.map((images, idx) => (
                                    <motion.img
                                        key={idx}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: idx * 0.15,
                                        }}
                                        src={images.src}
                                        alt={`Gallery ${idx}`}
                                        className="rounded-lg cursor-pointer h-64 w-full object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        onClick={() => {
                                            setIndex(idx);
                                            setOpen(true);
                                        }}
                                    />
                                ))
                            ) : (
                                <p className="text-gray-500">
                                    No images available in this category.
                                </p>
                            )}
                        </div>

                        {/* Lightbox */}
                        <Lightbox
                            open={isOpen}
                            close={() => setOpen(false)}
                            index={index}
                            slides={filtered}
                        />
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default GalleryPage;