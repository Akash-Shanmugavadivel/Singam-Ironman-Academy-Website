
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Lock } from 'lucide-react'

export default function AdminLoginPage() {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const router = useRouter()

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // Simple admin protection for the user
        // In a real app, use Supabase Auth or proper server-side session
        if (password === 'singam2025') { // ADMIN PASSWORD
            document.cookie = "admin_session=true; path=/; max-age=86400"
            router.push('/admin/dashboard')
        } else {
            setError('Invalid password')
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-4">
            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 w-full max-w-md">
                <div className="text-center mb-8">
                    <Lock className="w-12 h-12 text-red-600 mx-auto mb-4" />
                    <h1 className="text-2xl font-bold text-white">Admin Access</h1>
                    <p className="text-gray-400 text-sm">Enter password to manage portfolio</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-4 bg-black border border-zinc-700 rounded-xl text-white focus:border-red-600 outline-none"
                            placeholder="Password"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
