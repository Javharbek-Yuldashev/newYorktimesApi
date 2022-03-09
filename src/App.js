import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/root";
import Books from "./components/Books"

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/books' element={<Books />} />
        </Routes> 
      </BrowserRouter>
  );
}

export default App;
