const Router = require('express');
const router = Router();
const typeController = require('../controllers/typeControlller');
const checkRoleMiddleware = require("../middleware/checkRoleMiddleware");


router.post('/',checkRoleMiddleware("ADMIN"), typeController.create);
router.get('/', typeController.getAll);

module.exports = router;