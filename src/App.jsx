import { useState, useLayoutEffect } from 'react';
import reactLogo from './assets/svg/react.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { SideBarComp } from "./components/SideBar";
import { Children } from "./components/SideBar/SideBar.Style";
import { setDataFromLocalSave } from './redux/reducers/userSlice';
import RequireAuth from './components/RequireAuth/RequireAuth';
import RequireNoAuth from './components/RequireNoAuth/RequireNoAuth';
import Signup from './pages/Signup';
import MainMenu from './pages/MainMenu';
import SecondMenu from './pages/SecondMenu';
import RegisterEmprendimiento from './pages/RegisterEmprendimiento';
import MbCanvas from './pages/MbCanvas';
import MisEmprendimientos from './pages/MisEmprendimientos';
import EmprendUpdate from './components/Crud/CrudEmprend/EmprendUpdate';
import EmprendList from './components/Crud/CrudEmprend/EmprendList';
import LogOut from './components/LogOut';
function App() {
  
  // const [auth, setAuth] = useState(false);
  const { auth } = useSelector(state => state.usuarios);
  const [count, setCount] = useState(0);
  const [displaySidebar, setDisplaySidebar] = useState(false);
  // const { auth } = useSelector(state => state.usuarios);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    // console.log("ingreso a useLayoutEffect on App.js")
    
    if (localStorage.getItem('auth')) {
      
      console.log("auth detected")
      dispatch(setDataFromLocalSave());
    }
  }, [auth]);

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
            <Route path="/signup" element={<RequireNoAuth><Signup /></RequireNoAuth>} />
            <Route path="/welcome" element={<RequireAuth><MainMenu /></RequireAuth>} />
            <Route path="/emprendimiento/:empr_id" element={<SecondMenu></SecondMenu>}></Route>

            <Route path="/nuevoemprendimiento" element={<RegisterEmprendimiento></RegisterEmprendimiento>}></Route>
            <Route path="/emprendimiento/:empr_id/update" element={<EmprendUpdate></EmprendUpdate>}></Route>
            <Route path="/emprendimiento/:empr_id/bmc" element={<MbCanvas></MbCanvas>}></Route>
            <Route path="/logout" element={<LogOut></LogOut>} />
            <Route exact path="/misemprendimientos" element={<MisEmprendimientos></MisEmprendimientos>} />
            {/* <Route exact path="/emprendimiento/:empr_id/cronograma" element={<Cronograma></Cronograma>} /> */}
            <Route exact path="/misemprendimientos/:user_id" element={<EmprendList></EmprendList>} />
            {/* <Route exact path="/misemprendimientos/fill/:empr_id/:modu_nume/:bmc_type" element={<ModelCanvasPreguntas></ModelCanvasPreguntas>} /> */}
            <Route path="*"
              element={<main style={{ padding: "1rem" }}><p>No hay nada aquí!</p></main>} />
          </Switch>
        </Children>
      </div>
      <Footer></Footer>
    </Router>

  </>
  )
}
export default App

