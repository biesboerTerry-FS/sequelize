const { Star, Planet, Galaxy } = require("../models");

const index = async (req, res) => {
  try {
    const stars = await Star.findAll({ include: [Planet, Galaxy] });
    const galaxies = await Galaxy.findAll(); 
    if (req.headers.accept && req.headers.accept.includes('text/html')) {
      return res.render('stars/index', { stars, galaxies });
    }
    res.status(200).json(stars);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const show = async (req, res) => {
  try {
    const star = await Star.findByPk(req.params.id, { include: [Planet, Galaxy] });
    const galaxies = await Galaxy.findAll(); 
    if (req.headers.accept && req.headers.accept.includes('text/html')) {
      return res.render('stars/show', { star, galaxies });
    }
    res.status(200).json(star);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const create = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) {
      data.image = `/uploads/stars/${req.file.filename}`;
    }
    const star = await Star.create(data);
    if (req.headers.accept && req.headers.accept.includes('text/html')) {
      return res.redirect('/stars');
    }
    res.status(201).json(star);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const update = async (req, res) => {
  try {
    const data = req.body;
    if (req.file) {
      data.image = `/uploads/stars/${req.file.filename}`;
    }
    await Star.update(data, { where: { id: req.params.id } });
    if (req.headers.accept && req.headers.accept.includes('text/html')) {
      return res.redirect(`/stars/${req.params.id}`);
    }
    const updatedStar = await Star.findByPk(req.params.id);
    res.status(200).json(updatedStar);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const remove = async (req, res) => {
  try {
    await Star.destroy({ where: { id: req.params.id } });
    if (req.headers.accept && req.headers.accept.includes('text/html')) {
      return res.redirect('/stars');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { index, show, create, update, remove };