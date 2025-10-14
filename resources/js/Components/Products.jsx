import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import slugify from "../utils/slugify";

const Products = () => {
    const { categoryId } = useParams();
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    // Ambil categories dari API
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch("http://localhost:8000/api/categories");
                const data = await res.json();
                setCategories([{name: "All", slug: "all"}, ...data]);
            } catch (err) {
                console.error(err);
            }
        };
        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const url = categoryId && categoryId.toLowerCase() !== "all"
                    ? `http://localhost:8000/api/categories/${categoryId}/products`
                    : `http://localhost:8000/api/menus`;

                const res = await fetch(url);
                const data = await res.json();
                setFiltered(data);
            } catch(err) {
                console.error(err);
            } finally {
                // delay biar loading transisinya smooth
                setTimeout(() => setLoading(false), 800);
            }
        };
        fetchProducts();
    }, [categoryId]);

    const currentCategory = categories.find(
        (cat) => cat.slug.toLowerCase() === (categoryId ? categoryId.toLowerCase() : "all")
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

            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div
                        className="max-w-7xl mx-auto py-16 px-4"
                        style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}
                    >
                        <h2 className="text-xl font-bold text-pink-500 mt-10 mb-6 capitalize">
                            {currentCategory ? currentCategory.name : "All"} Products
                        </h2>

                        <section className="p-8 bg-pink-100 rounded-2xl">
                            {/* Tabs */}
                            <div className="flex justify-center gap-8 mb-10 flex-wrap">
                                {categories.map((cat, idx) => {
                                    const active = (categoryId ? categoryId.toLowerCase() : "all") === cat.slug.toLowerCase();
                                    
                                    return (
                                        <motion.button
                                            key={idx}
                                            onClick={() => navigate(`/product-category/${cat.slug.toLowerCase()}`)}
                                            className={`relative pb-2 text-lg transition-all cursor-pointer ${
                                                active
                                                    ? "text-pink-500 font-bold"
                                                    : "text-gray-700 hover:text-pink-500"
                                            }`}
                                        >
                                            {cat.name}
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

                            {/* Product List */}
                            <div
                                key={categoryId} // biar re-render tiap pindah kategori
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center"
                            >
                            {filtered.length > 0 ? (
                                filtered.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    className="bg-gray-50 rounded-lg shadow p-4"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-52 object-cover rounded-lg mb-4"
                                    />
                                    <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                                    <p className="text-pink-500 mb-1">
                                        Rp {Number(item.price).toLocaleString("id-ID")}
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
                                ))
                                ) : (
                                    <p className="text-gray-500 mb-30">
                                        No products available in this category.
                                    </p>
                                )}
                            </div>
                        </section>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default Products;