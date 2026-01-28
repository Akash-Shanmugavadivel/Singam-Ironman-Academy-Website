
export type Achievement = {
  id: string
  title: string
  event_name: string | null
  distance_km: number | null
  year: number | null
  description: string | null
  image_url: string | null
  created_at: string
}

export type GalleryImage = {
  id: string
  image_url: string
  caption: string | null
  created_at: string
}

export type Event = {
  id: string
  name: string
  date: string
  time: string | null
  location: string | null
  role: string | null
  description: string | null
  registration_link: string | null
  status: string | null
  image_url: string | null
  created_at: string
}

export type Lead = {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export type Product = {
  id: string
  name: string
  category: string
  description: string | null
  price: string
  image_url: string
  link: string
  is_affiliate: boolean
  created_at: string
}
