const express = require(`express`);
const planetCtlr = require(`../controllers/planet.js`);
const upload = require('../middleware/uploader.js');
const router = new express.Router();

router.get(`/`, planetCtlr.index);
router.post(`/`, upload.single('image'), planetCtlr.create);
router.get(`/:id`, planetCtlr.show);
router.post(`/:id`, upload.single('image'), planetCtlr.update);
router.put(`/:id`, upload.single('image'), planetCtlr.update);
router.get(`/:id/delete`, planetCtlr.remove);
router.delete(`/:id`, planetCtlr.remove);

module.exports = router;