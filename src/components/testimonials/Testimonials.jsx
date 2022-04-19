import React from 'react'
import './testimonials.scss'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

/*------====SWIPER====------*/
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
/*------====( )====------*/

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'Pretty nice works here, in your arsenal. Continue to try your best!'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Not bad, exactly. So, I have an idea! There is a guy needed for making some awesome site. It can be you, in other words.'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Good job, my friend. Isn\'t that a progress you wanted so far? Will be bright future for you, if you are going to continue these things.'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Not bad, exectly, but there is a numerous number of information you must learn. Therefore, it is going to be a difficult path. Everything is in your own hands!'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>

      <h5>Review from people</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Pagination]}
        spaceBetween={40}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials