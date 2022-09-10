const { response } = ('express');
const Usuario = require('../models/UserModel');
const bcryptjs = require('bcryptjs');
const UserModel = require('../models/UserModel');

const GetUser = (req, res) => {

    res.json({
        id: '1',
        msg: ('Obtener_Bienvenido Controller')
    });
};

const PutUser = async(req, res) => {

    const { id } = req.params;
    const { password, nombre, correo, google } = req.body;
    if (password) {
        //Encriptar la contraseña
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);

        const usuario = await Usuario.findByIdAndUpdate(id)

    }

    res.json({
        id: '2',
        msg: ('Put controller'),
        usuario
    });
};

const PostUser = async(req, res) => {

    const { nombre, correo, password, rol } = req.body;

    const usuario = new Usuario({ nombre, correo, password, rol });

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt);


    //Guardar la base de datos 
    await usuario.save();

    res.json({
        id: '1',
        msg: ('Obtener_Bienvenido Controller'),
        usuario
    });
};

const DeleteUser = (req, res) => {
    res.json({
        id: '1',
        msg: ('DELETE_Bienvenido Controller')
    });
};

module.exports = {
    GetUser,
    PostUser,
    PutUser,
    DeleteUser
}