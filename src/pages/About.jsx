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
          Hello there! I'm David, a passionate web designer with a keen eye for detail and a love for crafting unique digital experiences. 
          I'm dedicated to delivering top-notch results that exceed expectations and leave a lasting impression.
        </p>
      </div>
    </div>
  )
}

export default About

