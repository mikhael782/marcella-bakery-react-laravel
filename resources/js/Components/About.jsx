import { forwardRef } from "react";
import { motion } from "framer-motion";

{/* About Us */}
const About = forwardRef((props, ref) => {
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-2 scroll-mt-10"
        >
            <section
                className="py-16 bg-white"
                style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 px-4">
                    {/* Foto kiri */}
                    <motion.div
                        className="md:w-1/2"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="/img/bg_hero/bg_image.jpg"
                            alt="image"
                            style={{ width: "auto", height: "350px" }}
                            className="rounded-lg shadow-lg object-cover"
                        />
                    </motion.div>

                    {/* Teks Kanan */}
                    <div className="md:w-1/2 text-justify md:text-justify px-4 md:px-0">
                        <motion.h2
                            className="text-2xl font-bold text-pink-500 mb-3 relative inline-block"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            About Us
                            <span className="block w-30 h-1 bg-pink-500 mt-3 rounded mx-auto"></span>
                        </motion.h2>

                        <motion.p
                            className="text-gray-600"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            Didirikan pada tahun 2018 oleh Ibu Marcella Susy, Marcella Bakery & Cake 
                            telah berkembang menjadi tempat favorit bagi pecinta roti dan kue di kota Jakarta. 
                            Dengan dedikasi terhadap kualitas dan cita rasa, setiap produk dibuat dengan 
                            penuh cinta dan perhatian, mulai dari pemilihan bahan hingga proses pembakaran. <br />
                            Marcella Bakery & Cake menghadirkan roti, kue, dan pastry segar setiap hari.
                            Kami menggunakan bahan berkualitas terbaik untuk memastikan setiap gigitan
                            memberikan rasa yang tak terlupakan. <br />
                            Kami percaya bahwa setiap kue dan roti yang dibuat memiliki cerita tersendiri, 
                            dan kami selalu berusaha menghadirkan pengalaman kuliner yang hangat dan 
                            menyenangkan bagi setiap pelanggan. Nikmati momen manis bersama keluarga dan 
                            teman di Marcella Bakery & Cake!
                        </motion.p>
                    </div>
                </div>
            </section>
        </motion.section>
    );
});

export default About;