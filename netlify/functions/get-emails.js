const mongoose = require('mongoose');
const connectDb = require('../../db/connectDb');
const Email = require('../../models/email');

connectDb(process.env.REACT_APP_DB);

exports.handler = async function (event) {
  console.log(mongoose.connection.readyState, 'Ready state get emails');

  mongoose.connection.on('connecting', function () {
    console.log('Connecting setup handler...');
  });

  mongoose.connection.on('connected', function () {
    console.log('Connected setup handler...');
  });

  mongoose.connection.on('error', function () {
    console.log('Lost MongoDB connection error handler...');
  });

  mongoose.connection.on('reconnected', function () {
    console.log('reconnected... handler');
  });

  mongoose.connection.on('disconnected', function () {
    console.log('disconnected... handler');
  });

  const allEmails = await Email.find({}).select('-__v');
  return {
    statusCode: 200,
    body: JSON.stringify({ value: allEmails }),
  };
};
