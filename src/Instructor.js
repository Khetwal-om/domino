import React from 'react'
import './Instructor.css'

function Instructor({ name, imageOne, tutorialNumbers }) {
  return (
    <div className="container">
      <article>
        <h1>{name}</h1>
        <img src={imageOne} alt="" />

        <p>{tutorialNumbers}</p>
      </article>
    </div>
  )
}

export default Instructor
