import { Link,Outlet } from "react-router-dom"

export const AdminHome = () => {
    return (
        <>
        <div>
        
          
        <nav className="navbar">

           
           <Link  to='frame'>Frame</Link>
           &nbsp;
           &nbsp;
           <Link  to='glasses'>Glass</Link>
           &nbsp;
           &nbsp;
           <Link to='lens'>Lens</Link>
           &nbsp;&nbsp;
           <Link to='sunglass'>Sunglass</Link>
        
          
           
            
        </nav>
        </div>
<Outlet/>
        </>
    )
}