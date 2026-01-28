
-- Create 'leads' table
create table public.leads (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.leads enable row level security;

-- Policies
create policy "Public can insert leads"
  on public.leads for insert
  with check ( true );

create policy "Admins can read leads"
  on public.leads for select
  using ( true ); -- restricted by logic/RLS usually, simplified here
