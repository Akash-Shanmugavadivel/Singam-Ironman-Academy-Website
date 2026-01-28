
import { getLeads } from '@/app/actions/admin'
import { getEvents } from '@/app/actions/events'
import { getAchievements } from '@/app/actions/achievements'
import { getGalleryImages } from '@/app/actions/gallery'
import { getProducts } from '@/app/actions/shop' // Updated import
import AdminDashboardClient from './AdminDashboardClient'

export default async function AdminDashboard() {
    const leads = await getLeads()
    const events = await getEvents()
    const achievements = await getAchievements()
    const gallery = await getGalleryImages()
    const products = await getProducts() // Fetch products

    return (
        <AdminDashboardClient
            initialLeads={leads}
            initialEvents={events}
            initialAchievements={achievements}
            initialGallery={gallery}
            initialProducts={products} // Pass products
        />
    )
}
