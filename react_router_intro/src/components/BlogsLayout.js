import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
/* api -> 
jsonplaceholder/api/xyz 
jsonplaceholder/api/plo
*/
function BlogsLayout() {
    // const apiBaseRoute = 'jsonplaceholder/api'
    const BASE_RESOURCE = "/blogs"
  return (
    <>
    <nav>
        <ul>
            <li>
                <NavLink to={`${BASE_RESOURCE}/1`} reloadDocument>Blog 1</NavLink>
            </li>
            <li>
                {/* alternative to a tag href */}
                <NavLink to={'/blogs/2'}>Blog 2</NavLink>
            </li>
            <li>
                <NavLink to={`${BASE_RESOURCE}/2/extra`}>Extraaa</NavLink>
            </li>
        </ul>
    </nav>
    <br />
    <Outlet context={'just info'} myOwn={'me'}/>
    <br />
    <h4>Ended with outlets</h4>
        
        
    </>
  )
}

export default BlogsLayout