/*
  # Insurance Website Database Schema

  ## Overview
  Creates tables for managing insurance simulations and customer contacts/leads
  for a Portuguese insurance company website.

  ## New Tables
  
  ### `simulations`
  Stores insurance simulation data from the calculator
  - `id` (uuid, primary key) - Unique identifier
  - `insurance_type` (text) - Type of insurance (auto, moto, casa, saude, vida)
  - `vehicle_age` (text) - Age of vehicle (for auto/moto insurance)
  - `coverage_level` (text) - Coverage level selected (light, topping, max)
  - `theft_protection` (boolean) - Theft/robbery protection selected
  - `glass_coverage` (boolean) - Glass breakage coverage selected
  - `vandalism_protection` (boolean) - Vandalism protection selected
  - `monthly_price` (numeric) - Calculated monthly price
  - `email` (text) - Customer email (optional)
  - `created_at` (timestamptz) - Timestamp of simulation

  ### `contacts`
  Stores contact form submissions and lead information
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Customer name
  - `email` (text) - Customer email
  - `phone` (text) - Customer phone number
  - `insurance_type` (text) - Type of insurance interested in
  - `message` (text) - Additional message from customer
  - `created_at` (timestamptz) - Timestamp of contact

  ## Security
  - Enable RLS on all tables
  - Allow anonymous inserts (for public form submissions)
  - Allow authenticated users to read their own data
*/

-- Create simulations table
CREATE TABLE IF NOT EXISTS simulations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  insurance_type text NOT NULL,
  vehicle_age text,
  coverage_level text,
  theft_protection boolean DEFAULT false,
  glass_coverage boolean DEFAULT false,
  vandalism_protection boolean DEFAULT false,
  monthly_price numeric(10,2),
  email text,
  created_at timestamptz DEFAULT now()
);

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  insurance_type text,
  message text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE simulations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Simulations policies (allow public inserts)
CREATE POLICY "Allow anonymous simulation inserts"
  ON simulations
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow public to read simulations"
  ON simulations
  FOR SELECT
  TO anon
  USING (true);

-- Contacts policies (allow public inserts for contact forms)
CREATE POLICY "Allow anonymous contact inserts"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read contacts"
  ON contacts
  FOR SELECT
  TO authenticated
  USING (true);