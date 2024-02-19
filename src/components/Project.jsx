import React from 'react'

function Project({img, title, gitHub, live}) {
  return (
    <div className='project'>
      <h4>{title}</h4>
      <img src={img} alt="" />
      <div>
      <a href={gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={live} target="_blank" rel="noopener noreferrer">Live</a>
      </div>
    </div>
  )
}

export default Project