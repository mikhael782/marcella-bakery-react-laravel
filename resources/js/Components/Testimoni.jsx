import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import "swiper/css";
import testimoni from "../data/testimoni.json";

const Testimoni = forwardRef((props, ref) => {
    return (
        <section ref={ref} className="py-16" style={{ fontFamily: '"Comic Sans MS", "Comic Neue", sans-serif' }}>
            <div className="max-w-6xl mx-auto px-4 text-center">
                <motion.h2 
                    className="text-2xl font-bold text-pink-500 relative inline-block mb-6"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    What Do They Say?
                    <span className="block w-35 h-1 bg-pink-500 mt-3 rounded mx-auto"></span>
                </motion.h2>

                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={2}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 }
                    }}
                >
                    {testimoni.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-pink-500 shadow-lg rounded-2xl p-6 flex flex-col items-center text-center w-full h-[250px] cursor-pointer">
                                <img
                                    src={item.photo}
                                    alt={item.name}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-white mb-4"
                                />
                                <p className="text-white mb-4">{item.text}</p>
                                <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                                <span className="text-sm text-white">{item.role}</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
});

export default Testimoni;