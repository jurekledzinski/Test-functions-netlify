const mongoose = require('mongoose');
// const Email = require('../../models/email');

exports.handler = async function (event) {
  console.log(event);
  console.log(mongoose.connection.readyState, 'Ready state get emails');
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Get emails' }),
  };
};
