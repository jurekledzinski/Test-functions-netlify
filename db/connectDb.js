const mongoose = require('mongoose');

const connectDb = (url) => {
  console.log(url, 'url connectDb');

  mongoose
    .connect(url, {
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      heartbeatFrequencyMS: 1000,
    })
    .then(() => {
      console.log('Baza podłączona');
    })
    .catch((err) => {
      console.log(err, 'Baza error');
    });

  mongoose.connection.on('error', function () {
    console.log('Lost MongoDB connection error...');
  });

  mongoose.connection.on('reconnected', function () {
    console.log('reconnected...');
  });
};

module.exports = connectDb;
