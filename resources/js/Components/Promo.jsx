import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { forwardRef, useEffect, useState } from "react";
import slugify from "../utils/slugify";

const Promo = forwardRef((props, ref) => {
    const navigate = useNavigate();
    const [promos, setPromos] = useState([]);

    useEffect(() => {
        // Url BE Laravel
        fetch("http://localhost:8000/api/promos")
        .then((res) => res.json())
        .then((data) => setPromos(data))
        .catch((err) => console.error(err));
    }, []);

    return (
        // className="py-2 bg-pink-200 rounded-b-4xl scroll-mt-10"
        <section ref={ref}>
            <div className="max-w-7xl mx-auto text-center px-4 py-16" style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
                <motion.h2 
                    className="text-2xl text-pink-500 font-bold mb-6 relative inline-block"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    Promo Spesial 🎉
                    <span className="block w-35 h-1 bg-pink-500 mt-3 rounded mx-auto"></span>
                </motion.h2>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true, el: ".custom-pagination" }}
                    autoplay={{ delay: 3000 }}
                    breakpoints={{
                        640: { slidesPerView: 2 }, // tablet → 2 card
                        1024: { slidesPerView: 3 }, // laptop → 3 card
                    }}
                    className="rounded-2xl"
                >
                    {promos.map((promo, idx) => (
                        <SwiperSlide key={idx}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer"
                                onClick={() => navigate(`/promo-products/${promo.promo_product_id}/${slugify(promo.slug)}`)}
                            >
                                <img
                                    src={promo.images}
                                    alt={promo.title}
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay transparan */}
                                <div className="absolute inset-0 bg-black/25 z-10"></div>

                                {/* Text di atas overlay dengan background semi-transparent */}
                                <div className="absolute bottom-0 left-0 w-full z-20 bg-black/50 p-3">
                                    <h4 className="text-white text-medium font-bold drop-shadow-lg mb-1">{promo.title}</h4>
                                    <p className="text-white text-sm drop-shadow-lg">{promo.description}</p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* custom container pagination */}
                <div className="custom-pagination mt-6 flex justify-center"></div>
            </div>
        </section>
    );
});

export default Promo;