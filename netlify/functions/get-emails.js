const mongoose = require('mongoose');
const connectDb = require('../../db/connectDb');
const Email = require('../../models/email');

connectDb(process.env.REACT_APP_DB);

exports.handler = async function (event) {
  console.log(mongoose.connection.readyState, 'Ready state get emails');
  const allEmails = await Email.find({});
  delete allEmails.__v;
  console.log(allEmails);
  return {
    statusCode: 200,
    body: JSON.stringify({ value: allEmails }),
  };
};
