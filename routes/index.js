// Challenge Template: 18-NoSQL/01-Activities/28-Stu_Mini-Project

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route!'));

module.exports = router;
