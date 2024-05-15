import Particle from './particles';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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
    <div className='px-[10%] py-[2%] relative bg-gradient-to-tr grid sm:grid-cols-2 md:grid-cols-3 gap-2 from-violet-200 to-red-100 rounded-t-3xl shadow-2xl'>
      <div className="md:flex gap-y-2 m-auto md:m-0 md:col-span-2 justify-between">
        <div className="my-auto">
          <div className="flex flex-col text-center">
            <div className="font-bold my-2 text-[var(--primary-dark)]">ADDRESS</div>
            <span>Addiss Ababa, Ethiopia</span>
            <span>AAiT, 5Kilo</span>
            <span>5kilo female dormitory</span>
          </div>
        </div>
        <div className="">
          {
            <MapContainer
              center={[9.0333, 38.7]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[9.0407, 38.7616]} >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          }
        </div>
      </div>
      <div className="container my-auto text-[var(--primary-dark)] md:col-span-1">
        <Particle className="absolute !important" />
        <h1 className="font-bold my-2">CONTACT ME</h1>
        <form ref={form} onSubmit={sendEmail} className='space-y-2'>
          <input type="text" name='from_name' id="name" className="w-full shadow-md rounded-lg px-2 py-1 focus:border focus:outline-none" placeholder='Name' />
          <input type="email" name='to_email' id="email" className="w-full shadow-md rounded-lg px-2 py-1 focus:border focus:outline-none" placeholder='Email' />
          <textarea id="message" name='message' className="w-full shadow-md rounded-lg px-2 py-2 focus:border focus:outline-none" placeholder='Your message' rows="3"></textarea>
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
