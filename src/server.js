require('dotenv').config();
const knex = require('knex');
var cors = require('cors')
const app = require('./app');
const {PORT, DATABASE_URL} = require('./config');

app.use(cors())
const db = knex({
  client: 'pg',
  connection: DATABASE_URL
});
console.log('knex and driver installed correctly');
app.set('db', db);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
