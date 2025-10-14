import React, { forwardRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import slugify from "../utils/slugify";

const Menu = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Url BE laravel
        fetch("http://localhost:8000/api/menus")
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((err) => console.error(err));
    }, []);

    return (
        <section ref={ref} className="py-2 bg-pink-100 rounded-4xl scroll-mt-10">
            <div className="max-w-7xl mx-auto text-center py-16" style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
                <motion.h2 
                    className="text-2xl font-bold text-pink-500 mb-6 relative inline-block"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Our Menu
                    <span className="block w-35 h-1 bg-pink-500 mt-3 rounded mx-auto"></span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {items.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-gray-50 rounded-2xl shadow-lg p-4 cursor-pointer"
                            initial={{ opacity: 0, y: 50 }}   // ✅ animasi taruh di child
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            //whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-52 object-cover rounded-lg mb-4"
                            />

                            <h3 className="text-xl font-medium text-gray-800 mb-1">
                                {item.name}
                            </h3>

                            <p className="text-pink-500 font-medium mb-1">
                                Rp {parseFloat(item.price).toLocaleString("id-ID")}
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate(`/preview/${item.preview_id}/${slugify(item.slug)}`)}
                                className="mt-2 px-4 py-1 bg-pink-500 text-white rounded-lg cursor-pointer"
                            >
                                Preview
                            </motion.button>
                        </motion.div>
                    ))}
                </div>

                {/* See All Menu */}
                <div className="text-center mt-8">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}   // ✅ animasi taruh di child
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5}}
                        //whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                        <Link
                            to="/product-category"
                            className="inline-block bg-pink-500 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-pink-600 transition"
                        >
                            See All Menu
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

export default Menu;