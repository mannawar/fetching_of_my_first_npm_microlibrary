import React from 'react'
var names = require('starwars__names_by_mannawar')

console.log(names.all)
const randomNames = names.random()
console.log(randomNames)

class App extends React.Component {

  handleClick = () => {
    window.location.reload(false);
  }
  
  render() {

    return (
      <div>
        <h1>starwars random names</h1>
        <ul>
         <li>{randomNames}</li>
       
        </ul>
        <button onClick={this.handleClick}>Refresh</button>
      </div>
    )
  }
}
  
export default App


