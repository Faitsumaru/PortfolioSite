import React from 'react'
import './header.scss'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">

        <select className="change-lang">
          <option value="ua" selected>EN</option>
          <option value="ru">RU</option>
        </select>

        <h5 className='lng-header__hello'>Hello, I'm</h5>
        <h1 className='lng-header__name'>Kiryakov Gleb</h1>
        <h5 className="text-light lng-header__job">Web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down lng-header__scroll-down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header