
import { Flag, Heart, Share2, Timer, Zap } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export default function RunningPage() {
    return (
        <div className="pt-24 pb-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <FadeIn>
                <div className="mb-20">
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-6">
                        The <span className="text-red-600">Running</span> Philosophy
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                        Running is not just about movement; it's a discipline. It's about breaking mental barriers,
                        finding rhythm in chaos, and discovering efficiency in motion.
                        <span className="block mt-4 text-white font-medium">"Slow start is better than static."</span>
                    </p>
                </div>
            </FadeIn>

            {/* Why Run Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                <div className="space-y-12">

                    <FadeIn delay={0.1} direction="right">
                        <div className="flex gap-6">
                            <div className="bg-zinc-900 p-4 rounded-xl h-fit border border-zinc-800">
                                <Heart className="text-red-600 w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Why Everyone Runs</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    Humans are born to move. Running reconnects us with our primal endurance.
                                    Whether it's escaping stress, chasing a PB, or finding clarity, the road listens to everyone.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2} direction="right">
                        <div className="flex gap-6">
                            <div className="bg-zinc-900 p-4 rounded-xl h-fit border border-zinc-800">
                                <Zap className="text-red-600 w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-3">Health Benefits</h3>
                                <ul className="space-y-2 text-gray-400">
                                    <li>• Cardiovascular endurance & heart health</li>
                                    <li>• Mental resilience & stress reduction</li>
                                    <li>• Strengthens bones & joints (Wolff's Law)</li>
                                    <li>• Boosts metabolism & energy levels</li>
                                </ul>
                            </div>
                        </div>
                    </FadeIn>

                </div>

                {/* Visual / Quote Block */}
                <FadeIn delay={0.2} direction="left" className="h-full">
                    <div className="relative bg-zinc-900 rounded-3xl p-10 flex items-center justify-center border border-zinc-800 overflow-hidden h-full">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[80px] rounded-full"></div>
                        <blockquote className="relative z-10 text-center">
                            <p className="text-3xl md:text-4xl font-black text-white italic leading-tight mb-6">
                                "PAIN IS TEMPORARY.<br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-800">GLORY IS FOREVER.</span>"
                            </p>
                            <cite className="text-gray-500 not-italic uppercase tracking-widest text-sm">- Marathon Mindset</cite>
                        </blockquote>
                    </div>
                </FadeIn>
            </div>

            {/* Running Types Section */}
            <div className="mb-20">
                <FadeIn>
                    <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
                        <Flag className="text-red-600" /> Types of Running
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1 */}
                    <FadeIn delay={0.1}>
                        <div className="group bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 h-full">
                            <Timer className="w-10 h-10 text-gray-500 group-hover:text-white mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-3">Easy / Recovery Runs</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                The foundation of training. Ran at a conversational pace to build aerobic base and recover from hard sessions.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 2 */}
                    <FadeIn delay={0.2}>
                        <div className="group bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 h-full">
                            <Zap className="w-10 h-10 text-red-600 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">Tempo / Threshold</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                "Comfortably hard." Pushing the lactate threshold to run faster for longer without fatigue.
                            </p>
                        </div>
                    </FadeIn>

                    {/* Card 3 */}
                    <FadeIn delay={0.3}>
                        <div className="group bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-red-600/50 transition-all duration-300 h-full">
                            <Share2 className="w-10 h-10 text-gray-500 group-hover:text-white mb-6 transition-colors" />
                            <h3 className="text-xl font-bold text-white mb-3">Long Runs</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                The church of Sunday. Building mental grit and physical endurance. The key to marathon success.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </div>

        </div>
    )
}
