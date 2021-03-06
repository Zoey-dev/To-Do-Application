import React from 'react';
// import Category from './Components/CategoryComponent/category'
import Login from './Pages/LoginPage/login'
import Signup from './Pages/SignUpPage/signup'
import ForgotPassword from './Pages/ForgotPasswordPage/forgotPassword'
import { BrowserRouter, Router, Route } from 'react-router-dom'
import { AuthProvider } from './Contexts/AuthContexts'
import CreateCategory from './Pages/CreateCategoryPage/create_category';



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
      <AuthProvider>
    <Route exact path = "/signup" component = {() => <Signup />} />
    <Route exact path = "/login" component = {() => <Login />} />
    <Route exact path = "/forgotPassword" component = {() => <ForgotPassword />} />
    <Route exact path = "/create_category" component = {() => <CreateCategory />} />
    </AuthProvider>
  </BrowserRouter>


  );
}

export default App;
