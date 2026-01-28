
import { CheckCircle2, Trophy, Users } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

export default function AcademyPage() {
    return (
        <div className="pt-24 pb-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Academy Header */}
            <FadeIn direction="up">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-6">
                        Singam <span className="text-red-600">Ironman</span> Academy
                    </h1>
                    <p className="text-xl text-gray-300">
                        "To create disciplined, mentally strong, and consistent endurance runners."
                    </p>
                </div>
            </FadeIn>

            {/* Three Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                <FadeIn delay={0.1}>
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 relative overflow-hidden group hover:border-red-600/50 transition-colors h-full">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users size={100} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Audience</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600 w-5 h-5" /> Beginners to Intermediate</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600 w-5 h-5" /> Marathon Aspirants</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600 w-5 h-5" /> Fitness Enthusiasts</li>
                        </ul>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 relative overflow-hidden group hover:border-red-600/50 transition-colors h-full">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Trophy size={100} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Training</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600 w-5 h-5" /> Structured Marathon Plans</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600 w-5 h-5" /> Pacing Guidance</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600 w-5 h-5" /> Group Squad Runs</li>
                        </ul>
                    </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 relative overflow-hidden group hover:border-red-600/50 transition-colors h-full">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Users size={100} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Mindset</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600 w-5 h-5" /> Motivation Coaching</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600 w-5 h-5" /> Mental Toughness</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600 w-5 h-5" /> Consistency Building</li>
                        </ul>
                    </div>
                </FadeIn>
            </div>

            {/* CTA Section */}
            <FadeIn delay={0.4}>
                <div className="bg-linear-to-r from-red-900/20 to-zinc-900 border border-red-900/50 rounded-3xl p-10 md:p-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Run Like a Lion?</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
                        Whether you are training for your first 5K or looking to conquer a full marathon,
                        Singam Ironman Academy provides the structure and community you need.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(220,38,38,0.5)]"
                    >
                        Join the Squad
                    </Link>
                </div>
            </FadeIn>

        </div>
    )
}
