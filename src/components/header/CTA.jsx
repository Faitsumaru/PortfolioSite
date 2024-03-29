import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => { //header buttons
  return (
    <div className="cta">
        {/* <a href={'https://sweetcv.com/lx-aoil6v2l_b'} download target='_blank' className='btn'>Open CV</a> */}
        <a href={CV} target='_blank' className='btn lng-CTA__openCV'>Open CV</a>
        <a href="#contact" className='btn btn-primary lng-lets-talk'>Let's talk</a>
    </div>
  )
}

export default CTA