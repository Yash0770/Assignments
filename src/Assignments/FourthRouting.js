import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavSection from "./NavSection";
import First from "./First";
import Second from "./Second";
import TodoApp from "./TodoApp";

export default function FourthRouting() {
  return (
    <BrowserRouter>
    <NavSection/>
      <Routes>
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/todo" element={<TodoApp/>}/>
      </Routes>
    </BrowserRouter>
  );
}
