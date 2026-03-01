const express = require(`express`);
const starCtlr = require(`../controllers/star.js`);
const upload = require('../middleware/uploader.js');
const router = new express.Router();

router.get(`/`, starCtlr.index);
router.post(`/`, upload.single('image'), starCtlr.create);
router.get(`/:id`, starCtlr.show);
router.post(`/:id`, upload.single('image'), starCtlr.update);
router.put(`/:id`, upload.single('image'), starCtlr.update);
router.get(`/:id/delete`, starCtlr.remove);
router.delete(`/:id`, starCtlr.remove);

module.exports = router;