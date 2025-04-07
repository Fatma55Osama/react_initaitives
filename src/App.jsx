import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";

export default function App() {
 

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
