const express = require('express');
const app = express();
const port = process.env.PORT || 3000
// render will have a port number

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Running on port ${port}...`);
})
