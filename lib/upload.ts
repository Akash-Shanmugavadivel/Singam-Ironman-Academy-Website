
import { supabase } from '@/lib/supabaseClient'

export async function uploadImage(file: File): Promise<string> {
    try {
        const fileExt = file.name.split('.').pop()
        const fileName = `${Math.random().toString(36).substring(7)}.${fileExt}`
        const filePath = `${fileName}`

        // Convert file to ArrayBuffer for reliable upload in Node.js environment
        const arrayBuffer = await file.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)

        const { error } = await supabase.storage
            .from('portfolio-images')
            .upload(filePath, buffer, {
                contentType: file.type,
                upsert: false
            })

        if (error) {
            console.error('Supabase Storage Error:', error)
            throw new Error(error.message)
        }

        const { data } = supabase.storage
            .from('portfolio-images')
            .getPublicUrl(filePath)

        return data.publicUrl
    } catch (error: any) {
        console.error('Image Upload Util Error:', error)
        throw new Error(error.message || 'Failed to upload image')
    }
}
