const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    try {
        const result = await mongodb.getDb().db('cse341').collection('books').find();
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
        const result = await mongodb.getDb().db('cse341').collection('books').find({ _id: userId });
        if (result === null) {
            return res.status(404).json({ message: 'Cannot find book'});
        }
        result.toArray().then((lists) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(lists[0]);
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addBook = async (req, res) => {
    const newBook = {
        name: req.body.name,
        auther: req.body.author,
        inSeries: req.body.inSeries,
        seriesTitle: req.body.seriesTitle,
        seriesNumber: req.body.seriesNumber
    }
    try {
        const result = await mongodb.getDb().db('cse341').collection('books').insertOne(newBook);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// add updateBook, deleteBook

module.exports ={
    getAll,
    getOne,
    addBook
}