const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info : {
        title: 'CSE 341 API Project 2',
        description: 'Project 2'
    },
    host: 'localhost:8080',
    schemes: ['http'],
    // host: 'https://cse341-dayley.onrender.com',
    // schemes: ['https']
};

const outputFile = './swagger-output.json';
const endpointFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointFiles, doc);

/*
npm install --save-dev swagger-autogen
npm install swagger-ui-express

add script to your package.json: 
"swagger-autogen": "node ./swagger.js"

npm run swagger-autogen
*/