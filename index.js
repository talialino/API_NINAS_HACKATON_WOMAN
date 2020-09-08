const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

mongoose.connect('mongodb://localhost:27017/dadosninas', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

requireDir('./src/models');

app.use('/', require('./src/routes'));

const port = process.env.PORT || '3000';
app.listen(port, () => {
  console.log('servidor rodando');
});
