import { useState } from 'react';
import reactLogo from './assets/svg/react.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0);
  const [displaySidebar, setDisplaySidebar] = useState(false);
  // const { auth } = useSelector(state => state.usuarios);
  const dispatch = useDispatch();
  return (<>
    <Router>
      <Switch>
        <Route exact path="/" element={<Home />}/>
        <Route path="/login" element={<Login/>}/>
      </Switch>
    </Router>
  </>
  )
}
export default App

