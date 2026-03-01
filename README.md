# Space Tracker App

# This is the space tracker app for my Advanced Server-side Languages class (WDV442).

# test
curl -H "Accept: application/json" http://localhost:3000/galaxies
curl -H "Accept: text/html" http://localhost:3000/galaxies
curl -X POST -H "Content-Type: application/json" -H "Accept: application/json" \
-d '{"name":"Triangulum","size":60000}' \
http://localhost:3000/galaxies

# 1. Andromeda Galaxy
curl -X POST http://localhost:3000/galaxies -F "name=Andromeda" -F "size=220000" -F "description=A spiral galaxy approximately 2.5 million light-years from Earth and the nearest major galaxy to the Milky Way." -F "image=https://upload.wikimedia.org/wikipedia/commons/c/c2/M31_09-01-2011_%289963966564%29.jpg"

# 2. Sombrero Galaxy
curl -X POST http://localhost:3000/galaxies -F "name=Sombrero" -F "size=50000" -F "description=An unbarred spiral galaxy in the constellation Virgo with a brilliant white core and a thick dust lane." -F "image=https://upload.wikimedia.org/wikipedia/commons/5/5e/M104_ngc4594_sombrero_galaxy_hi-res.jpg"

# 3. Whirlpool Galaxy
curl -X POST http://localhost:3000/galaxies -F "name=Whirlpool" -F "size=60000" -F "description=A classic spiral galaxy located in the constellation Canes Venatici. It was the first galaxy to be classified as spiral." -F "image=https://upload.wikimedia.org/wikipedia/commons/b/b8/Messier51a.jpg"

# 4. Black Eye Galaxy
curl -X POST http://localhost:3000/galaxies -F "name=Black Eye" -F "size=52000" -F "description=Known for the spectacular dark band of absorbing dust in front of its bright nucleus." -F "image=https://upload.wikimedia.org/wikipedia/commons/c/c4/Black_Eye_Galaxy.jpg"

# 5. Cigar Galaxy
curl -X POST http://localhost:3000/galaxies -F "name=Cigar" -F "size=37000" -F "description=A starburst galaxy about 12 million light-years away. It is five times more luminous than the Milky Way." -F "image=https://upload.wikimedia.org/wikipedia/commons/6/63/M82_HST_ACS_814nm.jpg"

# 6. Tadpole Galaxy
curl -X POST http://localhost:3000/galaxies -F "name=Tadpole" -F "size=280000" -F "description=A disrupted barred spiral galaxy famous for its long trail of stars, about 280,000 light-years long." -F "image=https://upload.wikimedia.org/wikipedia/commons/a/a2/Tadpole_Galaxy_Hubble.jpg"


---------------------------------------------------------------------------------


# 1. Sirius (Alpha Canis Majoris)
curl -X POST http://localhost:3000/stars -F "name=Sirius" -F "GalaxyId=1" -F "description=The brightest star in the night sky. A binary star system consisting of a main-sequence star and a white dwarf." -F "image=https://upload.wikimedia.org/wikipedia/commons/f/f3/Sirius_A_and_B_Hubble_m.jpg"

# 2. Betelgeuse
curl -X POST http://localhost:3000/stars -F "name=Betelgeuse" -F "GalaxyId=1" -F "description=A distinctively reddish semiregular variable star. One of the largest stars visible to the naked eye." -F "image=https://upload.wikimedia.org/wikipedia/commons/5/57/Betelgeuse_captured_by_ALMA.jpg"

# 3. Rigel
curl -X POST http://localhost:3000/stars -F "name=Rigel" -F "GalaxyId=1" -F "description=A blue supergiant that is the brightest star in the constellation of Orion." -F "image=https://upload.wikimedia.org/wikipedia/commons/e/e6/Rigel_star.jpg"

# 4. Vega
curl -X POST http://localhost:3000/stars -F "name=Vega" -F "GalaxyId=1" -F "description=A blue-tinged white star that was the first star other than the Sun to be photographed." -F "image=https://upload.wikimedia.org/wikipedia/commons/b/b3/Vega_Spitzer.jpg"

# 5. Antares
curl -X POST http://localhost:3000/stars -F "name=Antares" -F "GalaxyId=1" -F "description=A red supergiant in the Milky Way and the sixteenth-brightest star in the nighttime sky." -F "image=https://upload.wikimedia.org/wikipedia/commons/7/7b/Antares_star.jpg"

# 6. Canopus
curl -X POST http://localhost:3000/stars -F "name=Canopus" -F "GalaxyId=1" -F "description=The brightest star in the southern constellation of Carina and the second-brightest star in the night sky." -F "image=https://upload.wikimedia.org/wikipedia/commons/4/41/Canopus_star.jpg"


---------------------------------------------------------------------------------


# 1. Kepler-186f
curl -X POST http://localhost:3000/planets -F "name=Kepler-186f" -F "starId=1" -F "type=Terrestrial" -F "description=The first Earth-size planet discovered in the habitable zone of another star." -F "image=https://upload.wikimedia.org/wikipedia/commons/a/a3/Kepler-186f_artist_concept.jpg"

# 2. Proxima Centauri b
curl -X POST http://localhost:3000/planets -F "name=Proxima b" -F "starId=1" -F "type=Terrestrial" -F "description=An exoplanet orbiting in the habitable zone of the red dwarf star Proxima Centauri." -F "image=https://upload.wikimedia.org/wikipedia/commons/b/b2/Proxima_Centauri_b_artist_impression.jpg"

# 3. HD 189733 b
curl -X POST http://localhost:3000/planets -F "name=HD 189733 b" -F "starId=1" -F "type=Gas Giant" -F "description=A deep blue gas giant where it likely rains glass sideways in howling 4,500 mph winds." -F "image=https://upload.wikimedia.org/wikipedia/commons/d/de/Exoplanet_Comparison_HD_189733_b.jpg"

# 4. TRAPPIST-1e
curl -X POST http://localhost:3000/planets -F "name=TRAPPIST-1e" -F "starId=1" -F "type=Terrestrial" -F "description=An Earth-sized exoplanet orbiting within the habitable zone of the ultra-cool dwarf star TRAPPIST-1." -F "image=https://upload.wikimedia.org/wikipedia/commons/3/36/TRAPPIST-1e_artist_impression.jpg"

# 5. 55 Cancri e
curl -X POST http://localhost:3000/planets -F "name=55 Cancri e" -F "starId=1" -F "type=Super-Earth" -F "description=A lava world that is so dense it is thought to be composed largely of carbon in the form of diamond." -F "image=https://upload.wikimedia.org/wikipedia/commons/b/b8/Artist%27s_concept_of_the_super-Earth_55_Cancri_e.jpg"

# 6. WASP-12b
curl -X POST http://localhost:3000/planets -F "name=WASP-12b" -F "starId=1" -F "type=Gas Giant" -F "description=A 'hot Jupiter' that is being stretched into an egg shape and consumed by its parent star." -F "image=https://upload.wikimedia.org/wikipedia/commons/c/cb/WASP-12b.jpg"