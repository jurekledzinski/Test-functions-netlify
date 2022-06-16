const mongoose = require('mongoose');

const connectDb = async (url) => {
  console.log(url, 'url connectDb');
  mongoose
    .connect(url)
    .then()
    .catch((err) => {
      return err;
    });
};

module.exports = connectDb;
