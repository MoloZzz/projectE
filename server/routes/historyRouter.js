const Router = require('express');
const router = Router();
const historyController = require('../controllers/historyController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');


router.post('/',checkRoleMiddleware("ADMIN"),historyController.create);
router.get('/',historyController.getAll);
router.get('/:id',historyController.getOne);

module.exports = router;