
'use server'
import { supabase } from '@/lib/supabaseClient'
import { revalidatePath } from 'next/cache'

export async function createLead(formData: FormData) {
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const message = formData.get('message') as string

    const { error } = await supabase.from('leads').insert({
        name, email, message
    })

    if (error) throw error
    revalidatePath('/admin')
}
