const returnSomething = (req, res, next) => {
    res.json('Something...')
}

module.exports = { returnSomething }