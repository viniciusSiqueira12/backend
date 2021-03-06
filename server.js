const express = require('express');

const mongoose = require('mongoose');
const requireDir = require('require-dir');
const path = require('path');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/sextou', {useNewUrlParser : true, useUnifiedTopology : true})

app.use("/files", 
    express.static(path.resolve(__dirname, './tmp/uploads'))
);

requireDir('./src/models');

app.use('/api', require('./src/routes'));

app.listen(3001);

