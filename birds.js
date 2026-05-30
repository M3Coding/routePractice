import express from 'express';

const router = express.Router();

//middleware that is specific to this router
const timelog = (req, res, next) => {
    console.log('Time: ', Date.now());
    next();
}
router.use(timelog);

//homepage route
router.get('/', (req, res) => {
    res.send('Birds homepage')
});


export default router;
