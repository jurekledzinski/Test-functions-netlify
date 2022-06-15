import React, { useEffect, useState } from 'react';
import './TheContactForm.css';

const TheContactForm = () => {
  const [email, setEmail] = useState({ name: '', email: '', message: '' });
  const [message, setMessage] = useState(null);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const checkArr = Object.values(email);
    const checkIsEmpty = checkArr.find((item) => item === '');

    if (!isNaN(checkIsEmpty)) return;

    try {
      const reqOption = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email),
      };

      const url = '/.netlify/functions/send-email';

      const response = await fetch(url, reqOption);

      const data = await response.json();

      setMessage(data.message);

      setEmail({ name: '', email: '', message: '' });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const idTimout = setTimeout(() => setMessage(''), 2000);
    return () => clearTimeout(idTimout);
  }, [message]);

  return (
    <>
      <form className="form" onSubmit={handleSubmitForm}>
        <div className="form__input-wrapper">
          <label className="form__label">Name:</label>
          <input
            type="text"
            className="form__input"
            placeholder="Your name"
            onChange={(e) =>
              setEmail((prevValue) => ({ ...prevValue, name: e.target.value }))
            }
            value={email.name}
          />
        </div>
        <div className="form__input-wrapper">
          <label className="form__label">Email:</label>
          <input
            type="text"
            className="form__input"
            placeholder="Your email"
            onChange={(e) =>
              setEmail((prevValue) => ({ ...prevValue, email: e.target.value }))
            }
            value={email.email}
          />
        </div>{' '}
        <div className="form__input-wrapper">
          <label className="form__label">Message:</label>
          <textarea
            className="form__input"
            rows="6"
            placeholder="Your message"
            onChange={(e) =>
              setEmail((prevValue) => ({
                ...prevValue,
                message: e.target.value,
              }))
            }
            value={email.message}
          ></textarea>
        </div>
        <button className="form__button">Send Message</button>
      </form>
      {message && <p className="message">{message}</p>}
    </>
  );
};

export default TheContactForm;
