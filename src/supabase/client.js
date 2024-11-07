import { createClient } from "@supabase/supabase-js";
const supabaseUrl = process.env.VITE_SUPABASE_PROJECT_URL;
const supabaseKey = process.env.VITE_SUPABASE_PROJECT_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
