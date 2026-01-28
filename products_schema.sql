
-- Create 'products' table
create table public.products (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  category text not null,
  description text,
  price text not null, -- Keeping as text for currency symbols like ₹24,999
  image_url text not null,
  link text not null,
  is_affiliate boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.products enable row level security;

-- Policies
create policy "Public products are viewable by everyone"
  on public.products for select
  using ( true );

create policy "Admins can manage products"
  on public.products for all
  using ( true );

-- Insert Seed Data
INSERT INTO public.products (name, category, description, price, image_url, link, is_affiliate)
VALUES 
(
    'Adidas Adizero Adios Pro 3',
    'Running Shoes',
    'My go-to race day shoe. Incredible energy return and lightweight comfort for marathons.',
    '₹24,999',
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop',
    '#',
    true
),
(
    'Garmin Forerunner 965',
    'Electronics',
    'The ultimate GPS watch for tracking splits, heart rate, and recovery metrics.',
    '₹67,490',
    'https://images.unsplash.com/photo-1557166983-59396d4443a5?q=80&w=2070&auto=format&fit=crop',
    '#',
    true
),
(
    'Fast&Up Energy Gel',
    'Nutrition',
    'Instant energy for those long runs. Caffeine variant is my favorite for the final kick.',
    '₹480',
    'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop',
    '#',
    true
),
(
    'Singam Academy Tee',
    'Merchandise',
    'Official training jersey of the Singam Ironman Academy. Sweat-wicking and breathable.',
    '₹999',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080&auto=format&fit=crop',
    '#',
    false
);
