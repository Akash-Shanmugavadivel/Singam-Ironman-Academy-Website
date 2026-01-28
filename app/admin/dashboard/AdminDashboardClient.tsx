
'use client'
import { useState } from 'react'
import { Lead, Event, Achievement, GalleryImage, Product } from '@/lib/types'
import { deleteEvent, createEvent } from '@/app/actions/events'
import { createAchievement, deleteAchievement } from '@/app/actions/achievements'
import { createGalleryImage, deleteGalleryImage } from '@/app/actions/gallery'
import { createProduct, deleteProduct } from '@/app/actions/shop'
import { Calendar, Trophy, Image as ImageIcon, MessageSquare, Trash2, Plus, X, ShoppingBag } from 'lucide-react'

type Tab = 'events' | 'achievements' | 'gallery' | 'leads' | 'shop'

interface Props {
    initialLeads: Lead[]
    initialEvents: Event[]
    initialAchievements: Achievement[]
    initialGallery: GalleryImage[]
    initialProducts: Product[]
}

export default function AdminDashboardClient({
    initialLeads,
    initialEvents,
    initialAchievements,
    initialGallery,
    initialProducts
}: Props) {
    const [activeTab, setActiveTab] = useState<Tab>('events')
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    // Local state for instant UI updates (in a real app, use SWR/React Query or better server action patterns)
    const [events, setEvents] = useState(initialEvents)
    const [achievements, setAchievements] = useState(initialAchievements)
    const [gallery, setGallery] = useState(initialGallery)
    const [products, setProducts] = useState(initialProducts)

    // Handlers
    async function handleDeleteEvent(id: string) {
        if (!confirm('Delete this event?')) return
        await deleteEvent(id)
        setEvents(events.filter(e => e.id !== id))
    }

    async function handleDeleteAchievement(id: string) {
        if (!confirm('Delete this achievement?')) return
        await deleteAchievement(id)
        setAchievements(achievements.filter(a => a.id !== id))
    }

    async function handleDeleteGallery(id: string) {
        if (!confirm('Delete this image?')) return
        await deleteGalleryImage(id)
        setGallery(gallery.filter(g => g.id !== id))
    }

    async function handleDeleteProduct(id: string) {
        if (!confirm('Delete this product?')) return
        await deleteProduct(id)
        setProducts(products.filter(p => p.id !== id))
    }

    async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)
        const formData = new FormData(e.currentTarget)
        try {
            if (activeTab === 'events') {
                await createEvent(formData)
                window.location.reload()
            } else if (activeTab === 'achievements') {
                await createAchievement(formData)
                window.location.reload()
            } else if (activeTab === 'gallery') {
                await createGalleryImage(formData)
                window.location.reload()
            } else if (activeTab === 'shop') {
                await createProduct(formData)
                window.location.reload()
            }
            setIsModalOpen(false)
        } catch (err) {
            alert('Error creating item')
            console.error(err)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex justify-between items-center mb-10">
                    <h1 className="text-3xl font-bold uppercase italic">Admin <span className="text-red-600">Dashboard</span></h1>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="text-sm text-gray-400 hover:text-white"
                    >
                        ← Back to Site
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-8 border-b border-zinc-800 pb-4 overflow-x-auto">
                    <TabButton active={activeTab === 'events'} onClick={() => setActiveTab('events')} icon={<Calendar size={18} />} label="Events" />
                    <TabButton active={activeTab === 'achievements'} onClick={() => setActiveTab('achievements')} icon={<Trophy size={18} />} label="Achievements" />
                    <TabButton active={activeTab === 'gallery'} onClick={() => setActiveTab('gallery')} icon={<ImageIcon size={18} />} label="Gallery" />
                    <TabButton active={activeTab === 'shop'} onClick={() => setActiveTab('shop')} icon={<ShoppingBag size={18} />} label="Shop" />
                    <TabButton active={activeTab === 'leads'} onClick={() => setActiveTab('leads')} icon={<MessageSquare size={18} />} label={`Leads (${initialLeads.length})`} />
                </div>

                {/* Content Area */}
                <div>

                    {/* Action Bar */}
                    {activeTab !== 'leads' && (
                        <div className="mb-6 flex justify-end">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-bold text-sm"
                            >
                                <Plus size={16} /> Add New {activeTab.slice(0, -1)}
                            </button>
                        </div>
                    )}

                    {/* EVENTS TAB */}
                    {activeTab === 'events' && (
                        <div className="grid gap-4">
                            {events.map(event => (
                                <div key={event.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold text-lg">{event.name}</h3>
                                        <p className="text-gray-400 text-sm">{event.date} • {event.status}</p>
                                    </div>
                                    <button onClick={() => handleDeleteEvent(event.id)} className="text-zinc-500 hover:text-red-500 p-2"><Trash2 size={20} /></button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* ACHIEVEMENTS TAB */}
                    {activeTab === 'achievements' && (
                        <div className="grid gap-4">
                            {achievements.map(ach => (
                                <div key={ach.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        {ach.image_url && <img src={ach.image_url} alt="" className="w-12 h-12 rounded-lg object-cover" />}
                                        <div>
                                            <h3 className="font-bold text-lg">{ach.title}</h3>
                                            <p className="text-gray-400 text-sm">{ach.year} • {ach.distance_km}km</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDeleteAchievement(ach.id)} className="text-zinc-500 hover:text-red-500 p-2"><Trash2 size={20} /></button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* GALLERY TAB */}
                    {activeTab === 'gallery' && (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {gallery.map(img => (
                                <div key={img.id} className="relative aspect-square group bg-zinc-900 rounded-xl overflow-hidden">
                                    <img src={img.image_url} alt="" className="w-full h-full object-cover" />
                                    <button
                                        onClick={() => handleDeleteGallery(img.id)}
                                        className="absolute top-2 right-2 bg-black/50 p-2 rounded-full text-white hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/60 text-xs text-white truncate">
                                        {img.caption || 'No caption'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* SHOP TAB */}
                    {activeTab === 'shop' && (
                        <div className="grid gap-4">
                            {products.map(prod => (
                                <div key={prod.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        {prod.image_url && <img src={prod.image_url} alt="" className="w-12 h-12 rounded-lg object-cover" />}
                                        <div>
                                            <h3 className="font-bold text-lg">{prod.name}</h3>
                                            <p className="text-gray-400 text-sm">{prod.category} • {prod.price}</p>
                                        </div>
                                    </div>
                                    <button onClick={() => handleDeleteProduct(prod.id)} className="text-zinc-500 hover:text-red-500 p-2"><Trash2 size={20} /></button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* LEADS TAB */}
                    {activeTab === 'leads' && (
                        <div className="grid gap-4">
                            {initialLeads.length === 0 ? <p className="text-gray-500">No leads yet.</p> : null}
                            {initialLeads.map(lead => (
                                <div key={lead.id} className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg text-white">{lead.name}</h3>
                                        <span className="text-xs text-gray-500">{new Date(lead.created_at).toLocaleDateString()}</span>
                                    </div>
                                    <p className="text-red-500 text-sm mb-4">{lead.email}</p>
                                    <div className="bg-black/50 p-4 rounded-lg text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">
                                        {lead.message}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>

            {/* CREATE MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-zinc-900 w-full max-w-lg rounded-2xl border border-zinc-800 p-6 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">Add {activeTab.slice(0, -1)}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-white"><X /></button>
                        </div>

                        <form onSubmit={handleCreate} className="space-y-4">

                            {activeTab === 'events' && (
                                <>
                                    <Input name="name" label="Event Name" required />
                                    <Input name="date" label="Date (e.g. Oct 15, 2026)" required />
                                    <Input name="time" label="Time" />
                                    <Input name="location" label="Location" />
                                    <Input name="role" label="Your Role" />
                                    <Dropdown name="status" label="Status" options={['Confirmed', 'Registration Open', 'Training Block', 'Completed']} />
                                    <Input name="registration_link" label="Reg Link" />
                                    <Textarea name="description" label="Description" />
                                    <FileInput name="image" label="Upload Image" />
                                    <p className="text-center text-xs text-gray-500 my-2">- OR -</p>
                                    <Input name="image_url" label="Image URL (Fallback)" placeholder="https://..." />
                                </>
                            )}

                            {activeTab === 'achievements' && (
                                <>
                                    <Input name="title" label="Title (e.g. Winner)" required />
                                    <Input name="event_name" label="Event Name" required />
                                    <Input name="year" label="Year" type="number" required />
                                    <Input name="distance_km" label="Distance (km)" type="number" step="0.1" />
                                    <Textarea name="description" label="Description" />
                                    <FileInput name="image" label="Upload Image" />
                                    <p className="text-center text-xs text-gray-500 my-2">- OR -</p>
                                    <Input name="image_url" label="Image URL (Fallback)" placeholder="https://..." />
                                </>
                            )}

                            {activeTab === 'gallery' && (
                                <>
                                    <FileInput name="image" label="Upload Image" />
                                    <p className="text-center text-xs text-gray-500 my-2">- OR -</p>
                                    <Input name="image_url" label="Image URL (Fallback)" placeholder="https://..." />
                                    <Input name="caption" label="Caption" />
                                </>
                            )}

                            {activeTab === 'shop' && (
                                <>
                                    <Input name="name" label="Product Name" required />
                                    <Input name="category" label="Category" required />
                                    <Input name="price" label="Price (e.g. ₹999)" required />
                                    <Textarea name="description" label="Description" />
                                    <Input name="link" label="Product Link" required />
                                    <FileInput name="image" label="Upload Image" />
                                    <p className="text-center text-xs text-gray-500 my-2">- OR -</p>
                                    <Input name="image_url" label="Image URL (Fallback)" placeholder="https://..." />
                                    <div className="flex items-center gap-2">
                                        <input type="checkbox" name="is_affiliate" id="is_affiliate" />
                                        <label htmlFor="is_affiliate" className="text-gray-400 text-sm">Is Affiliate Link?</label>
                                    </div>
                                </>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl mt-4"
                            >
                                {isSubmitting ? 'Saving...' : 'Create Item'}
                            </button>
                        </form>
                    </div>
                </div>
            )}

        </div>
    )
}

// Helper Components
function TabButton({ active, onClick, icon, label }: any) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${active ? 'bg-white text-black' : 'text-gray-400 hover:bg-zinc-900 hover:text-white'
                }`}
        >
            {icon} {label}
        </button>
    )
}

function Input({ label, ...props }: any) {
    return (
        <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-1">{label}</label>
            <input {...props} className="w-full p-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-red-600 outline-none" />
        </div>
    )
}

function Textarea({ label, ...props }: any) {
    return (
        <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-1">{label}</label>
            <textarea {...props} rows={3} className="w-full p-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-red-600 outline-none" />
        </div>
    )
}

function Dropdown({ label, options, ...props }: any) {
    return (
        <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-1">{label}</label>
            <select {...props} className="w-full p-3 bg-black border border-zinc-700 rounded-lg text-white focus:border-red-600 outline-none">
                {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
        </div>
    )
}

function FileInput({ label, ...props }: any) {
    return (
        <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-1">{label}</label>
            <input
                type="file"
                accept="image/*"
                className="w-full p-2 bg-black border border-zinc-700 rounded-lg text-white focus:border-red-600 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-zinc-800 file:text-white hover:file:bg-red-600 transition-all"
                {...props}
            />
        </div>
    )
}
