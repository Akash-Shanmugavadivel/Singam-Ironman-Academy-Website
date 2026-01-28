
import Hero from '@/components/Hero'
import StatCard from '@/components/StatCard'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'
import { ArrowRight, Trophy, Users, Zap } from 'lucide-react'
import { getEvents } from '@/app/actions/events'

export const revalidate = 60

export default async function HomePage() {
  const allEvents = await getEvents()
  // Show only first 3 events on home page
  const upcomingEvents = allEvents.slice(0, 3)

  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      <Hero />

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 -mt-20">
        <div id="about" className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard label="Instagram Followers" value="107" suffix="K" />
          <StatCard label="YouTube Subscribers" value="36.6" suffix="K" />
          <StatCard label="Community Impact" value="100" suffix="K" />
        </div>
      </section>


      {/* Upcoming Events Section - NEW FEATURE */}
      <section className="py-20 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white mb-2">
                  Upcoming <span className="text-red-600">Race</span> Calendar
                </h2>
                <p className="text-gray-400">Join Sivabalan at these upcoming events.</p>
              </div>
              <Link href="/events" className="text-white border-b border-red-600 pb-1 hover:text-red-500 transition-colors uppercase text-sm font-bold tracking-wider">
                View All Events ↗
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.length === 0 ? (
              <div className="col-span-3 text-center py-12 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                <p className="text-gray-500">No upcoming events found.</p>
              </div>
            ) : (
              upcomingEvents.map((event, i) => (
                <FadeIn key={event.id} delay={i * 0.1}>
                  <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-red-600/50 transition-colors group h-full flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div className="bg-zinc-800 text-white font-bold px-3 py-1 rounded text-xs uppercase tracking-wide group-hover:bg-red-600 transition-colors">
                        {event.status || 'Upcoming'}
                      </div>
                      <span className="text-gray-500 text-sm font-mono">{event.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{event.name}</h3>
                    <p className="text-red-500 text-sm font-medium flex items-center gap-2 mb-4">
                      <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span> {event.role || 'Participant'}
                    </p>
                    <div className="mt-auto">
                      <Link href="/events" className="text-xs text-gray-400 hover:text-white border-b border-zinc-700 hover:border-white pb-0.5 transition-all">
                        View Details & Register
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Content Teaser Section - NEW */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black italic uppercase text-white mb-6">
                Why We <span className="text-red-600">Run</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                It's more than just miles. It's about building a stronger version of yourself,
                step by step, one breath at a time.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 */}
            <FadeIn delay={0.1} className="h-full">
              <Link href="/academy" className="group block bg-zinc-900 border border-zinc-800 p-8 rounded-3xl h-full hover:border-red-600 transition-all duration-300 hover:-translate-y-2">
                <div className="bg-zinc-800 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <Users className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Join the Academy</h3>
                <p className="text-gray-400 mb-6">Train with squads, get pacer guidance, and prepare for your next marathon with discipline.</p>
                <span className="text-red-500 font-bold uppercase text-sm tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Start Training <ArrowRight size={16} />
                </span>
              </Link>
            </FadeIn>

            {/* Card 2 */}
            <FadeIn delay={0.2} className="h-full">
              <Link href="/achievements" className="group block bg-zinc-900 border border-zinc-800 p-8 rounded-3xl h-full hover:border-red-600 transition-all duration-300 hover:-translate-y-2">
                <div className="bg-zinc-800 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <Trophy className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Siva's Journey</h3>
                <p className="text-gray-400 mb-6">From local 5Ks to pacing major marathons across India. Explore the milestones.</p>
                <span className="text-red-500 font-bold uppercase text-sm tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  View Achievements <ArrowRight size={16} />
                </span>
              </Link>
            </FadeIn>

            {/* Card 3 */}
            <FadeIn delay={0.3} className="h-full">
              <Link href="/shop" className="group block bg-zinc-900 border border-zinc-800 p-8 rounded-3xl h-full hover:border-red-600 transition-all duration-300 hover:-translate-y-2">
                <div className="bg-zinc-800 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <Zap className="text-white w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Gear Up</h3>
                <p className="text-gray-400 mb-6">Discover the equipment, shoes, and nutrition that power endurance athletes.</p>
                <span className="text-red-500 font-bold uppercase text-sm tracking-wider flex items-center gap-2 group-hover:gap-3 transition-all">
                  Visit Shop <ArrowRight size={16} />
                </span>
              </Link>
            </FadeIn>

          </div>
        </div>

        {/* Background Gradients */}
        <div className="absolute top-1/2 left-0 w-full h-[500px] bg-red-600/5 blur-[100px] -z-10 pointer-events-none"></div>
      </section>

      {/* Decorative Grid Background */}
      <div className="fixed inset-0 -z-30 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"></div>
    </main>
  )
}
