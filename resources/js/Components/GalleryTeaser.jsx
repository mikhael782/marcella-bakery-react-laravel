import { forwardRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { delay, motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryTeaser = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    const [isOpen, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        // Url BE Laravel
        fetch("http://localhost:8000/api/gallerys")
        .then((res) => res.json())
        .then((data) => {
            // Convert agar sesuai Lightbox
            const slides = data.map(item => ({ src: item.images }));
            setImages(slides);
        })
        .catch((err) => console.error(err));
    }, []);

    return (
        <section ref={ref} className="py-2 bg-pink-100 rounded-3xl scroll-mt-10">
            <section className="max-w-5xl mx-auto  text-center py-16 " style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
                <motion.h2 
                    className="text-2xl font-bold text-pink-500 mb-6 relative inline-block"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Gallery
                    <span className="block w-35 h-1 bg-pink-500 mt-3 rounded mx-auto"></span>
                </motion.h2>

                {/* Grid Teaser */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((images, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <img
                                src={images.src}
                                alt={`Gallery ${idx}`}
                                className="rounded-xl w-full h-64 object-cover cursor-pointer hover:opacity-80 transition"
                                onClick={() => {
                                    setIndex(idx);
                                    setOpen(true);
                                }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Lightbox Popup */}
                {isOpen && (
                    <Lightbox
                        open={isOpen}
                        close={() => setOpen(false)}
                        index={index}
                        slides={images}
                    />
                )}

                {/* See All Gallery */}
                <div className="text-center mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}   // ✅ animasi taruh di child
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5}}
                        //whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                        <Link
                            to="/gallery"
                            className="inline-block bg-pink-500 text-white px-6 py-2 rounded-lg shadow hover:bg-pink-600 transition"
                        >
                            See All Gallery
                        </Link>
                    </motion.div>
                </div>
            </section>
        </section>
    );
});

export default GalleryTeaser;