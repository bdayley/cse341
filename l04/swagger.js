const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'CSE 341 API',
    description: 'Contact API',
  },
//   host: 'localhost:8080', // change to render eventually, also change in swagger-output
//   schemes: ['http']
  host: 'https://cse341-dayley.onrender.com', // don't start with https:// on the swagger-output.json
  schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
// run npm swagger-autogen to generate swagger-output.json
// added script to packson.json -> "swagger-autogen": "node ./swagger.js" 

//https://www.npmjs.com/package/swagger-autogen