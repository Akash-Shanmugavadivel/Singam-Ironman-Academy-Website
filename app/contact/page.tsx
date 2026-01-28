
'use client'
import { createLead } from '../actions/leads'
import { useState } from 'react'
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react'
import FadeIn from '@/components/FadeIn'

export default function ContactPage() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

    async function handleSubmit(formData: FormData) {
        setStatus('submitting')
        try {
            await createLead(formData)
            setStatus('success')
        } catch (e) {
            console.error(e)
            setStatus('error')
        }
    }

    return (
        <div className="min-h-screen pt-32 pb-20 px-4 relative overflow-hidden">

            {/* Background Decor */}
            <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>
            <div className="fixed bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h1 className="text-5xl md:text-7xl font-black uppercase italic text-white mb-6">
                            Get in <span className="text-red-600">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Ready to start your endurance journey? Have a collaboration in mind?
                            <br /> Let's connect.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info Column */}
                    <div className="space-y-10">
                        <FadeIn delay={0.2} direction="right">
                            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800 hover:border-red-600/30 transition-all">
                                <MapPin className="w-10 h-10 text-red-600 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-2">Based In</h3>
                                <p className="text-gray-400 text-lg">
                                    Sivagangai District,<br />
                                    Tamil Nadu, India
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3} direction="right">
                            <div className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800 hover:border-red-600/30 transition-all">
                                <MessageSquare className="w-10 h-10 text-red-600 mb-6" />
                                <h3 className="text-2xl font-bold text-white mb-2">Connect</h3>
                                <p className="text-gray-400 mb-6">Follow the journey on social media.</p>
                                <div className="flex gap-4">
                                    <a href="https://instagram.com/sivabalan_singam" target="_blank" className="text-white hover:text-red-500 font-bold uppercase tracking-wider text-sm border-b border-transparent hover:border-red-500 transition-all">
                                        Instagram ↗
                                    </a>
                                    <a href="https://youtube.com/@SivabalanSingam" target="_blank" className="text-white hover:text-red-500 font-bold uppercase tracking-wider text-sm border-b border-transparent hover:border-red-500 transition-all">
                                        YouTube ↗
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Form Column */}
                    <FadeIn delay={0.4} direction="left">
                        <div className="bg-zinc-900/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
                            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

                            {status === 'success' ? (
                                <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-8 text-center animate-fade-in">
                                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                                    <p className="text-gray-300">Thank you for reaching out. I'll get back to you shortly.</p>
                                    <button onClick={() => setStatus('idle')} className="mt-6 text-green-500 hover:text-green-400 text-sm font-bold uppercase">Send another</button>
                                </div>
                            ) : (
                                <form action={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Name</label>
                                        <input
                                            name="name"
                                            id="name"
                                            placeholder="Your Name"
                                            className="w-full p-4 bg-black/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Email</label>
                                        <input
                                            name="email"
                                            type="email"
                                            id="email"
                                            placeholder="your@email.com"
                                            className="w-full p-4 bg-black/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wide">Message</label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Tell me about your training goals..."
                                            rows={5}
                                            className="w-full p-4 bg-black/50 border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all resize-none"
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-5 rounded-xl transition-all duration-200 transform hover:scale-[1.02] shadow-[0_4px_14px_0_rgba(220,38,38,0.39)] uppercase tracking-widest flex items-center justify-center gap-2"
                                    >
                                        {status === 'submitting' ? 'Sending...' : <>Send Message <Send size={18} /></>}
                                    </button>
                                </form>
                            )}
                        </div>
                    </FadeIn>

                </div>
            </div>
        </div>
    )
}
