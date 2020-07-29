var express = require('express');
var router = express.Router();
const opinionsCtrl = require('../controllers/opinions')

router.get('/', opinionsCtrl.index);
router.get('/new-post', opinionsCtrl.new)
router.get('/:id', opinionsCtrl.show)

router.post('/', opinionsCtrl.createPost)
router.post('/:id/comment', opinionsCtrl.createComment)

router.delete('/:id', opinionsCtrl.delete)
router.delete('/:id/:commentid', opinionsCtrl.deleteComment)

module.exports = router;