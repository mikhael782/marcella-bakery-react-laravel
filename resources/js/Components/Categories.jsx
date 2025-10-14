import { motion } from "framer-motion";
import { forwardRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Categories = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        // Url BE Laravel
        fetch("http://localhost:8000/api/categories")
        .then((res) => res.json())
        .then((data) => setCategories(data))
        .catch((err) => console.error(err));
    }, []);

    return (
        // className="py-2 bg-pink-200 rounded-4xl scroll-mt-10"
        <section
            ref={ref}
            className="max-w-7xl mx-auto py-16 px-4 text-center"
            style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}
        >
            <motion.h2 
                className="text-2xl font-bold text-pink-500 relative inline-block"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
            >
                Choose Your Categories
                <span className="block w-35 h-1 bg-pink-500 mt-3 rounded mx-auto"></span>
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={cat.id}
                        className="relative h-56 rounded-lg overflow-hidden cursor-pointer shadow-lg"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        onClick={() => navigate(`/product-category/${cat.slug}`)}
                    >
                        <img
                            src={`/storage/${cat.image}`} // tambahkan /storage/ sebelum path dari DB
                            alt={cat.name}
                            className="w-full h-full object-cover"
                        />
                        {/* overlay transparan */}
                        <div className="absolute inset-0 bg-black/30 z-10"></div>
                        {/* text di atas overlay */}
                        <h3 className="absolute bottom-4 left-4 text-white text-xl font-bold drop-shadow z-20">
                            {cat.name}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
});

export default Categories;