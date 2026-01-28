
-- FIX PERMISSIONS FOR EVENTS
-- Allow Anon (Public) to Delete/Insert/Update for demo purposes
drop policy if exists "Public events are viewable by everyone" on public.events;
drop policy if exists "Admins can all on events" on public.events;

create policy "Enable All Access for Events"
on public.events for all
using (true)
with check (true);

-- FIX PERMISSIONS FOR ACHIEVEMENTS
drop policy if exists "Public achievements are viewable by everyone" on public.achievements;
create policy "Enable All Access for Achievements"
on public.achievements for all
using (true)
with check (true);

-- FIX PERMISSIONS FOR GALLERY
drop policy if exists "Public gallery is viewable by everyone" on public.gallery;
create policy "Enable All Access for Gallery"
on public.gallery for all
using (true)
with check (true);

-- FIX PERMISSIONS FOR PRODUCTS
drop policy if exists "Public products are viewable by everyone" on public.products;
drop policy if exists "Admins can manage products" on public.products;

create policy "Enable All Access for Products"
on public.products for all
using (true)
with check (true);

-- FIX PERMISSIONS FOR LEADS
-- Usually we only want insert, but for admin panel delete validation:
create policy "Enable Delete for Leads"
on public.leads for delete
using (true);
