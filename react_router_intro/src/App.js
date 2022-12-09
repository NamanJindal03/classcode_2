import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from "./components/Home";
import BlogRoutes from "./ChildRoutes/BlogRoutes";
function App() {
  return (
    <> 
      <Routes>
        <Route path="/" element={<h1>I am at root directory</h1>}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/blogs/*" element={<BlogRoutes />} />
        <Route path="*" element={<h1>Oops you seem to have entered a wrong url</h1>} />
      </Routes>
      {/* blogs/2 */}
      {/* query param ?blogId='123'&name='naman' || path param */}
    </>
  );
}

export default App;
