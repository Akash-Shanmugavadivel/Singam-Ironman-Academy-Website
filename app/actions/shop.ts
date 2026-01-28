
'use server'
import { supabase } from '@/lib/supabaseClient'
import { Product } from '@/lib/types'
import { revalidatePath } from 'next/cache'

export async function getProducts(): Promise<Product[]> {
    const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching products:', error)
        return []
    }
    return data as Product[]
}

export async function createProduct(formData: FormData) {
    const name = formData.get('name') as string
    const category = formData.get('category') as string
    const description = formData.get('description') as string
    const price = formData.get('price') as string
    const link = formData.get('link') as string
    const is_affiliate = formData.get('is_affiliate') === 'on'

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

    const { error } = await supabase.from('products').insert({
        name, category, description, price, image_url, link, is_affiliate
    })

    if (error) throw error
    revalidatePath('/shop')
    revalidatePath('/admin')
}

export async function deleteProduct(id: string) {
    const { error } = await supabase.from('products').delete().eq('id', id)
    if (error) throw error
    revalidatePath('/shop')
    revalidatePath('/admin')
}
