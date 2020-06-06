const jwt = require('jsonwebtoken');
let models = require('../models');


module.exports = (req, res, next) => {
    //Récupération du Token dans le header
    try {
        //Initialisation d'un user ID à null pour permettre la condition
        let userId = null
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'DEVELOPMENT_TOKEN_SECRET');
        userId = decodedToken.userId;
        if (userId == null) {
            res.status(401).json({ error: 'Identification non valide' })
        } else {
            next()
        }
    }
    catch{
        res.status(401).json({ error: 'Invalid requete' })
    };
}