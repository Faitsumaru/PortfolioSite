import React from 'react' //shortcut: 'rafce'
import './experience.scss'

import { BsPatchCheckFill } from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5 className='lng-experience__myskills'>What Skills I Have</h5>
      <h2 className='lng-experience__myexp'>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">
          <h3 className='lng-experience__frontend'>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light lng-experience__experienced'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>CSS/SCSS/SASS</h4>
                <small className='text-light lng-experience__experienced'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light lng-experience__intermediate'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>jQuery</h4>
                <small className='text-light lng-experience__intermediate'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light lng-experience__intermediate'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>Vue.js</h4>
                <small className='text-light lng-experience__intermediate'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light lng-experience__intermediate'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>WordPress</h4>
                <small className='text-light lng-experience__basic'>Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>Gulp</h4>
                <small className='text-light lng-experience__intermediate'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>npm</h4>
                <small className='text-light lng-experience__basic'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3 className='lng-experience__backend'>Backend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>C++</h4>
                <small className='text-light lng-experience__intermediate'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light lng-experience__experienced'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light lng-experience__basic'>Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>MySQL</h4>
                <small className='text-light lng-experience__intermediate'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light lng-experience__basic'>Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>Node.js</h4>
                <small className='text-light lng-experience__basic'>Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light lng-experience__basic'>Basic</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill class='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light lng-experience__basic'>Basic</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default experience