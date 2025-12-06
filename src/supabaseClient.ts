import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://supabase.com/dashboard/project/qhwabzivfhprwyldvbmc'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFod2Fieml2Zmhwcnd5bGR2Ym1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMTA3NDksImV4cCI6MjA4MDU4Njc0OX0.Cg5dVpZ6eMieuS6HheXmDdGlpMSkSby_5AIvE1NprD0'

export const supabase = createClient(supabaseUrl, supabaseKey)