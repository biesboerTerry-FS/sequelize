const { Planet, Star } = require("../models");

const index = async (request, response) => {
  const planets = await Planet.findAll({ include: [Star] });
  response.status(200).json(planets);
};

const show = async (request, response) => {
  const planet = await Planet.findByPk(request.params.id, { include: [Star] });
  response.status(200).json(planet);
};

const create = async (request, response) => {
  const planet = await Planet.create(request.body);
  response.status(201).json(planet);
};

const update = async (request, response) => {
  await Planet.update(request.body, { where: { id: request.params.id } });
  const updatedPlanet = await Planet.findByPk(request.params.id);
  response.status(200).json(updatedPlanet);
};

const remove = async (request, response) => {
  await Planet.destroy({ where: { id: request.params.id } });
  response.status(204).send();
};

module.exports = { index, show, create, update, remove };