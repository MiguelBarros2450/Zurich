import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Simulation {
  id?: string;
  insurance_type: string;
  vehicle_age?: string;
  coverage_level?: string;
  theft_protection?: boolean;
  glass_coverage?: boolean;
  vandalism_protection?: boolean;
  monthly_price?: number;
  email?: string;
  created_at?: string;
}

export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  insurance_type?: string;
  message?: string;
  created_at?: string;
}
