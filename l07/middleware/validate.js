const validator = require('../helpers/validate');

const saveGame = (req, res, next) => {
    const validationRule = {
        name: 'required|string',
        designer1: 'required|string',
        designer2: 'string',
        publisher: 'required|string',
        numberOfPlayers: 'required|string',
        playingTime: 'integer',
        weight: 'numeric',
        spielDesJahres: 'string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send( {
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

const saveBook = (req, res, next) => {
    const validationRule = {
        name: 'required|string',
        author: 'required|string',
        inSeries: 'string',
        seriesTitle: 'string',
        seriesNumber: 'numeric',        
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send( {
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};


module.exports = {
    saveGame,
    saveBook
};