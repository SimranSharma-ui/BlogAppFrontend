import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './componants/Create';
import AllBlogs from './componants/AllBlogs';
import OneBlog from './componants/OneBlog';
import Update from './componants/Update';
import NavBar from './componants/NavBar';
import Home from './componants/Home';
import Register from './componants/Register';
import Login from './componants/Login';
import { useTheme } from './contaxt/ThemeProvider';
import ForgotPassword from './componants/ForgotPassword';
import ResetPassword from './componants/ResetPassword';
import Contact from './componants/Contact';

const App = () => {
   const {theme}=useTheme();
  return (
    <div className={`min-h-screen ${theme === "Dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
       
       <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/SignUp' element={<Register/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Create' element={<Create/>}></Route>
        <Route path='/AllBlogs' element={<AllBlogs/>}></Route>
        <Route path='/OneBlog/:id' element={<OneBlog/>}></Route>
        <Route path='/Update/:id' element={<Update/>}></Route>
        <Route path='/ForgetPassword'element={<ForgotPassword/>}/>
        <Route path = '/reset-password/:token' element={<ResetPassword/>}/>
       </Routes>
     
    </div>
  )
}

export default App;