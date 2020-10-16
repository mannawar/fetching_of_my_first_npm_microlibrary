import React from 'react'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    //Here we are setting state as an object and using its property on later stage to do different operations
    this.state = {
      anecdotes: [],
      current: 0
    }
  }

  componentDidMount = () => {
    axios.get('http://localhost:3001/anecdotes').then(response => {
      this.setState({ anecdotes: response.data })
    })
  }

  handleClick = () => {
    const current = Math.floor(
      Math.random() * this.state.anecdotes.length
    )
    this.setState({ current })
  }
  
  render() {
    if(this.state.anecdotes.length === 0) {
      return <div>no anecdotes...</div>
    }
    return (
      <div>
        <h1>anecdote of the day</h1>
        <div>
          {this.state.anecdotes[this.state.current].content}
        </div>
        <button onClick={this.handleClick}>next</button>
      </div>
    )
  }
}
  
export default App


// import React from 'react'
// import ErrorBoundary from './components/ErrorBoundary'
// function ErrorFallback({error, componentStack, resetErrorBoundary}) {
//   return (
//     <div role="alert">
//       <p>Something went wrong:</p>
//       <pre>{error.message}</pre>
//       <pre>{componentStack}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   )
// }

// // class Bomb extends React.Component {
// //   render() {
// //     return (
// //       <h2>💥 KABOOM 💥</h2>
// //     )
// //   }
// // }

// function Bomb() {
//   throw new Error('💥 KABOOM 💥')
// }

// function App() {
//   const [explode, setExplode] = React.useState(false)
//   return (
//     <div>
//       <button onClick={() => setExplode(e => !e)}>toggle explode</button>
//       <ErrorBoundary
//         FallbackComponent={ErrorFallback}
//         onReset={() => setExplode(false)}
//         resetKeys={[explode]}
//       >
//         {explode ? <Bomb /> : null}
//       </ErrorBoundary>
//     </div>
//   )
// }

// export default App