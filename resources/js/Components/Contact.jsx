import { forwardRef } from "react";
import { motion } from "framer-motion";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = forwardRef((props, ref) => {
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y:0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="py-4 scroll-mt-10 bg-pink-200"
        >
            {/* Maps */}
            <div className="w-full h-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.74440002873!2d106.82206437499046!3d-6.168301060403154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e4851e02ab%3A0xf3d834febb0e73d4!2sMonas!5e0!3m2!1sid!2sid!4v1695208765432!5m2!1sid!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                    >
                </iframe>
            </div>

            {/* Konten */}
            <section className="mt-8" style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
                <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10">
                    {/* Bagian kiri info kontak */}
                    <div>
                        <motion.h2
                            className="text-2xl font-bold text-pink-500 mb-6 relative inline-block"
                            initial={{ opacity: 0, y: -50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            Contact Us
                            <span className="block w-35 h-1 bg-pink-500 mt-3 rounded mx-auto"></span>
                        </motion.h2>

                        <ul className="space-y-4 text-gray-700">
                            <p className="text-sm">Location</p>
                            <a
                                href="https://maps.app.goo.gl/XXXXX" // taro link Google Maps lokasi toko bro
                                target="_blank"
                                rel="noreferrer"
                                className="text-pink-500 flex items-center gap-2 mb-7"
                            >
                                <FontAwesomeIcon icon={faLocationDot} size="lg" />
                                <p className="text-sm">Jl. Contoh Alamat No.123, Jakarta</p>
                            </a>

                            <p className="text-sm">Phone Number</p>
                            <a
                                href="https://wa.me/6285692131328"
                                target="_blank"
                                rel="noreferrer"
                                className="text-pink-500 flex items-center gap-2 mb-7"
                            >
                                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                                <p className="text-sm">+62 856-9213-1328</p>
                            </a>

                            <p className="text-sm">Instagram</p>
                            <a
                                href="https://www.instagram.com/mikhael_a.n/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-pink-500 flex items-center gap-2 mb-7"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                                <p className="text-sm">@marcellabakeryandcake</p>
                            </a>

                            <p className="text-sm">Email Address</p>
                            <a
                                href="mailto:man070802@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                                className="text-pink-500 flex items-center gap-2"
                            >
                                <FontAwesomeIcon icon={faEnvelope} size="lg" />
                                <p className="text-sm">marcellabakeryandcake@gmail.com</p>
                            </a>
                        </ul>
                    </div>

                    {/* Kanan: Form */}
                    <div>
                        <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium">Nama</label>
                                <input
                                    type="text"
                                    className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                                    placeholder="Masukkan nama Anda"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                                    placeholder="Masukkan email Anda"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium">Pesan</label>
                                <textarea
                                    rows="4"
                                    className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-pink-400 outline-none"
                                    placeholder="Tulis pesan Anda"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition"
                            >
                                Kirim Pesan
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </motion.section>
    );
});

export default Contact;