# Star Tracker API

A celestial registry management system built with **Node.js**, **Sequelize**, and **MySQL**, containerized with **Docker**. This application allows for the tracking and management of Galaxies, Stars, and Planets with a high-performance glassmorphism interface.

---

# Build and start the containers in detached mode
docker compose up -d --build

# Run migrations to create tables
docker compose exec wdv442-node npx sequelize-cli db:migrate

# Run seeders to populate initial data
docker compose exec wdv442-node npx sequelize-cli db:seed:all

# Undo the most recent seed
docker compose exec wdv442-node npx sequelize-cli db:seed:undo

# Undo all seeds (Full Reset)
docker compose exec wdv442-node npx sequelize-cli db:seed:undo:all

---

## CRUD 

# Create
curl -X POST http://localhost:3000/galaxies \
  -F "name=Andromeda" \
  -F "size=220000" \
  -F "description=A spiral galaxy" \
  -F "imageUrl=https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Andromeda_Galaxy_%28with_h-alpha%29.jpg/1200px-Andromeda_Galaxy_%28with_h-alpha%29.jpg"

curl -X POST http://localhost:3000/stars \
  -d "name=Alpha Centauri&galaxyId=1&type=Main Sequence&imageUrl=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Alphacentauri_triple_star_system.jpg/1200px-Alphacentauri_triple_star_system.jpg"
  
curl -X POST http://localhost:3000/planets \
  -d "name=Kepler-186f&starId=1&habitable=true&imageUrl=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Kepler186f-ArtistConcept-20140417.jpg/1200px-Kepler186f-ArtistConcept-20140417.jpg"

# Read
curl -X GET http://localhost:3000/galaxies
curl -X GET http://localhost:3000/stars
curl -X GET http://localhost:3000/planets

# Update
curl -X POST "http://localhost:3000/galaxies/1?_method=PUT" -F "name=Andromeda Updated"
curl -X POST "http://localhost:3000/stars/1?_method=PUT" -d "name=Rigel"
curl -X POST "http://localhost:3000/planets/1?_method=PUT"-d "habitable=false"

# Delete
curl -X POST "http://localhost:3000/galaxies/1?_method=DELETE"
curl -X POST "http://localhost:3000/stars/1?_method=DELETE"
curl -X POST "http://localhost:3000/planets/1?_method=DELETE"