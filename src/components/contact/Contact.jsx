import React from 'react'
import './contact.scss'

import {MdEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'

/*----==EMAILJS FORM==----*/
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  
  /*----==EMAILJS FORM==----*/
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm('service_ew9s4ce', 'template_jc1xo43', form.current, 'KJjcxmDmLgwVKz25O')
    .then((result) => {
      alert("✔ Successful Sending! ✔");
    }, (error) => {
      alert("⚠️ Invalid! ⚠️");
    });

    e.target.reset()
  };
  
  /*----==( )==----*/

  return (
    <section id='contact'>
      <h5 className='lng-contact__getintouch'>Get In Touch</h5>
      <h2 className='lng-contact__contactme'>Contact Me</h2>

      <div className="container contact__container">

        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kiryakov.g.m@gmail.com</h5>
            <a href="mailto:kiryakov.g.m@gmail.com" className='lng-contact__sendmessage' target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>faitsumaru</h5>
            <a href="https://t.me/faitsumaru" className='lng-contact__sendmessage' target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+7(903)214-69-81</h5>
            <a href="https://api.whatsapp.com/send?phone=+79032146981" className='lng-contact__sendmessage' target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary lng-contact__send'>Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact