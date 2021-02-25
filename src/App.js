import './App.css';
import ProgressBar from './Components/ProgressBar/progress'
import Signup from './Pages/SignUpPage/signup'
import Login from './Pages/LoginPage/login'
import ForgotPassword from './Pages/ForgotPasswordPage/forgotPassword'
import {Route, BrowserRouter} from 'react-router-dom'
import {AuthProvider} from './Contexts/AuthContexts'
import Category from './Components/CategoryComponent/category';




function App() {
  const data = [
    {
      tag: "Personal",
      totalTask: 10,
      completedTask: 8,
      color: "blue"
    },
    {
      tag: "Business",
      totalTask: 15,
      completedTask: 5,
      color: "red"
    }, 
    {
      tag: "Tagging",
      totalTask: 12,
      completedTask: 1,
      color: "green"
    }
  ]
  return (
    <div>

      {
        data.map(x => <Category data = {x}  />)
      }
   
   
     
       <BrowserRouter>
          <AuthProvider>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/forgotPassword" component={ForgotPassword} />
          </AuthProvider>
     </BrowserRouter>

     </div>
  );
}

export default App;
