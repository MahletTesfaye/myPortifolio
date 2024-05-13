import Particle from './particles';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zsmyet9', 'template_fqgb9vl', form.current, {
        publicKey: 'jEj3t-WXbGs652Taf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div className='py-5 relative bg-gradient-to-r from-red-100 to-violet-100 rounded-lg shadow-2xl'>
      <Particle className="absolute !important" />
      <div className="container sm:mx-auto w-full sm:w-[450px] border rounded-xl p-5 bg-[var(--primary-dark)]">
        <h1 className="text-xl font-bold mb-4 text-white">Contact me</h1>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div className='sm:flex'>
            <label htmlFor="name" className="block sm:mx-2 font-semibold text-white">Name: </label>
            <input type="text" name='from_name' id="name" className="w-full border border-gray-300 rounded px-3 py-1" />
          </div>
          <div className='sm:flex'>
            <label htmlFor="email" className="block mr-2 font-semibold text-white"> Email: </label>
            <input type="email" name='to_email' id="email" className="w-full border border-gray-300 rounded px-3 py-1" />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-semibold text-white">Message: </label>
            <textarea id="message" name='message' className="w-full border border-gray-300 rounded px-3 py-1" rows="5"></textarea>
          </div>
          <div className="text-end">
            <button type="submit" className="button3">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactme
