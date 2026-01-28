
'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface FadeInProps {
    children: React.ReactNode
    delay?: number
    className?: string
    direction?: 'up' | 'down' | 'left' | 'right' | 'none'
    fullWidth?: boolean
}

export default function FadeIn({
    children,
    delay = 0,
    className = "",
    direction = 'up',
    fullWidth = false
}: FadeInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })

    const getDirectionOffset = () => {
        switch (direction) {
            case 'up': return { y: 40, x: 0 }
            case 'down': return { y: -40, x: 0 }
            case 'left': return { x: 40, y: 0 }
            case 'right': return { x: -40, y: 0 }
            case 'none': return { x: 0, y: 0 }
        }
    }

    const offset = getDirectionOffset()

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, ...offset }}
            animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offset }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98] // Premium custom easing
            }}
            className={className}
            style={{ width: fullWidth ? '100%' : 'auto' }}
        >
            {children}
        </motion.div>
    )
}
