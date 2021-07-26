import { useState } from 'react';
import Head from 'next/head';
import got from 'got';
import { startCase } from 'lodash/fp';

import styles from '../styles/contact.module.css';

const formFields = [
  { type: 'text', name: "name" },
  { type: 'email', name: "email" },
  { type: 'tel', name: "phone" },
];

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
          {formFields.map(({ type, name }) => {
            return (
              <>
                <label htmlFor={name}>{startCase(name)}:</label>
                <input 
                  id={name} 
                  type={type} 
                  placeholder={startCase(name)} 
                  onChange={(event: React.FormEvent<HTMLInputElement>) => setName(event.currentTarget.value)} 
                />
              </>
            );
          })}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            rows={4}
            onChange={( event: React.ChangeEvent<HTMLTextAreaElement>): void => setMessage(event.target.value)}
            placeholder="Message"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )

};

export default Contact;