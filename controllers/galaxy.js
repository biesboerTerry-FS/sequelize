const { Galaxy, Star } = require("../models");

const index = async (req, res) => {
  const galaxies = await Galaxy.findAll({ include: [Star] });
  res.status(200).json(galaxies);
};

const show = async (req, res) => {
  const galaxy = await Galaxy.findByPk(req.params.id, { include: [Star] });
  res.status(200).json(galaxy);
};

const create = async (req, res) => {
  const galaxy = await Galaxy.create(req.body);
  res.status(201).json(galaxy);
};

const update = async (req, res) => {
  await Galaxy.update(req.body, { where: { id: req.params.id } });
  const updated = await Galaxy.findByPk(req.params.id);
  res.status(200).json(updated);
};

const remove = async (req, res) => {
  await Galaxy.destroy({ where: { id: req.params.id } });
  res.status(204).send();
};

module.exports = { index, show, create, update, remove };