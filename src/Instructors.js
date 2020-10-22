import React from 'react'
import Instructor from './Instructor'

import './Instructors.css'

function Instructors({ instructors }) {
  console.log(instructors)
  return (
    <div className="container">
      {instructors.map((instructor) => (
        <Instructor
          key={instructor.name}
          name={instructor.name}
          imageOne={instructor.imageOne}
          tutorialNumbers={instructor.tutorials.length}
        />
      ))}
    </div>
  )
}

export default Instructors
