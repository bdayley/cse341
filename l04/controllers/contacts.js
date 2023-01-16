const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {  
  try {
    const result = await mongodb.getDb().db("cse341").collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists); 
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getSingle = async (req, res, next) => {
  try {
    const userId = new ObjectId(req.params.id); // ObjectId turns it into a mongo id
    const result = await mongodb.getDb().db("cse341").collection('contacts').find({ _id: userId }); // can use "and" here, etc, -> firstName: name
    if (result == null) {
      return res.status(404).json({ message: 'Cannot find contact'}); // this didn't do anything... 
    }    
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }  
}

// Create a POST route for creating new contacts that returns the ID of the new contact and a 201 status 
const addContact = async (req, res, next) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  };
  try {
    const result = await mongodb.getDb().db("cse341").collection('contacts').insertOne(newContact); 
    res.status(201).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Create a PUT route for updating a contact that returns a 204 status
const updateContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday    
  }
  try {
    const result = await mongodb.getDb().db("cse341").collection('contacts').replaceOne({ _id: userId }, contact); 
    res.status(204).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

// Create a DELETE route for deleting a contact that returns a 200 status
const deleteContact = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  try {
    const result = await mongodb.getDb().db("cse341").collection('contacts').deleteOne({ _id: userId }); 
    res.status(200).json({result});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }  
}
// https://www.mongodbtutorial.org/mongodb-crud/mongodb-deleteone/


module.exports = { getAll, getSingle, addContact, updateContact, deleteContact };