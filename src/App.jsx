import { useState } from 'react';
import reactLogo from './assets/svg/react.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [auth, setAuth] = useState(false);
  const [count, setCount] = useState(0);
  const [displaySidebar, setDisplaySidebar] = useState(false);
  // const { auth } = useSelector(state => state.usuarios);
  const dispatch = useDispatch();
  return (<>

    <Router>
      {!auth ? <NavBar showLogin={false} auth={auth}></NavBar> :
        <NavBar showLogin={true} auth={auth}></NavBar>}
      <div id="main">
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Switch>
      </div>
      <Footer></Footer> 
    </Router>

  </>
  )
}
export default App

