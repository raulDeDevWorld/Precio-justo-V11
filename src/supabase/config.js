import { createClient } from '@supabase/supabase-js'

const supabase_url = 'https://hhxlyesjmtbhnqwsoplw.supabase.co'
const anon_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoeGx5ZXNqbXRiaG5xd3NvcGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQzMzE3NjYsImV4cCI6MTk5OTkwNzc2Nn0.MZQt6Je4Vj1-7wvGa4N0VxOg5o7AWZYbOeatVYU3sUc'

export const supabase = createClient(supabase_url, anon_key)

