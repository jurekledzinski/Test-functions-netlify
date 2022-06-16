const mongoose = require('mongoose');

const connectDb = async (url) => {
  console.log(url, 'url connectDb');
  await mongoose.connect(url);
};

module.exports = connectDb;
