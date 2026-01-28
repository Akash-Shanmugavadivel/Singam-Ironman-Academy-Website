
import { Achievement } from '@/lib/types'
import Image from 'next/image'

export default function AchievementCard({ achievement }: { achievement: Achievement }) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-colors duration-300 group">
            {achievement.image_url && (
                <div className="relative h-64 w-full overflow-hidden">
                    <Image
                        src={achievement.image_url}
                        alt={achievement.title}
                        fill
                        unoptimized
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-zinc-900 to-transparent opacity-60"></div>
                </div>
            )}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white">{achievement.title}</h3>
                        {achievement.event_name && (
                            <p className="text-red-500 text-sm font-medium">{achievement.event_name}</p>
                        )}
                    </div>
                    {achievement.year && (
                        <span className="bg-zinc-800 text-gray-300 text-xs px-2 py-1 rounded-full border border-zinc-700">
                            {achievement.year}
                        </span>
                    )}
                </div>

                {achievement.distance_km && (
                    <div className="flex items-center text-gray-400 text-sm mb-4">
                        <span className="mr-2">🏁</span>
                        {achievement.distance_km}km Run
                    </div>
                )}

                {achievement.description && (
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {achievement.description}
                    </p>
                )}
            </div>
        </div>
    )
}
