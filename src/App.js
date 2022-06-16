import React, { useEffect, useState } from 'react';
import './App.css';

import TheContactForm from './components/TheContactForm';

const App = () => {
  const [allEmails, setAllEmails] = useState([]);

  useEffect(() => {
    const handleGetAllEmails = async () => {
      const url = '/.netlify/functions/get-emails';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data, 'All');
      setAllEmails(data.value);
    };
    handleGetAllEmails();
  }, []);

  return (
    <div className="app">
      <TheContactForm />
      <ul>
        {allEmails.map((item) => (
          <li key={item._id}>
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
