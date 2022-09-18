import React from 'react'
import './about.scss'

import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {BiArea} from 'react-icons/bi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
          <div className="about__me">

            <div className="about__me-image">
              <img src={ME} alt="about image" />
            </div>

          </div>

          <div className="about__content">

            <div className="about__cards">
              <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>15 + Completed</small>
              </article>

              <article className="about__card">
                <BiArea className='about__icon'/>
                <h5>Range</h5>
                <small>7 + Programming Languages</small>
              </article>

              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2 + Years Learning</small>
              </article>
            </div>

            <div className="about__text">
              <p>
                Purposeful, hardworking, honest, responsible, as well as a positive person, always completing the job right into the end.
              </p>
              <p>
                I am ready to improve myself, develop and learn new information, develop relevant, promising, reliable and convenient services, as well as products for life.
              </p>
              <p>
                <strong>«Live and learn!»</strong>
              </p>
              <p>
                Lead a healthy lifestyle. Also have a driving license.
              </p>
            </div>
            
            <a href="#contact" className="btn btn-primary">Let's Talk</a>

          </div>
      </div>
    </section>
  )
}

export default About