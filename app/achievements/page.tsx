
import { getAchievements } from '../actions/achievements'
import AchievementCard from '@/components/AchievementCard'

export const revalidate = 60 // ISR: Revalidate every 60 seconds

export default async function AchievementsPage() {
    const achievements = await getAchievements()

    return (
        <div className="pt-24 pb-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Achievements</h1>
                <p className="text-gray-400 max-w-2xl text-lg">
                    Milestones in the journey of endurance. From local marathons to Ironman triathlons.
                </p>
            </div>

            {achievements.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievements.map((item) => (
                        <AchievementCard key={item.id} achievement={item} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                    <p className="text-gray-500 text-lg">No achievements added yet.</p>
                    <p className="text-gray-600 text-sm mt-2">Add them in your Supabase dashboard.</p>
                </div>
            )}
        </div>
    )
}
