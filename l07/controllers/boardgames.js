const { response } = require('express');
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
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid id to find a boardgame.')
    }
    try {
        const userId = new ObjectId(req.params.id);
        const result = await mongodb.getDb().db('cse341').collection('boardgames').find({ _id: userId });
        if (!result) {
            return res.status(404).json({ message: 'Cannot find boardgame' });
        } // this doesn't work... 
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
    };
    try {
        const result = await mongodb.getDb().db('cse341').collection('boardgames').insertOne(newGame);
        res.status(201).json(result)
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const updateGame = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid id to update a boardgame.')
    }
    const userId = new ObjectId(req.params.id);
    const game = {
        name: req.body.name,
        designer1: req.body.designer1,
        designer2: req.body.designer2,
        publisher: req.body.publisher,
        numberOfPlayers: req.body.numberOfPlayers,
        playingTime: req.body.playingTime,
        weight: req.body.weight,
        spielDesJahres: req.body.spielDesJahres
    };
    try {
        const result = await mongodb.getDb().db('cse341').collection('boardgames').replaceOne({ _id: userId }, game);
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message || 'An error occurred while attempting to update.'});
    }
};

const deleteGame = async (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        res.status(400).json('Must use a valid id to delete a boardgame.')
    }
    const userId = new ObjectId(req.params.id);    
    try {
        const result = await mongodb.getDb().db('cse341').collection('boardgames').deleteOne({ _id: userId});
        res.status(204).json([result]);
                
    } catch (err) {
        res.status(500).json({ message: err.message || 'An error occurred whil attempting to delete.'});
    }

    // const result = await mongodb.getDb().db('cse341').collection('boardgames').deleteOne({ _id: userId});
    // if (res.acknowledged === 'true') {
    //     res.status(204).json([result]);
    // } else {
    //     res.status(500).json(response.error || 'An error occurred while deleting this boardgame.');
    // }
};

module.exports = {
    getAll,
    getOne,
    addGame,
    updateGame,
    deleteGame
}

/*
TODO: 
-catch error if ID is not a valid ObjectId
- getOne function - checking for "!result" doesn't work
*/
