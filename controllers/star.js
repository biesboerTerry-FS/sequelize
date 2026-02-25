const { Star, Planet, Galaxy } = require("../models");

const index = async (request, response) => {
  const stars = await Star.findAll({ include: [Planet, Galaxy] });
  response.status(200).json(stars);
};

const show = async (request, response) => {
  const star = await Star.findByPk(request.params.id, { include: [Planet, Galaxy] });
  response.status(200).json(star);
};

const create = async (request, response) => {
  const star = await Star.create(request.body);
  response.status(201).json(star);
};

const update = async (request, response) => {
  await Star.update(request.body, { where: { id: request.params.id } });
  const updatedStar = await Star.findByPk(request.params.id);
  response.status(200).json(updatedStar);
};

const remove = async (request, response) => {
  await Star.destroy({ where: { id: request.params.id } });
  response.status(204).send();
};

module.exports = { index, show, create, update, remove };