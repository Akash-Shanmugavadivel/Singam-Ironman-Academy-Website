
import { MapPin, Target, Trophy, Users, Zap } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export default function AboutPage() {
    return (
        <div className="pt-24 pb-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Bio Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
                <FadeIn direction="right">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white uppercase italic">
                        About <span className="text-red-600">Sivabalan Singam</span>
                    </h1>
                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                        <p>
                            Sivabalan Singam (also known as E. Sivabalan) is a prominent Tamil Nadu–based marathon pacer
                            and hybrid athlete widely respected for his contribution to long-distance running culture.
                        </p>
                        <p>
                            He is known for community-driven marathon pacing, motivational fitness content, and
                            training runners at the grassroots level. His mission is to build a strong endurance-running
                            ecosystem in Tamil Nadu.
                        </p>
                        <p>
                            As the founder and face of <span className="text-white font-bold">Singam Ironman Academy</span>,
                            he trains and mentors runners preparing for half marathons, full marathons, and endurance events.
                        </p>
                    </div>
                </FadeIn>

                {/* Key Stats / Roles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FadeIn delay={0.1} direction="left" className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-colors">
                        <Target className="w-8 h-8 text-red-600 mb-4" />
                        <h3 className="text-white font-bold text-lg mb-2">Core Disciplines</h3>
                        <ul className="text-gray-400 space-y-2 text-sm">
                            <li>• Long-distance running</li>
                            <li>• Marathon Pacing (21K / 42K)</li>
                            <li>• Hybrid training</li>
                        </ul>
                    </FadeIn>
                    <FadeIn delay={0.2} direction="left" className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-colors">
                        <Zap className="w-8 h-8 text-red-600 mb-4" />
                        <h3 className="text-white font-bold text-lg mb-2">Impact</h3>
                        <ul className="text-gray-400 space-y-2 text-sm">
                            <li>• 100K+ Follower Brand</li>
                            <li>• Grassroots Training</li>
                            <li>• Community Motivation</li>
                        </ul>
                    </FadeIn>
                    <FadeIn delay={0.3} direction="left" className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-colors">
                        <MapPin className="w-8 h-8 text-red-600 mb-4" />
                        <h3 className="text-white font-bold text-lg mb-2">Location</h3>
                        <p className="text-gray-400 text-sm">
                            Sivagangai District,<br />Tamil Nadu, India
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.4} direction="left" className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-colors">
                        <Trophy className="w-8 h-8 text-red-600 mb-4" />
                        <h3 className="text-white font-bold text-lg mb-2">Recognition</h3>
                        <p className="text-gray-400 text-sm">
                            Trusted 21K pacer in major Tamil Nadu events.
                        </p>
                    </FadeIn>
                </div>
            </div>

            {/* Deep Dive Sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Athletic Focus */}
                <FadeIn delay={0.2} className="h-full">
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-colors h-full">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span>🏃</span> Athletic Focus
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-red-500 font-medium mb-2 uppercase text-sm tracking-wider">Training Environment</h3>
                                <p className="text-gray-400">Synthetic tracks, sports grounds, and road endurance routes.</p>
                            </div>
                            <div>
                                <h3 className="text-red-500 font-medium mb-2 uppercase text-sm tracking-wider">Gear Preference</h3>
                                <p className="text-gray-400">Adidas Running Shoes & Performance running apparel.</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Major Events */}
                <FadeIn delay={0.3} className="h-full">
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-colors h-full">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span>🏅</span> Participations
                        </h2>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 mt-1">•</span>
                                <span><strong className="text-white">Sivagiri Marathon</strong> (Sivaganga → Sivagiri)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 mt-1">•</span>
                                <span><strong className="text-white">Tata Mumbai Marathon</strong> (Participant)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 mt-1">•</span>
                                <span><strong className="text-white">Kolkata Marathon</strong> (25K events)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 mt-1">•</span>
                                <span><strong className="text-white">Erode Marathon</strong> (Local major)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-red-600 mt-1">•</span>
                                <span>Trusted 21K Pacer & Squad Leader</span>
                            </li>
                        </ul>
                    </div>
                </FadeIn>

                {/* Social Proof */}
                <FadeIn delay={0.4} className="h-full">
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-colors h-full">
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                            <span>📲</span> Social Presence
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-white font-medium">Instagram</span>
                                    <span className="text-red-500 font-bold">107K+</span>
                                </div>
                                <p className="text-sm text-gray-500">Marathon reels, pacing invites, motivation</p>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-white font-medium">YouTube</span>
                                    <span className="text-red-500 font-bold">36.6K+</span>
                                </div>
                                <p className="text-sm text-gray-500">21K pacing, marathon vlogs, training tips</p>
                            </div>
                            <div className="pt-4 border-t border-zinc-800">
                                <p className="text-gray-400 text-sm italic">
                                    "Known for high engagement, viral reels, and strong runner community influence."
                                </p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}
