import { useState } from 'react';
import Head from 'next/head';
import got from 'got';

import styles from '../styles/contact.module.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const data = { name, email, message };
    const rawData = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data)});
    const formData = await rawData.json();    
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
            onChange={(event: React.FormEvent<HTMLInputElement>) => setName(event.currentTarget.value)}
            placeholder="Name"
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          <label htmlFor="email">Phone:</label>
          <input
            id="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows={4}
            onChange={e => setMessage(e.target.value)}
            placeholder="Message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )

};

export default Contact;