import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AOS from 'aos';
export default function App() {
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100, 
      once: false,
    });
    return () => {
      AOS.refresh(); 
  };
  }, []);
  return (
    <div className="App">
        <Routes>
          <Route path="/">
          <Route index element ={<HomePage/>}/>
          </Route>
        </Routes>
    </div>
  );
}
