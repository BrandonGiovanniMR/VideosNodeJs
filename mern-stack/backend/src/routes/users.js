const {Router} = require('express');
const router = Router();

const { getUsers, createUsers, deleteUsers } = require('../controllers/users.controller');

router.route('/')
    .get(getUsers)
    .post(createUsers);
    
router.route('/:id')
    .delete(deleteUsers);
    /*
    https://www.youtube.com/watch?v=HbV3dphqVAs
    npm run dev
*/
module.exports = router;