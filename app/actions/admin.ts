
'use server'
import { supabase } from '@/lib/supabaseClient'
import { Lead } from '@/lib/types'

export async function getLeads(): Promise<Lead[]> {
    const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching leads:', error)
        return []
    }
    return data as Lead[]
}
