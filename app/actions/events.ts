
'use server'
import { supabase } from '@/lib/supabaseClient'
import { Event } from '@/lib/types'
import { revalidatePath } from 'next/cache'

export async function getEvents(): Promise<Event[]> {
    const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true })

    if (error) {
        console.error('Error fetching events:', error)
        return []
    }
    return data as Event[]
}

export async function createEvent(formData: FormData) {
    const name = formData.get('name') as string
    const date = formData.get('date') as string
    const time = formData.get('time') as string
    const location = formData.get('location') as string
    const role = formData.get('role') as string
    const description = formData.get('description') as string
    const registration_link = formData.get('registration_link') as string
    const status = formData.get('status') as string

    // Handle Image Upload
    const imageFile = formData.get('image') as File
    let image_url = ''

    if (imageFile && imageFile.size > 0) {
        try {
            const { uploadImage } = await import('@/lib/upload')
            image_url = await uploadImage(imageFile)
        } catch (error: any) {
            console.error('Upload failed:', error)
            throw new Error(`Image upload failed: ${error.message}`)
        }
    } else {
        // Fallback if they entered a URL manually (optional support)
        image_url = formData.get('image_url') as string
    }

    const { error } = await supabase.from('events').insert({
        name, date, time, location, role, description, registration_link, status, image_url
    })

    if (error) throw error
    revalidatePath('/events')
    revalidatePath('/')
    revalidatePath('/admin')
}

export async function deleteEvent(id: string) {
    const { error } = await supabase.from('events').delete().eq('id', id)
    if (error) throw error
    revalidatePath('/events')
    revalidatePath('/')
    revalidatePath('/admin')
}
