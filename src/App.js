import React, { useEffect } from 'react';
import './App.css';

import TheContactForm from './components/TheContactForm';

const App = () => {
  //   const [allEmails, setAllEmails] = useState([]);
  useEffect(() => {
    const handleGetAllEmails = async () => {
      const url = '/.netlify/functions/get-emails';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data, 'All');
    };
    handleGetAllEmails();
  }, []);

  return (
    <div className="app">
      <TheContactForm />
    </div>
  );
};

export default App;
