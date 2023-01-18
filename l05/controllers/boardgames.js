const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    try {
        const result = await mongodb.getDb().db('cse341').collection('boardgames').find();
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getOne = async (req, res) => {
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db('cse341').collection('boardgames').find({ _id: userId });
        if (result == null) {
            return res.status(404).json({ message: 'Cannot find boardgame' });
        }
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0]);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addGame = async (req, res) => {
    const newGame = {
        name: req.body.name,
        designer1: req.body.designer1,
        designer2: req.body.designer2,
        publisher: req.body.publisher,
        numberOfPlayers: req.body.numberOfPlayers,
        playingTime: req.body.playingTime,
        weight: req.body.weight,
        spielDesJahres: req.body.spielDesJahres
    }
    try {
        const result = await mongodb.getDb().db('cse341').collection('boardgames').insertOne(newGame);
        res.status(201).json(result)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// add updateGame, deleteGame


module.exports = {
    getAll,
    getOne,
    addGame
}