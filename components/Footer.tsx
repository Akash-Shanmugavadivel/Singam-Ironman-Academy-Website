
import Link from 'next/link'
import { Calendar, ShoppingBag, Youtube, Instagram, MapPin } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-black border-t border-zinc-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <h2 className="text-2xl font-black italic text-white uppercase mb-4 tracking-tighter">
                            Sivabalan <span className="text-red-600">Singam</span>
                        </h2>
                        <p className="text-gray-400 text-sm max-w-sm mb-6 leading-relaxed">
                            Building a stronger, healthier Tamil Nadu through endurance sports.
                            Join the movement. Train with the Lion.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com/sivabalan_singam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-zinc-900 p-3 rounded-full text-white hover:bg-red-600 hover:scale-110 transition-all"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="https://youtube.com/@SivabalanSingam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-zinc-900 p-3 rounded-full text-white hover:bg-red-600 hover:scale-110 transition-all"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Explore</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-red-500 transition-colors">About Siva</Link></li>
                            <li><Link href="/academy" className="hover:text-red-500 transition-colors">Singam Ironman Academy</Link></li>
                            <li><Link href="/running" className="hover:text-red-500 transition-colors">Running Philosophy</Link></li>
                            <li><Link href="/gallery" className="hover:text-red-500 transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact / Location */}
                    <div>
                        <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-red-600 shrink-0" />
                                <span>Sivagangai District,<br />Tamil Nadu, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Calendar className="w-5 h-5 text-red-600 shrink-0" />
                                <span><Link href="/contact" className="hover:text-white underline">Book for Events / Pacing</Link></span>
                            </li>
                            <li className="flex items-center gap-3">
                                <ShoppingBag className="w-5 h-5 text-red-600 shrink-0" />
                                <span><Link href="/shop" className="hover:text-white transition-colors">Gear & Merch</Link></span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
                    <p>&copy; {new Date().getFullYear()} Sivabalan Singam. All rights reserved.</p>
                    <p>Designed with <span className="text-red-900">Endurance</span></p>
                </div>

            </div>
        </footer>
    )
}
