const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

const cors = require('cors');

// allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb://localhost/graphql');
mongoose.connection.once('open', () => {
  console.log('connected to database');
});

// when hit graphql route, handoff to graphqlHTTP
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
