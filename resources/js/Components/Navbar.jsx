import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react"; // tambahin icon User
import { useState } from "react";

export default function Navbar({ setScrollTarget, activeMenu, setActiveMenu }) {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = (menu, target = null) => {
        if (target) {
            if (location.pathname !== "/") {
                navigate("/", { state: { scrollTarget: target } });
            } else {
                setScrollTarget(target);
            }
        }

        if (menu === "home") {
            if (location.pathname !== "/") {
                navigate("/", { state: { scrollTarget: "home" } });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setScrollTarget("home");
            }
        }

        setActiveMenu(menu);
        setIsOpen(false);
    };

    const navItems = [
        { label: "Home", key: "home" },
        { label: "About", key: "about", target: "about" },
        { label: "Categories", key: "categories", target: "categories" },
        { label: "Menu", key: "menu", target: "menu" },
        { label: "Promo", key: "promo", target: "promo" },
        { label: "Gallery", key: "gallery", target: "gallery" },
        { label: "Testimoni", key: "testimoni", target: "testimoni" },
        { label: "Contact", key: "contact", target: "contact" },
    ];

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 py-2"
            style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-pink-500">
                    Marcella Bakery & Cake 🍰
                </h2>

                {/* Desktop Menu */}
                <ul className="hidden md:flex text-black font-medium list-none items-center">
                    {navItems.map((item) => (
                        <li
                            key={item.key}
                            onClick={() => handleClick(item.key, item.target)}
                            className={`cursor-pointer px-3 py-2 rounded-full transition
                                ${activeMenu === item.key ? "bg-pink-500 text-white" : "hover:bg-pink-100 hover:text-pink-500"}`}
                        >
                            {item.label}
                        </li>
                    ))}

                    {/* User Icon + Login/Register */}
                    <li
                        onClick={() => navigate("/login")}
                        className="flex items-center cursor-pointer px-3 py-2 rounded-full hover:bg-pink-100 hover:text-pink-500 transition ml-4"
                    >
                        <User size={18} className="mr-1" /> Login
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-pink-500 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28}/> : <Menu size={28}/>}
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-white shadow-md">
                        <ul className="flex flex-col space-y-3 py-4 px-6 text-black font-medium">
                            {navItems.map((item) => (
                                <li
                                    key={item.key}
                                    onClick={() => handleClick(item.key, item.target)}
                                    className={`cursor-pointer px-4 py-2 rounded-full transition 
                                        ${activeMenu === item.key 
                                            ? "bg-pink-500 text-white" 
                                            : "hover:bg-pink-100 hover:text-pink-500"}`}
                                >
                                    {item.label}
                                </li>
                            ))}

                            {/* User Icon + Login/Register */}
                            <li
                                onClick={() => navigate("/login")}
                                className="flex items-center cursor-pointer px-4 py-2 rounded-full hover:bg-pink-100 hover:text-pink-500 transition mt-2"
                            >
                                <User size={18} className="mr-1" /> Login
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}