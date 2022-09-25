import React from 'react'
import './services.scss'

import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5 className='lng-services__myoffer'>What I Offer</h5>
      <h2 className='lng-services__services-list'>Services</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3 className='lng-services__NET-dev'>.NET Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__NET-dev-1'>Design, build, and maintain efficient, reusable, and reliable C# & C++ code.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__NET-dev-2'>Ensure the best possible performance, quality, responsiveness and automatization of applications.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__NET-dev-3'>Proficient understanding of version control system - Git.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__NET-dev-4'>Familiarity with Microsoft SQL Server & MySQL.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__NET-dev-5'>Skill for using and applying some number of C# & C++ libraries.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__NET-dev-6'>Implement, test, and bug-fix functionality.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3 className='lng-services__web-dev'>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__web-dev-1'>Write well designed, testable, efficient code by using best software development practices.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__web-dev-2'>Creating full responsive website layout/user interface by using standard HTML/CSS practices (including SCSS, SASS & LESS).</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__web-dev-3'>Using a numerous number of JavaScript libraries and frameworks to diversify content.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__web-dev-4'>Responsibility for maintaining, expanding and scaling the site being created.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__web-dev-5'>Creating and maintaining software documentation.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__web-dev-6'>Cooperate with web designers to match visual design intent.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__web-dev-7'>Staying plugged into emerging technologies/industry trends and applying them into operations and activities.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__web-dev-8'>Working with web design layouts using Figma, Photoshop & Sketch apps.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__web-dev-9'>Without any problems analysing, translating and using information on English language.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3 className='lng-services__modelling'>2D/3D Modelling</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__modelling-1'>Making some basic 2D/3D projects using such programs, like: 3dsMax, Blender, AutoCAD, etc...</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__modelling-2'>Creating detailed 3D models and drawings from environments to character models, buildings, vehicles and props.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p className='lng-services__modelling-3'>Utilise a combination of traditional and technologic approaches to 2D/3D design.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services