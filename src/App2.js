// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
// import { Form, Table, Button, Alert, Navbar, Nav } from 'react-bootstrap'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useRouteMatch,
//   useHistory,
// } from "react-router-dom"

// const Home = () => (
//   <div> 
//     <h2>TKTL notes app</h2> 
//     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
//   </div>
// )

// const Note = ({ note }) => {
//   console.log(note)
//   return (
//     <div>
//       <h2>{note.content}</h2>
//       <div>{note.user}</div>
//       <div><strong>{note.important ? 'tärkeä' : ''}</strong></div>
//     </div>
//   )
// }

// //React Bootstrap Notes
// const Notes = (props) => {
//   console.log(props);
//   return(
//   <div>
//     <h2>Notes</h2>
//     <Table striped>
//      <tbody>
//       {props.notes.map(note =>
//         <tr key={note.id}>
//           <td>
//             <Link to={`/notes/${note.id}`}>{note.content}</Link>
//         </td>
//         <td>
//           {note.user}
//         </td>
//       </tr>
//       )}
//     </tbody>
//     </Table>
//   </div>
// )
// }


// const Users = () => (
//   <div>
//     <h2>TKTL notes app</h2>
//     <ul>
//       <li>Matti Luukkainen</li>
//       <li>Juha Tauriainen</li>
//       <li>Arto Hellas</li>
//     </ul>
//   </div>
// )

// const Login = (props) => {
//   const history = useHistory()

//   const onSubmit = (event) => {
//     event.preventDefault()
//     props.onLogin('mluukkai')
//     history.push('/')
//   }

//   return (
//     <div>
//       <h2>login</h2>
//       <Form onSubmit={onSubmit}>
//         <Form.Group>
//           <Form.Label>
//             username:
//           </Form.Label>
//           <Form.Control
//           type="text"
//           name="username" 
//           />
//           <Form.Label>password:</Form.Label>
//           <Form.Control
//           type="password"
//           />
//           <Button variant="primary" type="submit">login</Button>
//       </Form.Group>
//       </Form>
//     </div>
//   )
// }


// const App = () => {
//   const [notes, setNotes] = useState([
//     {
//       id: 1,
//       content: 'HTML is easy',
//       important: true,
//       user: 'Matti Luukkainen'
//     },
//     {
//       id: 2,
//       content: 'Browser can execute only Javascript',
//       important: false,
//       user: 'Matti Luukkainen'
//     },
//     {
//       id: 3,
//       content: 'Most important methods of HTTP-protocol are GET and POST',
//       important: true,
//       user: 'Arto Hellas'
//     }
//   ])

//   const [user, setUser] = useState(null) 
//   const [message, setMessage] = useState(null)

//   const login = (user) => {
//     setUser(user)
//     setMessage(`welcome ${user}`)
//     setTimeout(() => {
//       setMessage(null)
//     }, 10000)

//   }

//   const padding = {
//     padding: 5
//   };

//   const match = useRouteMatch('/notes/:id')
//   const note1 = match 
//     ? notes.find(note => note.id === Number(match.params.id))
//     : null


    
    
//   return (
//       <div className="container">

//         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//         <Nav className="mr-auto">
//         <Nav.Link href="#" as="span">
//         <Link style={padding} to="/">home</Link>
//         </Nav.Link>
//         <Nav.Link href="#" as="span">
//         <Link style={padding} to="/notes">notes</Link>
//         </Nav.Link>
//         <Nav.Link href="#" as="span">
//         <Link style={padding} to="/users">users</Link>
//         </Nav.Link>
//         <Nav.Link href="#" as="span">
//         {user
//           ? <em>{user} logged in</em>
//           : <Link to="/login">login</Link>
//         }
//         </Nav.Link>
//         </Nav>
//         </Navbar.Collapse>
//         </Navbar>
//         {(message &&
//           <Alert variant="success">
//             {message}
//           </Alert>
//         )}
//         <div>
//         <Link style={padding} to="/">home</Link>
//         <Link style={padding} to="/notes">notes</Link>
//         <Link style={padding} to="/users">users</Link>
//         {user
//           ? <em>{user} logged in</em>
//           : <Link style={padding} to="/login">login</Link>
//         }
//         </div>

//         <Switch>
//         <Route path="/notes/:id">
//           <Note note={note1} />
//         </Route>
//         <Route path="/notes">
//           <Notes notes={notes} />
//         </Route>
//         <Route path="/users">
//           {user ? <Users /> : <Redirect to="/login" />}
//         </Route>
//         <Route path="/login">
//           <Login onLogin={login} />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//         </Switch>
//         <div>
//         <br />
//         <em>Note app, Department of Computer Science 2020</em>
//         </div>
//         </div>
    
