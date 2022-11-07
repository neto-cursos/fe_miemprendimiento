import { useState, useLayoutEffect } from 'react';
import reactLogo from './assets/svg/react.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { SideBarComp} from "./components/SideBar";
import {Children} from "./components/SideBar/SideBar.Style";
import { setDataFromLocalSave } from './redux/reducers/userSlice';
import RequireAuth from './components/RequireAuth/RequireAuth';
import RequireNoAuth from './components/RequireNoAuth/RequireNoAuth';

function App() {
  
  // const [auth, setAuth] = useState(false);
  const { auth } = useSelector(state => state.usuarios);
  const [count, setCount] = useState(0);
  const [displaySidebar, setDisplaySidebar] = useState(false);
  // const { auth } = useSelector(state => state.usuarios);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    if (localStorage.getItem('auth'))
    dispatch(setDataFromLocalSave());
  }, [auth, dispatch]);

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
            <Route path="/login" element={<RequireNoAuth><Login /></RequireNoAuth>} />
            <Route path="*" 
            element={<main style={{ padding: "1rem" }}><p>No hay nada aquí!</p></main>}/>
          </Switch>
        </Children>
      </div>
      <Footer></Footer>
    </Router>

  </>
  )
}
export default App

