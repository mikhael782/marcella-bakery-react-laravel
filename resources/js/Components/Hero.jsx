import { motion } from "framer-motion";

{/* Jumbotron */}
export default function Hero() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[550px] flex items-center justify-center text-center bg-cover bg-center"
            style={{ backgroundImage: "url('/img/bg_hero/bg_image.jpg')" }}
        >
            {/* Overlay biar teks jelas */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Konten */}
            <div className="relative px-4" style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
                <motion.h2
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
                >
                    Marcella Bakery & Cake
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-lg md:text-xl text-gray-100 drop-shadow"
                >
                    Fresh bread, cakes, and pastries setiap hari 🥐🍞🎂
                </motion.p>
            </div>
        </motion.div>
    );
}