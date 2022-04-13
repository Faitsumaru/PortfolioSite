import React from 'react'
import './services.scss'

import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">

        <article className="service">
          <div className="service__head">
            <h3>.NET Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design, build, and maintain efficient, reusable, and reliable C# & C++ code.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Translate application storyboards and use cases into functional applications.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient understanding of code versioning tool - Git.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Familiarity with Microsoft SQL Server & MySQL.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Skill for writing reusable C# & C++ libraries.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement, test, and bug-fix functionality.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Write well designed, testable, efficient code by using best software development practices.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating full responsive website layout/user interface by using standard HTML/CSS practices (including SCSS & SASS).</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using a numerous number of JavaScript libraries and frameworks to diversify content.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsible for maintaining, expanding, and scaling our site.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating and maintaining software documentation.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Cooperate with web designers to match visual design intent.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Stay plugged into emerging technologies/industry trends and apply them into operations and activities.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Working with web design layouts using Figma, Photoshop & Sketch apps.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p> Without any problems analysing, translating and using information on English language.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>2D/3D Modelling</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Making some basic 2D/3D projects using such programs, like: 3dsMax, Blender, AutoCAD, etc...</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating detailed 3D models and drawings from environments to character models, buildings, vehicles and props.</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Utilise a combination of traditional and technologic approaches to 2D/3D design.</p>
            </li>
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services