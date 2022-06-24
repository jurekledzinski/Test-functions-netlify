const mongoose = require('mongoose');

const connectDb = (url) => {
  console.log(url, 'url connectDb');

  mongoose
    .connect(url, {
      auto_reconnect: true,
    })
    .then(() => {
      console.log('Baza podłączona');
    })
    .catch((err) => {
      console.log(err, 'Baza error');
    });

  mongoose.connection.on('disconnected', function () {
    console.log('Lost MongoDB connection...');
  });
};

module.exports = connectDb;
