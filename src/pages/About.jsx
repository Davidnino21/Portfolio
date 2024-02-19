import React from 'react'

function About() {
  return (
    <div id='about'>
      <div>
        <video autoPlay muted loop>
          <source src='/aboutVideo.mp4' type='video/mp4' />
        </video>
      </div>
      <div>
        <img src="/aboutpic1.png" alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto facilis in nam tempore quam quae eaque
          sit nisi consequatur totam magnam omnis, quod, asperiores ab non atque perspiciatis dicta voluptas.
        </p>
      </div>
    </div>
  )
}

export default About