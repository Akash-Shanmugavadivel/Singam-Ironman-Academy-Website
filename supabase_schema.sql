-- Enable UUID extension if not already enabled
create extension if not exists "uuid-ossp";

-- 1. Create 'achievements' table
create table public.achievements (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  event_name text,
  distance_km int,
  year int,
  description text,
  image_url text, -- Storage path or full URL
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create 'gallery' table
create table public.gallery (
  id uuid primary key default uuid_generate_v4(),
  image_url text not null,
  caption text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Create 'leads' table (for Contact Form)
create table public.leads (
  id uuid primary key default uuid_generate_v4(),
  name text,
  email text,
  message text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 4. Enable Row Level Security (RLS) - Recommended
alter table public.achievements enable row level security;
alter table public.gallery enable row level security;
alter table public.leads enable row level security;

-- 5. Create basic policies (Adjust as needed for your specific security model)

-- ALLOW READ access to everyone for public content
create policy "Public achievements are viewable by everyone"
  on public.achievements for select
  using ( true );

create policy "Public gallery is viewable by everyone"
  on public.gallery for select
  using ( true );

-- ALLOW INSERT access for leads (Contact Form)
create policy "Anyone can insert a lead"
  on public.leads for insert
  with check ( true );

-- (Optional) Setup Storage Bucket for Images
-- You will need to create a bucket named 'gallery' in the Storage section of Supabase dashboard
