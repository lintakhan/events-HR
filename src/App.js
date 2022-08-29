import React from "react";
import { AddEvent } from "./firstSection/AddEvent";
import { FirstSection } from "./firstSection/FirstSection";
import { Navbar } from "./navbar/Navbar";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";


export const App = () =>{
  return(
    <>
      <Router>
       <Navbar/>
        <Routes>
          <Route path='/' element={<FirstSection/>}></Route>
          <Route exact path='/AddEvent' element={<AddEvent/>}></Route>
        </Routes>
         
      </Router>
     
    </>
    
  )
}

export default App;