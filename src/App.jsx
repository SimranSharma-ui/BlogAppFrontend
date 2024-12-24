import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Create from './componants/Create';
import AllBlogs from './componants/AllBlogs';
import OneBlog from './componants/OneBlog';
import Update from './componants/Update';

const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Create/>}></Route>
        <Route path='/AllBlogs' element={<AllBlogs/>}></Route>
        <Route path='/OneBlog/:id' element={<OneBlog/>}></Route>
        <Route path='/Update/:id' element={<Update/>}></Route>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App;