//   )
// }

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// )


//2.Material UI
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useRouteMatch,
//   useHistory,
// } from "react-router-dom"

// import {
//   Container,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Paper,
//   TextField,
//   Button,
//   Toolbar,
//   AppBar
// } from '@material-ui/core'

// import { Alert } from '@material-ui/lab'

// const Home = () => (
//   <div> 
//     <h2>TKTL notes app</h2> 
//     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
//   </div>
// )

// const Note = ({ note }) => {
//   return (
//     <div>
//       <h2>{note.content}</h2>
//       <div>{note.user}</div>
//       <div><strong>{note.important ? 'tärkeä' : ''}</strong></div>
//     </div>
//   )
// }

// const Notes = ({notes}) => (
//   <div>
//     <h2>Notes</h2>

//     <TableContainer component={Paper}>
//       <Table>
//         <TableBody>
//           {notes.map(note => (
//             <TableRow key={note.id}>
//               <TableCell>
//                 <Link to={`/notes/${note.id}`}>{note.content}</Link>
//               </TableCell>
//               <TableCell>
//                 {note.user}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

//   </div>
// )

// const Users = () => (
//   <div>
//     <h2>TKTL notes app</h2>
//     <ul>
//       <li>Matti Luukkainen</li>
//       <li>Juha Tauriainen</li>
//       <li>Arto Hellas</li>
//     </ul>
//   </div>
// )

// const Login = (props) => {
//   const history = useHistory()

//   const onSubmit = (event) => {
//     event.preventDefault()
//     props.onLogin('mluukkai')
//     history.push('/')
//   }

//   return (
//     <div>
//       <h2>login</h2>
//       <form onSubmit={onSubmit}>
//         <div>
//           <TextField label="username" />
//         </div>
//         <div>
//           <TextField  label="password" type='password' />
//         </div>
//         <div>
//           <Button variant="contained" color="primary" type="submit">
//             login
//           </Button>
//         </div>
//       </form>
//     </div>
//   )
// }

// const App = () => {
//   const [notes, setNotes] = useState([
//     {
//       id: 1,
//       content: 'HTML is easy',
//       important: true,
//       user: 'Matti Luukkainen'
//     },
//     {
//       id: 2,
//       content: 'Browser can execute only Javascript',
//       important: false,
//       user: 'Matti Luukkainen'
//     },
//     {
//       id: 3,
//       content: 'Most important methods of HTTP-protocol are GET and POST',
//       important: true,
//       user: 'Arto Hellas'
//     }
//   ])

//   const [user, setUser] = useState(null) 

//   const [message, setMessage] = useState(null) 

//   const login = (user) => {
//     setUser(user)
//     setMessage(`welcome ${user}`)
//     setTimeout(() => {
//       setMessage(null)
//     }, 10000*4)
//   }

//   const padding = {
//     padding: 5
//   }

//   const match = useRouteMatch('/notes/:id')
//   const note = match 
//     ? notes.find(note => note.id === Number(match.params.id))
//     : null

//   return (
//     <Container>
//       <AppBar position="static">
//         <Toolbar>
//           <Button color="inherit" component={Link} to="/">
//             home
//           </Button>
//           <Button color="inherit" component={Link} to="/notes">
//             notes
//           </Button>
//           <Button color="inherit" component={Link} to="/users">
//             users
//           </Button>   
//           {user
//             ? <em>{user} logged in</em>
//             : <Button color="inherit" component={Link} to="/login">
//                 LINK
//               </Button>
//           }                              
//         </Toolbar>
//       </AppBar>

//       {(message &&
//         <Alert severity="success">
//           {message}
//         </Alert>
//       )}

//       <Switch>
//         <Route path="/notes/:id">
//           <Note note={note} />
//         </Route>
//         <Route path="/notes">
//           <Notes notes={notes} />
//         </Route>
//         <Route path="/users">
//           {user ? <Users /> : <Redirect to="/login" />}
//         </Route>
//         <Route path="/login">
//           <Login onLogin={login} />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//       <div>
//         <br />
//         <em>Note app, Department of Computer Science 2020</em>
//       </div>
//     </Container>
//   )
// }

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// )

//3.styled component
// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useRouteMatch,
//   useHistory,
// } from "react-router-dom"

// import {
//   Container,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Paper,
//   TextField,
//   Toolbar,
//   AppBar
// } from '@material-ui/core'
// import { Alert } from '@material-ui/lab'
// import styled from 'styled-components'

// //styled-component
// const Button = styled.button`
//   background: Bisque;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid Chocolate;
//   border-radius: 3px;
// `
// const Page = styled.div`
//   padding: 1em;
//   background: papayawhip;
// `

