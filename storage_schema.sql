
-- Create a new storage bucket for images
insert into storage.buckets (id, name, public) 
values ('portfolio-images', 'portfolio-images', true)
on conflict (id) do nothing;

-- Set up security policies for the bucket
-- Allow public read access
create policy "Give Public Access to Portfolio Images"
on storage.objects for select
using ( bucket_id = 'portfolio-images' );

-- Allow authenticated (or anon for this simplified admin) to upload
create policy "Allow Uploads to Portfolio Images"
on storage.objects for insert
with check ( bucket_id = 'portfolio-images' );

-- Allow delete
create policy "Allow Delete from Portfolio Images"
on storage.objects for delete
using ( bucket_id = 'portfolio-images' );
