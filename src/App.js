import React, { Component } from 'react'
import axios from 'axios'

import './styles.css'
import Instructors from './Instructors'
import Tutorial from './Tutorial'

const URL = `https://759f6d87-3637-459b-8c5d-ebe86f20d828.mock.pstmn.io/appier`
class App extends Component {
  state = {
    instructors: []
  }
  async componentDidMount() {
    const response = await axios.get(URL)
    console.log(response.data)

    this.setState({
      instructors: response.data
    })
  }

  render() {
    return (
      <div className="App">
        <Instructors instructors={this.state.instructors} />
        {this.state.instructors.map((instructor) =>
          instructor.tutorials.map((tutorial) => (
            <Tutorial
              instructor={instructor.name}
              key={tutorial.title}
              title={tutorial.title}
              flashcards={tutorial.flashcards}
            />
          ))
        )}
      </div>
    )
  }
}

export default App
