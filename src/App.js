import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import TheContactForm from './components/TheContactForm';

import { setEmails } from './store/emails/reducers';

const connectDb = require('../db/connectDb');

const App = () => {
  const allEmails = useSelector((state) => state.email);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleGetAllEmails = async () => {
      const url = '/.netlify/functions/get-emails';
      const response = await fetch(url);
      const data = await response.json();
      dispatch(setEmails(data.value.reverse()));
    };
    handleGetAllEmails();
  }, [dispatch]);

  useEffect(() => {
    connectDb(process.env.REACT_APP_DB);
  }, []);

  console.log(allEmails);

  return (
    <div className="app">
      <TheContactForm />
      <ul className="list">
        {allEmails.map((item) => (
          <li className="list__item" key={item._id}>
            <div>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.message}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
