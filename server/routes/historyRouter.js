const Router = require('express');
const router = Router();
const historyController = require('../controllers/historyController');

router.post('/',historyController.create);
router.get('/',historyController.getAll);
router.get('/:id',historyController.getOne);

module.exports = router;