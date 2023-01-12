const returnPerson = (req, res, next) => {
    res.json('Bozo T. Clown');
}

const returnAnotherPerson = (req, res, next) => {
    res.json('Gandalf the Gray');
}

module.exports = { returnPerson, returnAnotherPerson };