const mongodb = require('mongodb');
const mongodbConfig = require('../config/mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function initDb() {
  const client = await MongoClient.connect(`${mongodbConfig.url}`);
  database = client.db('todo-list-app-backend-nodejs');
}

function getDb() {
  if (!database) {
    throw new Error('Database not connected!');
  }

  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb,
};
