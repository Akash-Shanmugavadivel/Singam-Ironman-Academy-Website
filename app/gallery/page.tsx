
import { getGalleryImages } from '../actions/gallery'
import Image from 'next/image'
import FadeIn from '@/components/FadeIn'

export const revalidate = 60

export default async function GalleryPage() {
    const images = await getGalleryImages()

    return (
        <div className="pt-24 pb-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn>
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Gallery</h1>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        Moments captured on the track, trail, and training grounds.
                    </p>
                </div>
            </FadeIn>

            {images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img, index) => (
                        <FadeIn key={img.id} delay={index * 0.05} className="h-full">
                            <div className="relative aspect-square bg-zinc-900 rounded-xl overflow-hidden group">
                                <Image
                                    src={img.image_url}
                                    alt={img.caption || 'Gallery Image'}
                                    fill
                                    unoptimized
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                />
                                {img.caption && (
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <p className="text-white text-sm font-medium truncate">{img.caption}</p>
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    ))}
                </div>
            ) : (
                <FadeIn delay={0.2}>
                    <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                        <p className="text-gray-500 text-lg">Gallery is empty.</p>
                        <p className="text-gray-600 text-sm mt-2">Upload images to the 'gallery' bucket in Supabase.</p>
                    </div>
                </FadeIn>
            )}
        </div>
    )
}
