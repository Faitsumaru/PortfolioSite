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
                <h5 className='lng-about__projects'>Projects</h5>
                <small className='lng-about__completed'>15 + Completed</small>
              </article>

              <article className="about__card">
                <BiArea className='about__icon'/>
                <h5 className='lng-about__range'>Range</h5>
                <small className='lng-about__prog-languages'>7 + Programming Languages</small>
              </article>

              <article className="about__card">
                <FaAward className='about__icon'/>
                <h5 className='lng-about__experience'>Experience</h5>
                <small className='lng-about__years-learning'>2 + Years Learning</small>
              </article>
            </div>

            <div className="about__text">
              <p className='lng-about__text-1'>
                Purposeful, hardworking, honest, responsible, as well as a positive person, always completing the job right into the end.
              </p>
              <p className='lng-about__text-2'>
                I am ready to improve myself, develop and learn new information, develop relevant, promising, reliable and convenient services, as well as products for life.
              </p>
              <p className='lng-about__text-3'>
                <strong>«Live and learn!»</strong>
              </p>
              <p className='lng-about__text-4'>
                Lead a healthy lifestyle. Also have a driving license.
              </p>
            </div>
            
            <a href="#contact" className="btn btn-primary lng-lets-talk">Let's Talk</a>

          </div>
      </div>
    </section>
  )
}

export default About