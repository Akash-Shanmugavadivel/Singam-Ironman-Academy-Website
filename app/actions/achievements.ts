
'use server'
import { supabase } from '@/lib/supabaseClient'
import { Achievement } from '@/lib/types'

export async function getAchievements(): Promise<Achievement[]> {
    const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .order('year', { ascending: false })

    if (error) {
        console.error('Error fetching achievements:', error)
        return []
    }

    return data as Achievement[]
}

export async function createAchievement(formData: FormData) {
    const title = formData.get('title') as string
    const event_name = formData.get('event_name') as string
    const description = formData.get('description') as string
    const year = parseInt(formData.get('year') as string)
    const distance_km = parseFloat(formData.get('distance_km') as string)

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
        image_url = formData.get('image_url') as string
    }

    const { error } = await supabase.from('achievements').insert({
        title, event_name, description, year, distance_km, image_url
    })

    if (error) throw error
}

export async function deleteAchievement(id: string) {
    const { error } = await supabase.from('achievements').delete().eq('id', id)
    if (error) throw error
}
