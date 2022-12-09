import React from 'react'
import {Route, Routes} from 'react-router-dom'

import Blogs from "../components/Blogs";
import BlogsLayout from "../components/BlogsLayout";
function BlogRoutes() {
  return (
    <Routes>
        <Route element={<BlogsLayout />}  >
            <Route index element={<>ROot Blogs</>}/>
            <Route path=":blogId" element={<Blogs />}/>
            <Route path=":blogId/:extra" element={<>EXTRAAAAA</>}/>
        </Route>
    </Routes>
  )
}

export default BlogRoutes