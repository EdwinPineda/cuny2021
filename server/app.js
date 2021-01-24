const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./models');
const routes = require('./routes/index');

const PORT = process.env.PORT || 5000;

const app = express();

const options = {
    cors:true,
    origins:["http://127.0.0.1:5000"],
};

const server = require('http').createServer(app);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', routes);

db.sequelize.sync({ force: false});

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));

module.exports = app;