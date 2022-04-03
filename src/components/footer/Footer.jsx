import React from 'react'
import './footer.scss'

import {IoLogoTwitter} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'
import { Icon32LogoVk } from '@vkontakte/icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <a href="#" className='footer__logo'>Gleb</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/" className="footer__socials-item" target='_blank'>
          <IoLogoTwitter/>
        </a>
        <a href="https://www.instagram.com/" className="footer__socials-item" target='_blank'>
          <FiInstagram/>
        </a>
        <a href="https://vk.com/" className="footer__socials-item" target='_blank'>
          <Icon32LogoVk width={16} height={16}/>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Kiryakov Gleb. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer