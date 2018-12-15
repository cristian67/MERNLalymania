const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');


const router = express.Router();



///========================
//  Mostrar Usuarios
//=========================
router.get('/users', async(req, res) => {

    const usuario = await Usuario.find({ estado: true })
    res.json(usuario)
});

///========================
//  Mostrar Usuarios
//=========================
router.get('/user/:id', async(req, res) => {
    const id = req.params.id;
    const usuario = await Usuario.findById(id);
    res.json(usuario)
});

//=========================
//  Crear Usuarios
//=========================
router.post('/user', async(req, res) => {

    const { nombre, email, password, rol } = req.body;

    //Iniciarlizar Usuario
    const usuario = new Usuario({
        nombre: nombre,
        email: email,
        password: bcrypt.hashSync(password, 10),
        rol: rol
    });

    //console.log(usuario);

    await usuario.save();

    res.json({
        ok: true,
        usuario
    });
});


///========================
//  Actualizar Usuarios
//=========================
router.put('/user/:id', async(req, res) => {
    //obtener id
    const id = req.params.id;
    const { nombre, email, password, rol } = req.body;
    const updateUser = { nombre, email, password, rol };

    await Usuario.findByIdAndUpdate(id, updateUser)

    res.json({
        ok: true,
        updateUser
    });

});

///========================
//  Delete Usuarios
//=========================
router.delete('/user/:id', async(req, res) => {

    const id = req.params.id;
    let cambiaEstado = { estado: false }

    await Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, UsuarioBorrado) => {

        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        if (!UsuarioBorrado) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: "Usuario no registrado"
                }
            });
        }

        res.json({
            ok: true,
            usuario: UsuarioBorrado,
            message: "El usuario ha sido desastivado"
        });
    });

});

module.exports = router;