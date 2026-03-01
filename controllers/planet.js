const { Planet, Star } = require("../models");

const index = async (request, response) => {
  try {
    const planets = await Planet.findAll({ include: [Star] });
    const stars = await Star.findAll(); // For the "Create" form on index
    if (request.headers.accept && request.headers.accept.includes('text/html')) {
      return response.render("planets/index", { planets, stars });
    }
    response.status(200).json(planets);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const show = async (request, response) => {
  try {
    const planet = await Planet.findByPk(request.params.id, { include: [Star] });
    const stars = await Star.findAll(); // For the "Update" dropdown
    if (!planet) return response.status(404).json({ error: "Planet not found" });
    if (request.headers.accept.includes('text/html')) {
      return response.render("planets/show", { planet, stars });
    }
    response.status(200).json(planet);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const create = async (request, response) => {
  try {
    const data = request.body;
    if (request.file) {
      data.image = `/uploads/planets/${request.file.filename}`;
    }
    const planet = await Planet.create(data);
    if (request.headers.accept.includes('text/html')) {
      return response.redirect(`/planets/`);
    }
    response.status(201).json(planet);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const update = async (request, response) => {
  try {
    const data = request.body;
    if (request.file) {
      data.image = `/uploads/planets/${request.file.filename}`;
    }
    await Planet.update(data, { where: { id: request.params.id } });
    if (request.headers.accept.includes('text/html')) {
      return response.redirect(`/planets/${request.params.id}`);
    }
    const updatedPlanet = await Planet.findByPk(request.params.id);
    response.status(200).json(updatedPlanet);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const remove = async (request, response) => {
  try {
    await Planet.destroy({ where: { id: request.params.id } });
    if (request.headers.accept.includes('text/html')) {
      return response.redirect('/planets');
    }
    response.status(204).send();
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = { index, show, create, update, remove };