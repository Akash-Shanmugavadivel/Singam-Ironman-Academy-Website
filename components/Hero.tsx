
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function Hero() {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section ref={containerRef} className="text-center py-32 px-4 relative overflow-hidden min-h-[95vh] flex items-center justify-center">

            {/* Parallax Background */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 w-full h-full -z-20"
            >
                <div className="absolute inset-0 bg-black"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
                {/* Animated Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/50 to-black"></div>
            </motion.div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-red-600/30 bg-red-600/10 backdrop-blur-md">
                        <span className="text-red-500 font-bold text-xs uppercase tracking-[0.2em]">Endurance • Discipline • Community</span>
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-6 uppercase italic leading-[0.9] font-display">
                        Singam pol <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-red-600 to-red-800 outline-text drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">Strength</span> enakku
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl font-medium text-gray-300 mb-8 font-body tracking-wide max-w-2xl mx-auto"
                >
                    Hybrid Athlete • Marathon Pacer • Fitness Trainer
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <a
                        href="#about"
                        className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        Start Journey
                    </a>
                    <a
                        href="/contact"
                        className="text-white border border-white/20 px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all backdrop-blur-md"
                    >
                        Join Academy
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
                <div className="w-px h-12 bg-linear-to-b from-red-600 to-transparent"></div>
            </motion.div>

        </section>
    )
}
