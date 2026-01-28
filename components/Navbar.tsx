
'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'About', href: '/about' },
        { name: 'Philosophy', href: '/running' },
        { name: 'Events', href: '/events' },
        { name: 'Achievements', href: '/achievements' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Academy', href: '/academy' },
        { name: 'Tools', href: '/tools/pace-calculator' },
        { name: 'Shop', href: '/shop' },
    ]

    return (
        <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-black/80 backdrop-blur-md supports-backdrop-filter:bg-black/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">

                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/" className="text-white font-black text-2xl tracking-tighter italic uppercase flex items-center gap-1 group">
                            Sivabalan <span className="text-red-600 group-hover:text-white transition-colors">Singam</span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-red-500 hover:scale-105 transition-all duration-200 text-sm font-bold uppercase tracking-wide"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide transition-all hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transform hover:-translate-y-0.5"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-8 w-8" /> : <Menu className="block h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-950 border-b border-zinc-800 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2 sm:px-3">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-white hover:bg-zinc-800 block px-3 py-4 rounded-md text-base font-bold uppercase tracking-wider"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="text-white bg-red-600 hover:bg-red-700 block px-3 py-4 rounded-md text-base font-bold uppercase tracking-wider mt-4 text-center"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
