import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {FaTelegramPlane} from 'react-icons/fa'
import {SiDiscord} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/Faitsumaru" target="_blank"><FaGithub/></a>
        <a href="https://t.me/faitsumaru" target="_blank"><FaTelegramPlane/></a>
        <a href="https://discordapp.com/users/306454393426018304" target="_blank"><SiDiscord/></a>
    </div>
  )
}

export default HeaderSocials