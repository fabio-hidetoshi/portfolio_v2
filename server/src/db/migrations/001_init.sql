CREATE TABLE IF NOT EXISTS skills (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  category VARCHAR(50) NOT NULL,
  display_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS experiences (
  id SERIAL PRIMARY KEY,
  company VARCHAR(150) NOT NULL,
  kind VARCHAR(20) NOT NULL DEFAULT 'work',
  role_pt VARCHAR(200) NOT NULL,
  role_en VARCHAR(200) NOT NULL,
  description_pt TEXT,
  description_en TEXT,
  location VARCHAR(150),
  start_date DATE NOT NULL,
  end_date DATE,
  company_url VARCHAR(300),
  display_order INT NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS projects (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(150) UNIQUE NOT NULL,
  title VARCHAR(200) NOT NULL,
  summary_pt VARCHAR(500) NOT NULL,
  summary_en VARCHAR(500) NOT NULL,
  description_pt TEXT,
  description_en TEXT,
  tech_stack TEXT[] NOT NULL DEFAULT '{}',
  repo_url VARCHAR(300) NOT NULL,
  demo_url VARCHAR(300),
  cover_image_url VARCHAR(300),
  featured BOOLEAN NOT NULL DEFAULT false,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  email VARCHAR(200) NOT NULL,
  message TEXT NOT NULL,
  locale VARCHAR(5) NOT NULL DEFAULT 'pt',
  status VARCHAR(20) NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  ip_hash VARCHAR(100)
);

CREATE INDEX IF NOT EXISTS idx_projects_featured ON projects(featured);
CREATE INDEX IF NOT EXISTS idx_contact_created_at ON contact_messages(created_at);
