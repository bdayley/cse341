const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db("cse341").collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id); // ObjectId turns it into a mongo id
  const result = await mongodb.getDb().db("cse341").collection('contacts').find({ _id: userId }); // can use "and" here, etc, like and name = 
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

/*
Create a POST route for creating new contacts that returns the ID of the new contact and a 201 status
Create a PUT route for updating a contact that returns a 204 status
Create a DELETE route for deleting a contact that returns a 200 status
*/
// new functions for put, post, and delete
const addContact = async (req, res, next) => {
  const result = await mongodb.getDb().db("cse341").collection('contacts').insertOne(req.body); 
  //result.then
  // status and message?
}

module.exports = { getAll, getSingle };