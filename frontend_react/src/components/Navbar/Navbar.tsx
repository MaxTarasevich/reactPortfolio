
import React from 'react'

import image from '../../constans/images'

const Navbar = () => {
  return (
   <nav className='app_navbar'>
       <div>
           <img src={image.logo} alt="logo" />
       </div>
       <ul>
           {['home','about','work','skills','contact',].map((el)=>(
               <li key={`link-${el}`}>
                   <div></div>
                   <a href={`#${el}`}>{el}</a>
                </li>
           ))}
       </ul>
   </nav>
  )
}

export default Navbar