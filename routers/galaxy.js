const express = require(`express`);
const galaxyCtlr = require(`../controllers/galaxy.js`);
const upload = require('../middleware/uploader.js');
const router = new express.Router();

router.get(`/`, galaxyCtlr.index);
router.post(`/`, upload.single('image'), galaxyCtlr.create);
router.get(`/:id`, galaxyCtlr.show);
router.post(`/:id`, upload.single('image'), galaxyCtlr.update); // Handles form update
router.put(`/:id`, upload.single('image'), galaxyCtlr.update); // Handles API update
router.get(`/:id/delete`, galaxyCtlr.remove); 
router.delete(`/:id`, galaxyCtlr.remove);

module.exports = router;