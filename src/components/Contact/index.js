import React, { useState } from 'react';

const ContactForm = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  // This () will sync the internal state of the component formState with the user input from the DOM
  const handleChange = (e) => {
    // spread operator used so we can retain the other key-value pairs in this object.
    // w/o the spread operator, the formState object would be overwritten to only contain the name: value key pair.
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  //JSX
  return (
    <section>
      <h1>Contact me</h1>
      <form id='contact-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' defaultValue={name} onChange={handleChange} name='name' />
        </div>
        <div>
          <label htmlFor='email'>Email address</label>
          <input type='email' defaultValue={email} onChange={handleChange} name='email' />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' defaultValue={message} onChange={handleChange} rows='5' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
