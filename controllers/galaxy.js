const { Galaxy, Star } = require("../models");

const index = async (req, res) => {
  try {
    const galaxies = await Galaxy.findAll({ include: [Star] });
    if (req.headers.accept && req.headers.accept.includes('text/html')) {
      return res.render('galaxies/index', { galaxies });
    }
    res.status(200).json(galaxies);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const galaxy = await Galaxy.findByPk(req.params.id, { include: [Star] });
    if (req.headers.accept && req.headers.accept.includes('text/html')) {
      return res.render('galaxies/show', { galaxy });
    }
    res.status(200).json(galaxy);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const create = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) {
      data.image = `/uploads/galaxies/${req.file.filename}`;
    }
    const galaxy = await Galaxy.create(data);
    if (req.headers.accept && req.headers.accept.includes('text/html')) {
      return res.redirect('/galaxies');
    }
    res.status(201).json(galaxy);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) {
      data.image = `/uploads/galaxies/${req.file.filename}`;
    }
    await Galaxy.update(data, { where: { id: req.params.id } });
    if (req.headers.accept && req.headers.accept.includes('text/html')) {
      return res.redirect(`/galaxies/${req.params.id}`);
    }
    const updated = await Galaxy.findByPk(req.params.id);
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const remove = async (req, res) => {
  try {
    await Galaxy.destroy({ where: { id: req.params.id } });
    if (req.headers.accept && req.headers.accept.includes('text/html')) {
      return res.redirect('/galaxies');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { index, show, create, update, remove };