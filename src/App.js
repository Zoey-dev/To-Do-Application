import React from 'react';
// import Category from './Components/CategoryComponent/category'
import Login from './Pages/LoginPage/login'
import Signup from './Pages/SignUpPage/signup'
import ForgotPassword from './Pages/ForgotPasswordPage/forgotPassword'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import { AuthContext } from './Contexts/AuthContexts'



function App() {

  // const data = [
  //   {
  //     tag: "Personal",
  //     totalTask: 1,
  //     completedTask: 0,
  //     color: "blue"
  //   }
  // ]

  return (
    // <div>
    //   {
    //     data.map(x => <Category data = {x} />)
    //   }
    // </div>

  <BrowserRouter>
    <AuthContext.Consumer >
    <Route exact path = "/signup" > <Signup /> </Route >
    <Route exact path = "/login" > <Login /> </Route >
    <Route exact path = "/forgotPassword" > <ForgotPassword /> </Route >
    </AuthContext.Consumer>
  </BrowserRouter>


   
  );
}

export default App;
