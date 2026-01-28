
import FadeIn from '@/components/FadeIn'
import { Calendar, MapPin, ExternalLink, User } from 'lucide-react'
import { getEvents } from '@/app/actions/events'

export const revalidate = 60 // Revalidate every minute

export default async function EventsPage() {
    // Fetch real data from DB
    const events = await getEvents()

    return (
        <div className="pt-32 pb-20 min-h-screen max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-6">
                        Race <span className="text-red-600">Calendar</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Upcoming marathons, community runs, and pacing duties.
                        Join me on the start line.
                    </p>
                </div>
            </FadeIn>

            <div className="space-y-8">
                {events.length === 0 ? (
                    <div className="text-center py-20 bg-zinc-900/50 rounded-3xl border border-zinc-800">
                        <p className="text-gray-400 text-lg">No upcoming events scheduled at the moment.</p>
                    </div>
                ) : (
                    events.map((event, index) => (
                        <FadeIn key={event.id} delay={index * 0.1}>
                            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:border-red-600/50 transition-all duration-300 flex flex-col md:flex-row group">

                                {/* Date Box / Image Mobile */}
                                <div className="md:w-1/3 relative min-h-[200px] md:min-h-full">
                                    <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-colors"></div>
                                    {event.image_url ? (
                                        <img
                                            src={event.image_url}
                                            alt={event.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 w-full h-full bg-zinc-800 flex items-center justify-center">
                                            <Calendar className="text-zinc-700 w-12 h-12" />
                                        </div>
                                    )}
                                    <div className="absolute top-4 left-4 z-20 bg-zinc-950/90 backdrop-blur-md border border-zinc-800 p-3 rounded-xl text-center min-w-[80px]">
                                        <span className="block text-red-500 font-bold text-xs uppercase tracking-wider">{event.date.split(' ')[0]}</span>
                                        <span className="block text-white font-black text-2xl">{event.date.split(' ')[1]?.replace(',', '') || '00'}</span>
                                        <span className="block text-gray-400 text-xs">{event.date.split(' ')[2]}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="md:w-2/3 p-8 flex flex-col">
                                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                                        <div className="bg-zinc-800 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2">
                                            <User size={14} className="text-red-500" /> {event.role || 'Participant'}
                                        </div>
                                        <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${event.status === 'Confirmed' ? 'bg-green-900/30 text-green-400 border border-green-900' : 'bg-blue-900/30 text-blue-400 border border-blue-900'}`}>
                                            {event.status || 'Upcoming'}
                                        </div>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase mb-2 group-hover:text-red-500 transition-colors">
                                        {event.name}
                                    </h3>

                                    <div className="flex flex-col sm:flex-row gap-4 text-gray-400 text-sm mb-6">
                                        {event.time && <span className="flex items-center gap-2"><Calendar size={16} className="text-red-600" /> {event.time}</span>}
                                        {event.location && <span className="flex items-center gap-2"><MapPin size={16} className="text-red-600" /> {event.location}</span>}
                                    </div>

                                    <p className="text-gray-300 mb-8 leading-relaxed">
                                        {event.description}
                                    </p>

                                    <div className="mt-auto">
                                        {event.registration_link && (
                                            <a
                                                href={event.registration_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold uppercase text-sm tracking-wider hover:bg-red-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
                                            >
                                                Event Registration <ExternalLink size={16} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </FadeIn>
                    ))
                )}
            </div>

        </div>
    )
}
