const Router = require('express');
const router = Router();
const autorController = require('../controllers/autorController');

router.post('/',autorController.create);
router.get('/',autorController.getAll);

module.exports = router;