const { Router } = require('express');
const { GetUser, PostUser, DeleteUser } = require('../controller/user');

const router = Router();

//Estatus para errores 
router.get('/', GetUser);
//End point Get

router.post('/', PostUser);

router.delete('/', DeleteUser);




module.exports = router;