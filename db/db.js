const mongoose = require('mongoose');
const { env, mongoURI } = require('../config/keys');

module.exports = class DB {
  static async connect() {
    // Fixed mongoose deprecation error
    mongoose.set('useCreateIndex', true);

    try {
      // Connecting to server
      console.log(`*** Trying to connect to ${env} DB ***`);

      const db = await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });

      console.log('*** Connected to MongoDB ***');
    } catch (e) {
      console.error(e);
    }
  }
};
