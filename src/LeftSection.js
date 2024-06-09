import React, { useState } from 'react';
import logo from './assets/1/Logo.png';
import './App.css'; 

function LeftSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation for email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Invalid email format');
      return;
    }

    try {
      const response = await fakeApiRequest(email);

      if (response.status === 200) {
        setMessage('Form Submitted');
      }
    } catch (error) {
      if (error.response.status === 422) {
        setMessage('Error: ' + error.response.data.message);
      } else {
        setMessage('An unexpected error occurred');
      }
    }
  };

  // Simulate an API request function
  const fakeApiRequest = (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.endsWith('@ez.works')) {
          reject({
            response: {
              status: 422,
              data: { message: 'Email domain @ez.works is not allowed' },
            },
          });
        } else {
          resolve({ status: 200 });
        }
      }, 1000);
    });
  };

  return (
    <div className="left-content">
      <div className="header">
        <div className="logo"><img src={logo} alt="Logo" /></div>
      </div>
      <div className="sub-title">Suite of Business Support Service</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Contact Me</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default LeftSection;
