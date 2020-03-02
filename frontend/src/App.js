import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MyDay } from './components/MyDay'
// import { MyDay2 } from './components/MyDay2'
import './App.css';

export const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <MyDay />
      </Route>
      {/* <Route path="/photos/:photoId"> */}
        {/* <MyDay2 /> */}
      {/* </Route> */}
    </Switch>
    </BrowserRouter>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1> Let's create MyPage! </h1>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
