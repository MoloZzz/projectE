const Router = require('express');
const router = Router();

const userRouter = require('./userRouter');
const typeRouter = require('./typeRouter');
const autorRouter = require('./autorRouter');
const historyRouter = require('./historyRouter');



router.use('/user',userRouter);
router.use('/type',typeRouter);
router.use('/autor',autorRouter);
router.use('/history',historyRouter);


module.exports = router;