// const Navigation = styled.div`
//   background: BurlyWood;
//   padding: 1em;
// `

// const Footer = styled.div`
//   background: Chocolate;
//   padding: 1em;
//   margin-top: 1em;
// `

// const Input = styled.input`
//   margin: 0.25em;
// `

// const Home = () => (
//   <div> 
//     <h2>TKTL notes app</h2> 
//     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> 
//   </div>
// )

// const Note = ({ note }) => {
//   return (
//     <div>
//       <h2>{note.content}</h2>
//       <div>{note.user}</div>
//       <div><strong>{note.important ? 'tärkeä' : ''}</strong></div>
//     </div>
//   )
// }

// const Notes = ({notes}) => (
//   <div>
//     <h2>Notes</h2>

//     <TableContainer component={Paper}>
//       <Table>
//         <TableBody>
//           {notes.map(note => (
//             <TableRow key={note.id}>
//               <TableCell>
//                 <Link to={`/notes/${note.id}`}>{note.content}</Link>
//               </TableCell>
//               <TableCell>
//                 {note.user}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>

//   </div>
// )

// const Users = () => (
//   <div>
//     <h2>TKTL notes app</h2>
//     <ul>
//       <li>Matti Luukkainen</li>
//       <li>Juha Tauriainen</li>
//       <li>Arto Hellas</li>
//     </ul>
//   </div>
// )

// const Login = (props) => {
//   const history = useHistory()

//   const onSubmit = (event) => {
//     event.preventDefault()
//     props.onLogin('mluukkai')
//     history.push('/')
//   }

//   return (
//     <div>
//       <h2>login</h2>
//       <form onSubmit={onSubmit}>
//         <div>
//           username:
//           <Input />
//         </div>
//         <div>
//           password:
//           <Input type='password' />
//         </div>
//         <Button type="submit" primary=''>login</Button>
//       </form>
//     </div>
//   )
// }

// const App = () => {
//   const [notes, setNotes] = useState([
//     {
//       id: 1,
//       content: 'HTML is easy',
//       important: true,
//       user: 'Matti Luukkainen'
//     },
//     {
//       id: 2,
//       content: 'Browser can execute only Javascript',
//       important: false,
//       user: 'Matti Luukkainen'
//     },
//     {
//       id: 3,
//       content: 'Most important methods of HTTP-protocol are GET and POST',
//       important: true,
//       user: 'Arto Hellas'
//     }
//   ])

//   const [user, setUser] = useState(null) 

//   const [message, setMessage] = useState(null) 

//   const login = (user) => {
//     setUser(user)
//     setMessage(`welcome ${user}`)
//     setTimeout(() => {
//       setMessage(null)
//     }, 10000*4)
//   }

//   const padding = {
//     padding: 5
//   }

//   const match = useRouteMatch('/notes/:id')
//   const note = match 
//     ? notes.find(note => note.id === Number(match.params.id))
//     : null

//   return (
//     <Page>
//       <Navigation>
//         <Link style={padding} to="/">home</Link>
//         <Link style={padding} to="/notes">notes</Link>
//         <Link style={padding} to="/users">users</Link>
//         {user
//           ? <em>{user} logged in</em>
//           : <Link style={padding} to="/login">login</Link>
//         }
//       </Navigation>

//       <Switch>
//         <Route path="/notes/:id">
//           <Note note={note} />
//         </Route>
//         <Route path="/notes">
//           <Notes notes={notes} />
//         </Route>
//         <Route path="/users">
//           {user ? <Users /> : <Redirect to="/login" />}
//         </Route>
//         <Route path="/login">
//           <Login onLogin={login} />
//         </Route>
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
      
//       <Footer>
//         <em>Note app, Department of Computer Science 2020</em>
//       </Footer>
//     </Page>
//   )
// }

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById('root')
// )





import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

    //Here we are using destructuring and setting properties using different hooks
    const [anecdotes, setAnecdotes] = useState([])
    const [current, setCurrent] = useState(0)
  
    useEffect(() =>{
      axios.get('http://localhost:3001/anecdotes').then(response => {
        setAnecdotes(response.data)
      })
    },[])
  
    const handleClick = () => {
      setCurrent(Math.round(Math.random() * (anecdotes.length - 1)))
    }
  
    if (anecdotes.length === 0) {
      return <div>no anecdotes...</div>
    }
  
    return (
      <div>
        <h1>anecdote of the day</h1>
        <div>{anecdotes[current].content}</div>
        <button onClick={handleClick}>next</button>
      </div>
    )
  }

  export default App