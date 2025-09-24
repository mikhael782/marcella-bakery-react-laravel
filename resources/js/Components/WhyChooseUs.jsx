import { motion } from "framer-motion";
import { Heart, Truck, Cookie, Star } from "lucide-react";

const features = [
    {
        icon: <Cookie className="w-10 h-10 text-pink-500"/>,
        title: "Fresh Everyday",
        description: "Semua roti dan kue dipanggang setiap pagi agar selalu fresh."
    },
    {
        icon: <Star className="w-10 h-10 text-pink-500"/>,
        title: "Premium Ingredients",
        description: "Menggunakan bahan pilihan terbaik, tanpa pengawet."
    },
    {
        icon: <Heart className="w-10 h-10 text-pink-500"/>,
        title: "Made With Love",
        description: "Setiap produk dibuat dengan penuh cinta dan dedikasi."
    },
    {
        icon: <Truck className="w-10 h-10 text-pink-500"/>,
        title: "Fast Delivery",
        description: "Pesanan cepat sampai ke rumah, tetap hangat dan lezat."
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-2 bg-pink-100 rounded-3xl scroll-mt-10">
            <div className="max-w-7xl mx-auto py-16 text-center px-6" style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
                <motion.h2 
                    className="text-2xl font-bold text-pink-500 mb-3 relative inline-block"
                    initial= {{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Why Choose Us
                    <span className="block w-35 h-1 bg-pink-500 mt-3 rounded mx-auto"></span>
                </motion.h2>

                <motion.p 
                    className="text-gray-600 mb-6"
                    initial= {{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Kami selalu berkomitmen menghadirkan produk terbaik untuk Anda.
                </motion.p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            className="bg-white rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer shadow-lg"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                        >
                            <div className="flex justify-center items-center w-16 h-16 rounded-full bg-pink-100 mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-medium text-pink-600 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-pink-500 text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;