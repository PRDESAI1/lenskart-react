

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Registration from './Components/Registration';
import AdminLogin from './Components/AdminLogin';
import CustomerLogin from './Components/CustomerLogin';
import ShowFrame from "./Components/ShowFrame";
import AddFrame from "./Components/AddFrame";
import UpdateFrame from "./Components/UpdateFrame";
import ShowGlass from './Components/ShowGlass';
import AddGlass from './Components/AddGlass';
import UpdateGlass from './Components/UpdateGlass';
import ShowOrder from './Components/ShowOrder'
import AddSunglass from './Components/AddSunglass';
import UpdateSunglass from './Components/UpdateSunglass';
import { Navbar } from './Components/Navbar';
import { Home } from './Components/Home';
import CustomerShowFrame from './Components/CustomerShowFrame';
import CustomerShowGlass from './Components/CustomerShowGlass';
import CustomerShowSunglass from './Components/CustomerShowSunglass';
import { AdminHome } from './Components/AdminHome';
import AddCart from './Components/AddCart';
import { About } from './Components/About';
import ShowLens from './Components/ShowLens';
import AddLens from './Components/AddLens';
import CustomerShowLnes from './Components/CustomerShowLens';
import UpdateLens from './Components/UpdateLens';
import NoMatch from './Components/NoMatch';
import './App.css';


function App() {
  
  return (
    <>
   
    <div >
    
    <Router>
   <Navbar></Navbar>
    <div className='App'>
    <Routes>
    
   
    <Route exact path='/Home' element={<Home />}>

    <Route exact path='customerShowFrame' element={<CustomerShowFrame />} />
    <Route exact path='customerShowGlass' element={<CustomerShowGlass />} />
    <Route exact path='customerShowLens' element={<CustomerShowLnes />} />
    <Route exact path='customerShowSunglass' element={<CustomerShowSunglass />} />
    
    <Route exact path='cart' element={<AddCart />} />
    </Route>

    <Route exact path='/adminHome' element={<AdminHome/>} >
        
    <Route exact path='frame' element={<ShowFrame />} />
    <Route exact path='glasses' element={<ShowGlass />} />
    <Route exact path='lens' element={<ShowLens/>} />
    <Route exact path='sunglass' element={<ShowOrder />} />
</Route>

   
    </Routes>
    </div>
    
    <div className='App'>
    
      <Routes>
     
        <Route exact path='/' component={Registration} />
        
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/registration' element={<Registration />} />
       

        <Route exact path='/adminLogin' element={<AdminLogin />} />

       
       
        <Route exact path='/customerLogin' element={<CustomerLogin />} />
        <Route exact path='/frame/add' element={<AddFrame />} />
        <Route exact path='/frame/update/:frameId' element={<UpdateFrame />}></Route>

        <Route exact path='/glasses/add' element={<AddGlass/>} />
        <Route exact path='/glasses/update/:glassId' element={<UpdateGlass/>} />

        <Route exact path='/sunglass/add' element={<AddSunglass />} />
        <Route exact path='/sunglass/update/:sunglassid' element={<UpdateSunglass />} />
       
      
        <Route exact path='/lens/add' element={<AddLens />} />
        <Route exact path='/lens/update/:lensId' element={<UpdateLens />} />



      </Routes>
      </div>
    </Router>
    
    </div>
    </>
  );

//  return (
// <div>

// <Router>
// <Navbar></Navbar>
// <Routes>

// <Route exact path='/' component={ShowFrame}/>
// <Route exact path='frame' element={<ShowFrame />} />


// <Route exact path='/Home' element={<Home />}>

//    <Route exact path='customerShowFrame' element={<ShowFrame />} />
//    <Route exact path='customerShowGlass' element={<CustomerShowGlass />} />
//    <Route exact path='customerShowSunglass' element={<CustomerShowSunglass />} />
//    <Route exact path='cart' element={<AddCart />} />

//    </Route>
 
// </Routes>
// </Router>

// </div>

// );
}
export default App;
