import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import imagesData from "../data/images.json";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryPage = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();

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

    const [filtered, setFiltered] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // update images setiap kali categoryId berubah
    useEffect(() => {
        if (!categoryId || categoryId === "all") {
            // gabung semua kategori jadi satu array
            if (imagesData["all"]) {
                setFiltered(imagesData["all"].map((src) => ({ src })));
            } else {
                setFiltered([]);
            }
        } else if (imagesData[categoryId]) {
            setFiltered(imagesData[categoryId].map((src) => ({src})));
        } else {
            setFiltered([]);
        }
    }, [categoryId]);

    const currentCategory = categories.find (
        (cat) => cat.value.toLowerCase() === categoryId?.toLowerCase()
    );

    return (
        <div
            className="max-w-7xl mx-auto py-16 px-4 mb-20"
            style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}
        >
            <h2 className="text-xl font-bold text-pink-500 mt-10 mb-6 capitalize">
                {currentCategory ? currentCategory.title : categoryId} Gallery
            </h2>

            {/* Tabs */}
            <div className="flex justify-center gap-8 mb-10 flex-wrap">
                {categories.map((cat, idx) => {
                    const active = (categoryId || "all").toLowerCase() === cat.value.toLowerCase();

                    return (
                        <motion.button
                            key={idx}
                            onClick={() => navigate(cat.value === "all" ? "/gallery" : `/gallery/${cat.value.toLowerCase()}`)}
                            className={`relative pb-2 text-lg transition-all cursor-pointer ${active ? "text-pink-500 font-bold" : "text-gray-700 hover:text-pink-500"}`}
                        >
                            {cat.title}
                            {active && (
                                <motion.div
                                    layoutId="underline"
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
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
                    filtered.map((img, idx) => (
                        <motion.img
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            src={img.src}
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
    );
};

export default GalleryPage;