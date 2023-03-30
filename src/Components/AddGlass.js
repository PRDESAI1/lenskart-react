import React, { useState } from "react";
import { useNavigate } from 'react-router';
import GlassService from "../Service/GlassService";
import Glass from "../Model/Glass";
import { Link } from "react-router-dom";
// import { addGlass } from "../redux/glass/glassActions";
// import { connect } from "react-redux";



function AddGlass() {
    const navigate = useNavigate();
    let service = new GlassService();
    const [state, setState] = useState({ glass: new Glass() });
    const [glassIdErr, setGlassIdErr]=useState("");
    const [glassNameErr, setGlassNameErr]=useState("");
    const [glassBrandErr, setGlassBrandErr]=useState("");
    const [glassPriceErr, setGlassPriceErr]=useState("");
    const [glassImageErr, setGlassImageErr]=useState("");
    const [glassTypeErr, setGlassTypeErr]=useState("");
    const [glassPowerRangeErr, setGlassPowerRangeErr]=useState("");

    const formValidation=()=>{
        alert("validation");
        let isValid=true;
        const glassIdErr={};
        const glassNameErr={};
        const glassBrandErr={};
        const glassPriceErr={};
        const glassImageErr={};
        const glassTypeErr={};
        const glassPowerRangeErr={};

        //alert(state.glass.department.departmentId)

        if(state.glass.glassId.trim().length<=0){
           // glassIdErr.glassIdRequired="Glass ID is required";
            isValid=true;
        }
        if(state.glass.glassName.trim().length<=0){
            glassNameErr.glassNameRequired="Glass Name is required";
            isValid=false;
        }
        if(state.glass.glassBrand.trim().length<=0){
            glassBrandErr.glassBrandRequired="Glass Brand is required";
            isValid=false;
        }
        if(state.glass.glassPrice.trim().length<=0){
            glassPriceErr.glassPriceRequired="Glass Price is required";
            isValid=false;
        }
        if(state.glass.glassimage.trim().length<=0){
            glassImageErr.glassImageRequired="Glass Image is required";
            isValid=false;
        }
        if(state.glass.glassType.trim().length<=0){
            glassTypeErr.glassTypeRequired="Glass Type is required";
            isValid=false;
        }
        if(state.glass.glassPowerRange.trim().length<=0){
            glassPowerRangeErr.glassPowerRangeRequired="Glass PowerRange is required";
            isValid=false;
        }


       
        setGlassIdErr(glassIdErr);
        setGlassNameErr(glassNameErr);
        setGlassBrandErr(glassBrandErr);
        setGlassPriceErr(glassPriceErr);
        setGlassImageErr(glassImageErr);
        setGlassTypeErr(glassTypeErr);
        setGlassPowerRangeErr(glassPowerRangeErr);
      
        return isValid;
    }

    

    return (
        <div>
           
                <div>
                    <form>
                        <div>
                          
                           
                            <br>
                            </br>
                            {Object.keys(glassIdErr).map((key)=>{
                                return <div style={{color:"red"}}>{glassIdErr[key]}</div>
                            })}
                        </div>
                        <div>
                            
                            <input className="form-control my-2" type="text"  placeholder="Enter Glass Name"
                                value={state.glass.glassName}
                                onChange={(e) => setState({
                                    glass: {
                                        ...state.glass,
                                       // ...state.glass.department,
                                        glassName: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(glassNameErr).map((key)=>{
                                return <div style={{color:"red"}}>{glassNameErr[key]}</div>
                            })}
                        </div>
                        <div>
             
                            <input className="form-control" type="text"  placeholder="Enter Glass Brand"
                                value={state.glass.glassBrand}
                                onChange={(e) => setState({
                                    glass:
                                    {
                                        ...state.glass,
                                     
                                        glassBrand: e.target.value
                                    }                            
                                })}
                            /><br></br>
                             {Object.keys(glassBrandErr).map((key)=>{
                                return <div style={{color:"red"}}>{glassBrandErr[key]}</div>
                            })}
                        </div>

                        <div> 
                            <input className="form-control my-2" type="number"  placeholder="Enter Glass Price "
                                value={state.glass.glassPrice}
                                onChange={(e) => setState({
                                    glass: {
                                        ...state.glass,
                                       
                                        glassPrice: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(glassPriceErr).map((key)=>{
                                return <div style={{color:"red"}}>{glassPriceErr[key]}</div>
                            })}
                        </div>

                        <div>
             <input className="form-control" type="text"  placeholder="Enter Glass Image"
                 value={state.glass.glassimage}
                 onChange={(e) => setState({
                     glass:
                     {
                         ...state.glass,
                       
                         glassimage: e.target.value
                     }                            
                 })}
             /><br></br>
              {Object.keys(glassImageErr).map((key)=>{
                 return <div style={{color:"red"}}>{glassImageErr[key]}</div>
             })}
         </div>

         <div> 
                            <input className="form-control my-2" type="text"  placeholder="Enter Glass Type"
                                value={state.glass.glassType}
                                onChange={(e) => setState({
                                    glass: {
                                        ...state.glass,
                                    
                                        glassType: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(glassTypeErr).map((key)=>{
                                return <div style={{color:"red"}}>{glassTypeErr[key]}</div>
                            })}
                        </div>
                        
                        <div>
             <input className="form-control" type="number"  placeholder="Enter Glass PowerRange"
                 value={state.glass.glassPowerRange}
                 onChange={(e) => setState({
                     glass:
                     {
                         ...state.glass,
                       
                         glassPowerRange: e.target.value
                     }                            
                 })}
             /><br></br>
              {Object.keys(glassPowerRangeErr).map((key)=>{
                 return <div style={{color:"red"}}>{glassPowerRangeErr[key]}</div>
             })}
             </div>

                        
                        <button className="btn btn-outline-primary mt-3" onClick={
                            (e) => {
                                e.preventDefault();
                                let isValid=formValidation()
                                if(!isValid){
                                return false;
                                }
                                else{
                              
                                service.addGlass(state.glass)
                                    .then((result) => {
                                        alert('Glass is added in database.');
                                        navigate('/adminHome/glasses');
                                    })
                                    .catch((error2) => {
                                        alert(error2)
                                    });
                            }
                        }
                        }>Add Glass</button>
                        <Link className="btn btn-outline-primary mt-3 ml-3" to='/adminHome/glasses'>Cancel</Link>
                    </form>
                </div>
            
        </div>
    )
}

export default AddGlass;
