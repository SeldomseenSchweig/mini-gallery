DROP DATABASE IF EXISTS minigallerydb;

CREATE DATABASE minigallerydb;

\c minigallerydb;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25),
  password TEXT NOT NULL,
  email TEXT NOT NULL
    CHECK (position('@' IN email) > 1),
  is_admin BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE projects (
  id SERIAL PRIMARY KEY,
  supplies ARRAY,
  paints ARRAY,
  name VARCHAR(25),
  isComplete BOOLEAN DEFAULT FALSE
);

INSERT INTO users 
  ( username, password, email )
  VALUES 
  ('hayduke', 'password', 'h@gamil.com');


INSERT INTO users 
  ( username, password, email, is_admin )
  VALUES 
  ('nobody', 'password', 'nobody@gamil.com', true);