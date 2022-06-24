const mongoose = require('mongoose');

const connectDb = (url) => {
  console.log(url, 'url connectDb');

  mongoose
    .connect(url, { useUnifiedTopology: true })
    .then(() => {
      console.log('Baza podłączona');
    })
    .catch((err) => {
      console.log(err, 'Baza error');
    });

  mongoose.disconnect(
    () => {
      console.log('MongoDB connection close');
    },
    (err) => {
      console.log(err, 'err disconnet');
    }
  );
};

module.exports = connectDb;
