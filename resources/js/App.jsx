import { useRef, useState, useEffect, useReducer } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import WhyChooseUs from "./Components/WhyChooseUs";
import Categories from "./Components/Categories";
import Products from "./Components/Products";
import Menu from "./Components/Menu";
import Preview from "./Components/Preview";
import Promo from "./Components/Promo";
import PromoProducts from "./Components/PromoProducts";
import GalleryTeaser from "./Components/GalleryTeaser";
import GalleryPage from "./Components/GalleryPage";
import Testimoni from "./Components/Testimoni";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

// Wrapper biar Products remount tiap ganti categoryId
function ProductsWrapper() {
    const { categoryId } = useParams();
    return <Products key={categoryId} />;
}

function AppContent() {
    const heroRef = useRef(null);
    const aboutRef = useRef(null);
    const categoriesRef = useRef(null);
    const menuRef = useRef(null);
    const promoRef = useRef(null);
    const galleryRef = useRef(null);
    const testimoniRef = useRef(null);
    const [scrollTarget, setScrollTarget] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);
    const [isClicking, setIsClicking] = useState(false);
    const location = useLocation();

    // ✅ Tangkap scrollTarget yang dikirim via location.state dari Navbar
    useEffect(() => {
        if (location.pathname === "/" && location.state?.scrollTarget) {
        setScrollTarget(location.state.scrollTarget);

        // reset supaya nggak repeat kalau user scroll manual
        window.history.replaceState({}, document.title, "/");
        }
    }, [location]);

    // scroll target kalau dari klik navbar
    useEffect(() => {
        const refs = {
        home: heroRef,
        about: aboutRef,
        categories: categoriesRef,
        menu: menuRef,
        promo: promoRef,
        gallery: galleryRef,
        testimoni: testimoniRef,
        };

        if (scrollTarget && refs[scrollTarget]?.current) {
        const yOffset = -64; // tinggi navbar
        const y = refs[scrollTarget].current.getBoundingClientRect().top +
            window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });

        // lock spy supaya gak override
        setIsClicking(true);

        // setelah animasi scroll, baru reset
        setTimeout(() => {
            setIsClicking(false);
            setScrollTarget(null);
        }, 800);
        }
    }, [scrollTarget]);

    // scroll spy (ubah activeMenu sesuai section yang kelihatan)
    useEffect(() => {
        if (location.pathname !== "/") {
        return;
        }

        const sections = [
        { key: "home", ref: heroRef },
        { key: "about", ref: aboutRef },
        { key: "categories", ref: categoriesRef },
        { key: "menu", ref: menuRef },
        { key: "promo", ref: promoRef },
        { key: "gallery", ref: galleryRef },
        { key: "testimoni", ref: testimoniRef },
        ];

        const observer = new IntersectionObserver(
        (entries) => {
            if (isClicking) return; // lagi klik, jangan override

            // ✅ kalau user di atas banget, paksa Home
            if (window.scrollY < 100) {
            setActiveMenu("home");
            return;
            }

            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveMenu(entry.target.id);
            }
            });
        },
        { threshold: 0.5 }
        );

        sections.forEach(({ key, ref }) => {
        if (ref.current) {
            ref.current.id = key; // kasih id = key nav
            observer.observe(ref.current);
        }
        });

        return () => observer.disconnect();
    }, [isClicking, location.pathname]);

    useEffect(() => {
        if (location.pathname !== "/") {
        // kalau bukan di home, jangan highlight apa2
        setActiveMenu(null);
        }
    }, [location.pathname]);

    // efek untuk scroll setelah page load
    // useEffect(() => {
    //   if (scrollTarget === "about" && aboutRef.current) {
    //     const yOffset = -64; // tinggi navbar
    //     const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    //     window.scrollTo({ top: y, behavior: "smooth" });
    //     setScrollTarget(null);
    //   }

    //   if (scrollTarget === "categories" && categoriesRef.current) {
    //     const yOffset = -64;
    //     const y = categoriesRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    //     window.scrollTo({ top: y, behavior: "smooth" });
    //     setScrollTarget(null);
    //   }

    //   if (scrollTarget === "menu" && menuRef.current) {
    //     const yOffset = -64;
    //     const y = menuRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    //     window.scrollTo({ top: y, behavior: "smooth" });
    //     setScrollTarget(null);
    //   }

    //   if (scrollTarget === "promo" && promoRef.current) {
    //     const yOffset = -64;
    //     const y = promoRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    //     window.scrollTo({ top: y, behavior: "smooth" });
    //     setScrollTarget(null);
    //   }
    // }, [location.pathname, scrollTarget]);

    return (
        <>
        <Navbar setScrollTarget={setScrollTarget} activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        <ScrollToTop />
        <Routes>
            <Route
            path="/"
            element={
                <>
                <div ref={heroRef}><Hero /></div>
                <div ref={aboutRef}><About /></div>
                <WhyChooseUs />
                <div ref={categoriesRef}><Categories /></div>
                <div ref={menuRef}><Menu /></div>
                <div ref={promoRef}><Promo /></div>
                <div ref={galleryRef}><GalleryTeaser /></div>
                <div ref={testimoniRef}><Testimoni /></div>
                <Contact/>
                </>
            }
            />
            {/* ✅ Pakai wrapper biar Products remount tiap ganti kategori */}
            <Route path="/product-category" element={<ProductsWrapper />} />
            <Route path="/product-category/:categoryId" element={<ProductsWrapper />} />
            <Route path="/preview/:id/:slug" element={<Preview />} />
            <Route path="/promo-products/:id/:slug" element={<PromoProducts />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/:categoryId" element={<GalleryPage />} />
        </Routes>
        <Footer />
        </>
    );
}

export default function App() {
    return (
        <Router>
        <AppContent />
        </Router>
    );
}