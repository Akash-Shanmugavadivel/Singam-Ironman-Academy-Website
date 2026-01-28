
-- Create 'events' table
create table public.events (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  date text not null, -- Storing as text for flexibility like "Oct 15, 2026", or use timestamp
  time text,
  location text,
  role text,
  description text,
  registration_link text,
  status text, -- 'Confirmed', 'Registration Open', etc.
  image_url text, 
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.events enable row level security;

-- Public Read Policy
create policy "Public events are viewable by everyone"
  on public.events for select
  using ( true );

-- Insert Seed Data (Moving from hardcoded to DB)
INSERT INTO public.events (name, date, time, location, role, description, registration_link, status, image_url)
VALUES 
(
    'Chennai Half Marathon 2026',
    'October 15, 2026',
    '04:30 AM IST',
    'Island Grounds, Chennai',
    'Official Pacer (2:00 Bus)',
    'I will be pacing the 21.1K category for the 2 hour bus. This is the perfect bus for runners aiming for a sub-2 hour half marathon. We will maintain a steady 5:41/km pace.',
    'https://www.chennaimarathon.com',
    'Confirmed',
    'https://images.unsplash.com/photo-1532444458054-01a7dd3e9fca?q=80&w=2070&auto=format&fit=crop'
),
(
    'Bengaluru Midnight Marathon',
    'December 12, 2026',
    '05:00 PM IST',
    'Whitefield, Bengaluru',
    'Squad Leader',
    'Leading the Singam Ironman Academy squad. We have 50+ athletes participating across 10K and Half Marathon categories. Join our warm-up session at 4 PM near the holding area.',
    'https://bengalurumidnightmarathon.in',
    'Registration Open',
    'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=2067&auto=format&fit=crop'
),
(
    'TATA Mumbai Marathon 2027',
    'January 18, 2027',
    '05:10 AM IST',
    'Chhatrapati Shivaji Maharaj Terminus, Mumbai',
    'Participant (Full Marathon)',
    'Running my personal best attempt. I will be starting in Lineup A. Look out for me on the course wearing the Singam Academy jersey!',
    'https://tatamumbaimarathon.procam.in',
    'Training Block',
    'https://images.unsplash.com/photo-1552674605-469555f967ba?q=80&w=2070&auto=format&fit=crop'
),
(
    'Singam Academy Community Run',
    'February 14, 2027',
    '05:30 AM IST',
    'Marina Beach, Chennai',
    'Host',
    'A free 5K & 10K community run organized by our academy. Open to all beginners. Hydration and breakfast will be provided. No registration fee.',
    'https://forms.gle/dummy-registration',
    'Free Event',
    'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2076&auto=format&fit=crop'
);
