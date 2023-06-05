const Router = require('express');
const router = Router();
const typeController = require('../controllers/typeControlller');


router.post('/', typeController.create);
router.get('/', typeController.getAll);

module.exports = router;