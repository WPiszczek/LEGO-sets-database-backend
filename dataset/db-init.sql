CREATE TABLE lego_sets(
  id TEXT,
  name TEXT,
  category TEXT,
  year DECIMAL,
  parts DECIMAL,
  img_link TEXT,
  set_link TEXT,
  raw_price TEXT,
  mean_price DECIMAL
);

COPY lego_sets
FROM '/docker-entrypoint-initdb.d/lego-sets.csv' 
DELIMITER ',' 
CSV HEADER;