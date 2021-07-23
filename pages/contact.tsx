import { useState } from 'react';
import Head from 'next/head';
import got from 'got';

import styles from '../styles/contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    const rawData = await fetch('/api/contact', { method: 'get'});
    const formData = await rawData.json();
    console.log('formdata', formData);
  };


  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageContainer}>
        <h1>Contact support</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            onChange={e => setName(e.target.value)}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            type="text"
            rows="4"
            onChange={e => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )

};

export default Contact;