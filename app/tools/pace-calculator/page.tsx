
'use client'
import { useState, useEffect } from 'react'
import FadeIn from '@/components/FadeIn'
import { Timer, ArrowRight, Activity } from 'lucide-react'

export default function PaceCalculator() {
    const [distance, setDistance] = useState<number>(5) // km
    const [hours, setHours] = useState<number>(0)
    const [minutes, setMinutes] = useState<number>(25)
    const [seconds, setSeconds] = useState<number>(0)
    const [pace, setPace] = useState<{ min: number, sec: number }>({ min: 5, sec: 0 })
    const [speed, setSpeed] = useState<number>(12)

    useEffect(() => {
        // Calculate Pace and Speed whenever inputs change
        const totalMinutes = hours * 60 + minutes + seconds / 60
        if (totalMinutes > 0 && distance > 0) {
            const paceDec = totalMinutes / distance
            const pMin = Math.floor(paceDec)
            const pSec = Math.round((paceDec - pMin) * 60)
            setPace({ min: pMin, sec: pSec })

            const speedVal = distance / (totalMinutes / 60)
            setSpeed(parseFloat(speedVal.toFixed(2)))
        }
    }, [distance, hours, minutes, seconds])

    return (
        <div className="pt-32 pb-20 min-h-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-6">
                        Pace <span className="text-red-600">Calculator</span>
                    </h1>
                    <p className="text-xl text-gray-300">
                        Plan your race. Hit your targets.
                    </p>
                </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Inputs */}
                <FadeIn delay={0.2} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl h-full">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Activity className="text-red-600" /> Input Details
                    </h3>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-gray-400 text-sm font-bold uppercase mb-2">Distance (km)</label>
                            <select
                                value={distance}
                                onChange={(e) => setDistance(parseFloat(e.target.value))}
                                className="w-full p-4 bg-black border border-zinc-700 rounded-xl text-white focus:border-red-600 outline-none"
                            >
                                <option value="5">5K Run</option>
                                <option value="10">10K Run</option>
                                <option value="21.0975">Half Marathon (21.1K)</option>
                                <option value="42.195">Full Marathon (42.2K)</option>
                                <option value="1">1 km (Custom)</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-gray-400 text-sm font-bold uppercase mb-2">Hrs</label>
                                <input
                                    type="number" min="0" value={hours} onChange={(e) => setHours(Number(e.target.value))}
                                    className="w-full p-4 bg-black border border-zinc-700 rounded-xl text-white focus:border-red-600 outline-none text-center"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-bold uppercase mb-2">Mins</label>
                                <input
                                    type="number" min="0" max="59" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))}
                                    className="w-full p-4 bg-black border border-zinc-700 rounded-xl text-white focus:border-red-600 outline-none text-center"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-bold uppercase mb-2">Secs</label>
                                <input
                                    type="number" min="0" max="59" value={seconds} onChange={(e) => setSeconds(Number(e.target.value))}
                                    className="w-full p-4 bg-black border border-zinc-700 rounded-xl text-white focus:border-red-600 outline-none text-center"
                                />
                            </div>
                        </div>
                    </div>
                </FadeIn>

                {/* Results */}
                <FadeIn delay={0.4} className="bg-linear-to-br from-red-900/20 to-black border border-red-900/50 p-8 rounded-3xl h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                        <Timer className="text-red-500" /> Your Stats
                    </h3>

                    <div className="space-y-8">
                        <div className="text-center">
                            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Required Pace</p>
                            <p className="text-6xl font-black text-white font-display">
                                {pace.min}:{pace.sec < 10 ? `0${pace.sec}` : pace.sec}
                                <span className="text-lg text-red-500 font-bold ml-2">/km</span>
                            </p>
                        </div>

                        <div className="h-px bg-white/10 w-full"></div>

                        <div className="text-center">
                            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Average Speed</p>
                            <p className="text-4xl font-bold text-gray-300">
                                {speed} <span className="text-sm">km/hr</span>
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </div>

        </div>
    )
}
