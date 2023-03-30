import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link ,Outlet} from 'react-router-dom'

export const Home = () => {
    return (
        <>
       
         <nav className="navbar">

           
        
           <Link to='customerShowFrame'>Frame</Link>
           &nbsp;&nbsp;
            <Link to='customerShowGlass'>Glass</Link>
            &nbsp;&nbsp;
            <Link to='customerShowLens'>Lens</Link>
            &nbsp;&nbsp;
            <Link to='customerShowSunglass'>Sunglass</Link>
           
            
         </nav>
         


<Outlet/>
        </>
    )
}

