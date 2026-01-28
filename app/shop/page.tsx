
import Image from 'next/image'
import { ExternalLink, ShoppingBag, Tag } from 'lucide-react'
import FadeIn from '@/components/FadeIn'
import { getProducts } from '@/app/actions/shop'

export const revalidate = 60

export default async function ShopPage() {
    const products = await getProducts()

    return (
        <div className="pt-24 pb-20 min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <FadeIn>
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-black italic uppercase text-white mb-6">
                        Gear & <span className="text-red-600">Fuel</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        The equipment I trust and the products I use to perform at my peak.
                        <span className="block mt-2 text-sm text-gray-500 font-normal">
                            *Some links are affiliate links which support the academy.
                        </span>
                    </p>
                </div>
            </FadeIn>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.length === 0 ? (
                    <div className="col-span-3 text-center py-20 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                        <p className="text-gray-500">No products available at the moment.</p>
                    </div>
                ) : (
                    products.map((product, index) => (
                        <FadeIn key={product.id} delay={index * 0.1}>
                            <div
                                className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-300 flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 w-full overflow-hidden bg-black/50">
                                    <Image
                                        src={product.image_url}
                                        alt={product.name}
                                        fill
                                        unoptimized
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    {/* Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${product.is_affiliate ? 'bg-zinc-800 text-gray-300' : 'bg-red-600 text-white'}`}>
                                            {product.is_affiliate ? 'Recommended' : 'Official Merch'}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex justify-between items-start mb-2">
                                        <p className="text-red-600 text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                                            <Tag size={12} /> {product.category}
                                        </p>
                                        <p className="text-white font-bold">{product.price}</p>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 font-display">{product.name}</h3>
                                    <p className="text-gray-400 text-sm mb-6 flex-1 leading-relaxed">
                                        {product.description}
                                    </p>

                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full bg-white text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors uppercase text-sm tracking-wide"
                                    >
                                        {product.is_affiliate ? (
                                            <>Buy on Amazon <ExternalLink size={16} /></>
                                        ) : (
                                            <>Add to Cart <ShoppingBag size={16} /></>
                                        )}
                                    </a>
                                </div>
                            </div>
                        </FadeIn>
                    ))
                )}
            </div>

            {/* Affiliate Disclaimer */}
            <FadeIn delay={0.4}>
                <div className="mt-20 pt-10 border-t border-zinc-900 text-center text-gray-500 text-sm">
                    <p>
                        As an Amazon Associate, I earn from qualifying purchases.
                        Revenue generated goes towards supporting the Singam Ironman Academy athletes.
                    </p>
                </div>
            </FadeIn>

        </div>
    )
}
