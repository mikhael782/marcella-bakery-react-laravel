import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"; // ✅ bukan free-solid

export default function Footer() {
    return (
        <footer className="bg-pink-500 text-white py-6 mt-10" style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8 mt-4">
                {/* Kolom Kiri: Nama Brand + Sosmed */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">Marcella Bakery & Cake 🍰</h2>

                    {/* Social Media */}
                    <div className="flex justify-center md:justify-start space-x-2">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-gray-200"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="lg" /> {/* ✅ pakai icon */}
                        </a>
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-gray-200"
                        >
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a
                            href="https://wa.me/628123456789"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-gray-200"
                        >
                            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                        </a>
                    </div>
                </div>
                
                {/* Kolom Tengah: Menu Link */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm font-medium">
                        <li className="hover:text-gray-200 cursor-pointer">Home</li>
                        <li className="hover:text-gray-200 cursor-pointer">About</li>
                        <li className="hover:text-gray-200 cursor-pointer">Menu</li>
                        <li className="hover:text-gray-200 cursor-pointer">Testimoni</li>
                        <li className="hover:text-gray-200 cursor-pointer">Contact</li>
                    </ul>
                </div>
                
                <div>
                    <h3 className="text-lg font-semibold mb-3">Categories</h3>
                    <ul className="space-y-2 text-sm font-medium">
                        <li className="hover:text-gray-200 cursor-pointer">Cakes</li>
                        <li className="hover:text-gray-200 cursor-pointer">Handmade Cookies</li>
                        <li className="hover:text-gray-200 cursor-pointer">Bread</li>
                        <li className="hover:text-gray-200 cursor-pointer">Bolu & Brownies</li>
                    </ul>
                </div>

                {/* Kolom Kanan: Alamat */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Alamat Kami</h3>
                    <p className="text-sm text-gray-100 leading-relaxed">
                        Jl. Mawar No. 123<br />
                        Jakarta Selatan, Indonesia<br />
                        Telp: (021) 123-4567
                    </p>
                </div>           
            </div>

            {/* Copyright */}
            <div className="text-center text-sm mt-8 text-gray-100 border-t border-pink-400 pt-4">
                © {new Date().getFullYear()} Marcella Bakery & Cake. All rights reserved.
            </div>
        </footer>
    );
}
