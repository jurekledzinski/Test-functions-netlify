const mongoose = require('mongoose');
const connectDb = require('../../db/connectDb');
const Email = require('../../models/email');

connectDb(process.env.REACT_APP_DB);
console.log(mongoose.connection.readyState, 'Ready state get emails outside');

exports.handler = async function (event) {
  console.log(mongoose.connection.readyState, 'Ready state get emails');
  console.log(mongoose.connection.connectionStates, 'states connection');
  const allEmails = await Email.find({}).select('-__v');
  return {
    statusCode: 200,
    body: JSON.stringify({ value: allEmails }),
  };
};
