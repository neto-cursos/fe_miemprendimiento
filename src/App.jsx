import { useState } from 'react';
import reactLogo from './assets/svg/react.svg';
import './App.css';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { SideBarComp} from "./components/SideBar";
import {Children} from "./components/SideBar/SideBar.Style";
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
        {auth && (<SideBarComp displaySidebar={displaySidebar} setDisplaySidebar={setDisplaySidebar}>
        </SideBarComp>)}
        <Children displaySidebar={displaySidebar} sidebar={auth ? true : false}>

          <Switch>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Switch>
        </Children>
      </div>
      <Footer></Footer>
    </Router>

  </>
  )
}
export default App

