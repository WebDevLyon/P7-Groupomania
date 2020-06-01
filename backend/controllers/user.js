//Import
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let models = require('../models');
let utils = require('../utils/jwtUtils');

//Création d'un user
exports.signup = (req, res) => {
    // Valider les paramètres de la requète
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;

    if (email == null || username == null || password == null) {
        res.status(400).json({ error: 'il manque un paramètre' })
    }

    //TO DO => Vérification des saisies user

    //Vérification si user n'existe pas déjà
    //TO DO => Vérifier l'username et l'email
    models.User.findOne({
        attributes: ['email'],
        where: { email: email }
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(password, 10, function (err, bcryptPassword) {
                    // Création de l'user
                    const newUser = models.User.create({
                        email: email,
                        username: username,
                        password: bcryptPassword,
                        isAdmin: false
                    })
                        .then(newUser => { res.status(201).json({ 'id': newUser.id }) })
                        .catch(err => {
                            res.status(500).json({ err })
                        })
                })
            }
            else {
                res.status(409).json({ error: 'Cette utilisateur existe déjà ' })
            }
        })
        .catch(err => { res.status(500).json({ err }) })
};

//Login d'un user
exports.login = (req, res) => {
    //Récupération et validation des paramètres
    let username = req.body.username;
    let password = req.body.password;
    if (username == null || password == null) {
        res.status(400).json({ error: 'Il manque un paramètre' })
    }
    //Vérification si user existe
    models.User.findOne({
        where: { username: username }
    })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, (errComparePassword, resComparePassword) => {
                    if (resComparePassword) {
                        res.status(200).json({
                            userId: user.id,
                            token: utils.generateToken(user)
                        })
                    } else {
                        res.status(403).json({ error: 'invalid password' });
                    };
                })
            } else {
                res.status(404).json({ 'erreur': 'Cet utilisateur n\'existe pas' })
            }
        })
        .catch(err => { res.status(500).json({ err }) })
};

//Profil d'un user
exports.userProfil = (req, res) => {
    let id = utils.getUserId(req.headers.authorization)
    models.User.findOne({
        attributes: ['id', 'email', 'username'],
        where: { id: id }
    })
        .then(user => res.status(200).json(user))
        .catch(error => res.status(500).json(error))
};

//modification d'un profil
exports.updateProfil = (req, res) => {
    let id = utils.getUserId(req.headers.authorization)
    if (req.body.password != null) {
        models.User.findOne({
            attributes: ['id', 'email', 'username'],
            where: { id: id }
        })
            .then(user => {
                if (user) {
                    bcrypt.hash(req.body.password, 10, function (err, bcryptPassword) {
                        user.update(
                            { password: bcryptPassword },
                            { where: 'password' }
                        )
                            .then(() => res.status(201).json({ message: 'Password mis à jour' }))
                            .catch(err => res.status(500).json(err))
                    })
                }
            })
            .catch(error => res.status(500).json(error))
    } else {
        res.status(422 ).json({ error: 'Rien n\'est à modifer' })
    }
}