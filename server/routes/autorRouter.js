const Router = require('express');
const router = Router();
const autorController = require('../controllers/autorController');
const checkRoleMiddleware = require('../middleware/checkRoleMiddleware');

router.post('/',checkRoleMiddleware("ADMIN"),autorController.create);
router.get('/',autorController.getAll);

module.exports = router;