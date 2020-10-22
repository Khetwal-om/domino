import React from 'react'

import './Tutorial.css'

function Tutorial({ instructor, title, tutorialLink, video, flashcards }) {
  return (
    <div className="tutorial">
      <article>
        <h1>{title}</h1>

        <iframe
          src={`https://www.youtube.com/embed/${video}`}
          title="video player"
        />
        {flashcards.map((flashcard) => (
          <article className="flashcard">
            <h1 className="flashcard__question">{flashcard.question}</h1>
            <p className="flashcard__answer">{flashcard.meaningOne}</p>
          </article>
        ))}
      </article>
    </div>
  )
}

export default Tutorial
