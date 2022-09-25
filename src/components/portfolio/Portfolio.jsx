import React from 'react'
import './portfolio.scss'

import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Generative Artificial Intelligence Technology',
    github: 'https://github.com/Faitsumaru/generativeai',
    demo: 'https://faitsumaru.github.io/generativeai/generativeai.html'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Desire Furniture Site on GULP',
    github: 'https://github.com/Faitsumaru/FurnitureSite-Layout',
    demo: 'https://faitsumaru.github.io/FurnitureSite-Layout/app/index.html'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Mercedes-Benz VISION AVTR Site',
    github: 'https://github.com/Faitsumaru/MercedesAvatarSite-Layout',
    demo: 'https://faitsumaru.github.io/MercedesAvatarSite-Layout/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Auto Express Site on WordPress',
    github: 'https://github.com/Faitsumaru/AutoExpressSite_wp',
    demo: 'https://faitsumaru.github.io/AutoExpressSite-Layout/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Space Tourism Site',
    github: 'https://github.com/Faitsumaru/SpaceTourismSite-Layout',
    demo: 'https://faitsumaru.github.io/SpaceTourismSite-Layout/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Seafood From Norway Site',
    github: 'https://github.com/Faitsumaru/SeafoodSite-Layout',
    demo: 'https://faitsumaru.github.io/SeafoodSite-Layout/'
  }
]


const Portfolio = () => {
  return (

    <section id='portfolio'>
      <h5 className='lng-portfolio__recentwork'>My Recent Work</h5>
      <h2 className='lng-portfolio__portfolio-list'>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target='_blank'>GitHub</a>
                <a href={demo} className="btn btn-primary lng-portfolio__demo" target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }

      </div>
    </section>
  )
}


export default Portfolio