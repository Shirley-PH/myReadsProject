import {Route, Routes} from "react-router-dom";
import React from 'react'
import Search from './Components/Search';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import './App.css'
const App = () => {
  // The last version of Router V6 it's not necessary to use <Switch> so in my proyect I haven't use it. I add a new page where it is 404 not page founded
  return(
    <Routes>
    	<Route path='*' element={<NotFound/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/search" element={<Search/>} />
    </Routes>
  )
}

export default App;