import React from 'react'
import './footer.scss'

import {IoLogoTwitter} from 'react-icons/io'
import {FiInstagram} from 'react-icons/fi'
import { Icon32LogoVk } from '@vkontakte/icons';

const Footer = () => {
  return (
    <footer className='footer'>
      <a href="#" className='footer__logo lng-footer__name'>Gleb</a>

      <ul className="permalinks">
        <li><a href="#" className='lng-footer__home'>Home</a></li>
        <li><a href="#about" className='lng-footer__about'>About</a></li>
        <li><a href="#experience" className='lng-footer__experience'>Experience</a></li>
        <li><a href="#services" className='lng-footer__services'>Services</a></li>
        <li><a href="#portfolio" className='lng-footer__portfolio'>Portfolio</a></li>
        <li><a href="#testimonials" className='lng-footer__testimonials'>Testimonials</a></li>
        <li><a href="#contact" className='lng-footer__contact'>Contact</a></li>
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
        <small className='lng-footer__copy'>&copy; Kiryakov Gleb. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer