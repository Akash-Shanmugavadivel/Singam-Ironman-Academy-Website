
'use server'
import { supabase } from '@/lib/supabaseClient'
import { GalleryImage } from '@/lib/types'

export async function getGalleryImages(): Promise<GalleryImage[]> {
    const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching gallery:', error)
        return []
    }

    return data as GalleryImage[]
}

export async function createGalleryImage(formData: FormData) {
    const caption = formData.get('caption') as string

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

    const { error } = await supabase.from('gallery').insert({
        image_url, caption
    })

    if (error) throw error
}

export async function deleteGalleryImage(id: string) {
    const { error } = await supabase.from('gallery').delete().eq('id', id)
    if (error) throw error
}
