const mongoose = require('mongoose');

const connectDb = async (url) => {
  console.log(url);
  mongoose
    .connect(url)
    .then()
    .catch((err) => {
      return err;
    });
};

connectDb(process.env.REACT_APP_DB);
