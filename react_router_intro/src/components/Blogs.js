import React from 'react'
import { useParams, useOutletContext} from 'react-router-dom'

function Blogs(props) {
  console.log(props)
  const outletContextObj = useOutletContext()
  console.log(useOutletContext())
    console.log(useParams())
    const params = useParams(); 
  return (
    <div> I am on the blog with issue number {params.blogId}
      and info coming from outlet is : {outletContextObj}
    </div>
  )
}

export default Blogs