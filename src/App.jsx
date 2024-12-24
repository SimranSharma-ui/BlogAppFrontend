import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './componants/Create';
import AllBlogs from './componants/AllBlogs';
import OneBlog from './componants/OneBlog';
import Update from './componants/Update';
import NavBar from './componants/NavBar';
import Home from './componants/Home';

const App = () => {
  return (
    <div>
       <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Create' element={<Create/>}></Route>
        <Route path='/AllBlogs' element={<AllBlogs/>}></Route>
        <Route path='/OneBlog/:id' element={<OneBlog/>}></Route>
        <Route path='/Update/:id' element={<Update/>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App;