'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Galaxies', [
      { id: 1, name: 'Milky Way', size: 100000, description: 'Our home galaxy.', image: 'https://images-assets.nasa.gov/image/PIA12348/PIA12348~medium.jpg', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Andromeda', size: 220000, description: 'Large spiral galaxy.', image: 'https://images-assets.nasa.gov/image/PIA04921/PIA04921~medium.jpg', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Sombrero', size: 50000, description: 'Bright nucleus.', image: 'https://images-assets.nasa.gov/image/PIA04926/PIA04926~medium.jpg', createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.bulkInsert('Stars', [
      { id: 1, name: 'Sun', size: 1392700, description: 'Center of Solar System.', GalaxyId: 1, image: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000790/GSFC_20171208_Archive_e000790~medium.jpg', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Sirius', size: 2381000, description: 'The Dog Star.', GalaxyId: 1, image: 'https://images-assets.nasa.gov/image/stsci-h-p1722b-m-683x641/stsci-h-p1722b-m-683x641~medium.jpg', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Proxima Centauri', size: 200000, description: 'Closest star to Sun.', GalaxyId: 1, image: 'https://images-assets.nasa.gov/image/hubble-spots-a-neighbor-star/hubble-spots-a-neighbor-star~medium.jpg', createdAt: new Date(), updatedAt: new Date() }
    ]);

    await queryInterface.bulkInsert('Planets', [
      { id: 1, name: 'Earth', size: 12742, description: 'Our home planet.', isGasGiant: false, type: 'Terrestrial', starId: 1, image: 'https://images-assets.nasa.gov/image/PIA18033/PIA18033~medium.jpg', createdAt: new Date(), updatedAt: new Date() },
      { id: 2, name: 'Mars', size: 6779, description: 'The Red Planet.', isGasGiant: false, type: 'Terrestrial', starId: 1, image: 'https://images-assets.nasa.gov/image/PIA04352/PIA04352~medium.jpg', createdAt: new Date(), updatedAt: new Date() },
      { id: 3, name: 'Jupiter', size: 139820, description: 'Gas Giant.', isGasGiant: true, type: 'Gas Giant', starId: 1, image: 'https://images-assets.nasa.gov/image/PIA21971/PIA21971~medium.jpg', createdAt: new Date(), updatedAt: new Date() },
      { id: 4, name: 'Proxima b', size: 13000, description: 'Exoplanet.', isGasGiant: false, type: 'Super Earth', starId: 3, image: 'https://images-assets.nasa.gov/image/PIA21093/PIA21093~medium.jpg', createdAt: new Date(), updatedAt: new Date() }
    ]);

    return queryInterface.bulkInsert('StarsPlanets', [
      { StarId: 1, PlanetId: 1, createdAt: new Date(), updatedAt: new Date() },
      { StarId: 1, PlanetId: 2, createdAt: new Date(), updatedAt: new Date() },
      { StarId: 3, PlanetId: 4, createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('StarsPlanets', null, {});
    await queryInterface.bulkDelete('Planets', null, {});
    await queryInterface.bulkDelete('Stars', null, {});
    await queryInterface.bulkDelete('Galaxies', null, {});
  }
};