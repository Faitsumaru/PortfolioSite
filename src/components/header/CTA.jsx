import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => { //header buttons
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default CTA