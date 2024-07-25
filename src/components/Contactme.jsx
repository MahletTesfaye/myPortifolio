import Particle from './particles';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEmail } from "react-icons/md";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { Icon } from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';
import { FaFacebook } from 'react-icons/fa6';

const Contactme = () => {
  const form = useRef();
  const notify = (message) => toast(message);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zsmyet9', 'template_fqgb9vl', form.current, {
        publicKey: 'jEj3t-WXbGs652Taf',
      })
      .then(
        () => {
          notify('Message sent successfully!');
        },
        (error) => {
          notify('Failed to send message!');
        },
      );
    e.target.reset();
  };
  const customIcon = new Icon({
    iconUrl: markerIcon,
    shadowUrl: markerIconShadow,
    iconSize: [20, 34],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });

  return (
    <div className='p-[5%_3%] overflow-hidden relative bg-gradient-to-tr grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10 md:justify-between from-violet-200 to-red-100 rounded-t-3xl shadow-2xl '>

      <div className="flex flex-col gap-y-7 text-center my-auto">
        <div className="text-xl font-bold text-[var(--primary-dark)]">LET'S START <span className='text-[var(--primary-medium)]'>PROJECT WITH ME </span>👩🏻‍💻</div>
        <div className="grid gap-2 text-center px-10">
          <div className="button3 py-4 -skew-x-12">UI/UX DESIGN</div>
          <div className="button4 py-4 skew-x-12">FRONTEND DEVELOPMENT</div>
        </div>
        <div className="flex justify-around w-full">
          <a href="https://mail.google.com/mail/u/0/?ogbl#inbox" target="_blank" rel="noreferrer"><MdEmail size={25} color='red' title='Email' /></a>
          <a href="https://github.com/MahletTesfaye" target="_blank" rel="noreferrer"><VscGithubInverted size={25} title='Github' /></a>
          <a href="https://www.linkedin.com/in/mahit94" target="_blank" rel="noreferrer"><FaLinkedin size={25} color='blue' title='Linkedin' /></a>
          <a href="https://www.facebook.com/profile.php?id=100094416396778" target="_blank" rel="noreferrer"><FaFacebook size={25} color='blue' title='Facebook' /></a>
          <a href="tel:+251984031038" target="_blank" rel="noreferrer"><BsTelephone size={25} title='Phone' /></a>
        </div>
      </div>

      <div className="container text-[var(--primary-dark)]">
        <Particle className="absolute !important" />
        <h1 className="font-bold mb-2">CONTACT ME</h1>
        <form ref={form} onSubmit={sendEmail} className='space-y-2'>
          <input type="text" name='from_name' id="name" className="w-full shadow-md rounded-lg px-2 py-1 focus:border focus:outline-none" placeholder='Name' required />
          <input type="email" name='from_email' id="email" className="w-full shadow-md rounded-lg px-2 py-1 focus:border focus:outline-none" placeholder='Email' required />
          <textarea id="message" name='message' className="w-full shadow-md rounded-lg px-2 py-2 focus:border focus:outline-none" placeholder='Your message' rows="3" required></textarea>
          <div className="text-center">
            <button type="submit" className="button3">
              Send Message
            </button>
          </div>
          <ToastContainer />
        </form>
      </div>

      <div className="w-auto  h-56 sm:col-span-2 lg:col-span-1">
        <p className="mb-2 text-center"><b>ADDRESS</b>: 5kilo, Addis Ababa, Ethiopia</p>
        {
          <MapContainer
            center={[9.0407, 38.7616]}
            zoom={14}
            scrollWheelZoom={true}
            className='rounded-2xl shadow-xl z-0 w-full h-full'>
            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[9.0407, 38.7616]} icon={customIcon} >
              <Popup>
                Here I'm 👋
              </Popup>
            </Marker>
          </MapContainer>
        }
      </div>
    </div >
  );
};

export default Contactme
