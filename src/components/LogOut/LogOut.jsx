import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import { isLoggedIn, logOut } from './../../utils/UtilsAuth';
import { logOutSession } from './../../redux/actions/userActions';
import { getauth, logout, updateAuth, updateLoading } from './../../redux/reducers/userSlice';
//import { useAuth } from "../hooks/Auth";

//({children})
const LogOut = ({ children }) => {
  const navigate = useNavigate();
  //let { user } = isLoggedIn();
  const { loading } = useSelector(state => state.usuarios);
  //const usuarios = useSelector(state => state.usuarios);
  const auth = useSelector(getauth);
  const dispatch = useDispatch();
  const location = useLocation();
  const [isLogOut, setIsLogOut] = useState(false);
  // const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (auth === true) {
      dispatch(logOutSession());
      localStorage.clear();
      logOut();
      //window.location.reload();
      //navigate(`/login`);
    }
    return setIsLogOut(true)
  }, []);


  return isLogOut && <Navigate to="/login" state={{ from: location }} replace />;
  //return !auth && isAuth && <Navigate to="/login" state={{ from: location }} replace />;
  //return <></>
}

export default LogOut;