/*
  # Create form submissions table

  1. New Tables
    - `form_submissions`
      - `id` (uuid, primary key)
      - `nome` (text) - Client name
      - `email` (text) - Client email
      - `telefone` (text) - Client phone
      - `empresa` (text) - Company name
      - `cargo` (text) - Job title
      - `tipo_servico` (text) - Service type
      - `orcamento` (text) - Budget range
      - `hobbies` (text array) - Selected interests
      - `mensagem` (text) - Additional message
      - `criado_em` (timestamp) - Creation timestamp

  2. Security
    - Enable RLS on `form_submissions` table
    - Add policy for anyone to insert submissions
    - Add policy for admin access (requires authentication)

  3. Important Notes
    - Form submissions are public inserts
    - All fields are stored as-is without authentication
    - Timestamps track when submissions are created
*/

CREATE TABLE IF NOT EXISTS form_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  email text NOT NULL,
  telefone text,
  empresa text NOT NULL,
  cargo text NOT NULL,
  tipo_servico text NOT NULL,
  orcamento text NOT NULL,
  hobbies text[] DEFAULT '{}',
  mensagem text,
  criado_em timestamptz DEFAULT now()
);

ALTER TABLE form_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert form submissions"
  ON form_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view submissions"
  ON form_submissions
  FOR SELECT
  TO authenticated
  USING (true);
