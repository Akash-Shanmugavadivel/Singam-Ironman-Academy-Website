
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface StatCardProps {
    label: string
    value: string | number
    suffix?: string
}

export default function StatCard({ label, value, suffix = '' }: StatCardProps) {
    const ref = useRef(null)
    // Fix: Removed 'once: false' to ensure it doesn't disappear when scrolling up and down if that was the issue,
    // or use 'once: true' if you want it to only animate once.
    // Using default behavior or 'once: true' is usually best for stats.
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    // Parse number if possible
    const numValue = typeof value === 'string' ? parseFloat(value.replace(/[^0-9.]/g, '')) : value
    const isNumber = !isNaN(numValue)

    const [displayValue, setDisplayValue] = useState(0)

    useEffect(() => {
        if (isInView && isNumber) {
            const duration = 2000 // 2 seconds
            const steps = 60
            const increment = numValue / steps
            let current = 0

            const timer = setInterval(() => {
                current += increment
                if (current >= numValue) {
                    setDisplayValue(numValue)
                    clearInterval(timer)
                } else {
                    setDisplayValue(Math.floor(current))
                }
            }, duration / steps)

            return () => clearInterval(timer)
        }
    }, [isInView, isNumber, numValue])

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-2xl border border-zinc-800 text-center hover:border-red-600/30 transition-colors"
        >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-display">
                {isNumber ? displayValue : value}
                {suffix}<span className="text-red-600">+</span>
            </div>
            <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">{label}</p>
        </motion.div>
    )
}
