//Import
let bcrypt = require('bcrypt');
let jwt = require('jsonwebtoken');
let models = require('../models')

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
                        isAdmin: 0
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
                            token: jwt.sign(
                                {
                                    userId: user.id,
                                    isAdmin: user.isAdmin
                                },
                                'DEVELOPMENT_TOKEN_SECRET',
                                { expiresIn: '24h' }
                            ),
                        });
                    } else {
                        res.status(403).json({ error: 'invalid password' });
                    }
                })
            } else {
                res.status(404).json({ 'erreur': 'Cet utilisateur n\'existe pas' })
            }
        })
        .catch(err => { res.status(500).json({ err }) })
}