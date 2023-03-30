import React, { useState } from "react";
import { useNavigate } from 'react-router';
import LensService from "../Service/LensService";
import Lens from "../Model/Lens";
import { Link } from "react-router-dom";
// import { addLens } from "../redux/lens/lensActions";
// import { connect } from "react-redux";
import './stylesheet.css'


function AddLens() {
    const navigate = useNavigate();
    let service = new LensService();
    const [state, setState] = useState({ lens: new Lens() });
    const [lensIdErr, setLensIdErr]=useState("");
    const [lensBrandErr, setLensBrandErr]=useState("");
    const [lensPriceErr, setLensPriceErr]=useState("");
    const [lensImageErr, setLensImageErr]=useState("");
    const [lensShapeErr, setLensShapeErr]=useState("");
    const [lensColorErr, setLensColorErr]=useState("");
    const [lensQuntityErr, setLensQuntityErr]=useState("");

    const formValidation=()=>{
        alert("validation");
        let isValid=true;
        const lensIdErr={};
        const lensNameErr={};
        const lensBrandErr={};
        const lensPriceErr={};
        const lensImageErr={};
        const lensShapeErr={};
        const lensColorErr={};
        const lensQuntityErr={};

      

        if(state.lens.lensId.trim().length<=0){
          
            isValid=true;
        }
        
        if(state.lens.lensBrand.trim().length<=0){
            lensBrandErr.lensBrandRequired="Lens Brand is required";
            isValid=false;
        }
        if(state.lens.lensPrice.trim().length<=0){
            lensPriceErr.lensPriceRequired="Lens Price is required";
            isValid=false;
        }
        if(state.lens.lensimage.trim().length<=0){
            lensImageErr.lensImageRequired="Lens Image is required";
            isValid=false;
        }
        if(state.lens.lensShape.trim().length<=0){
            lensShapeErr.lensShapeRequired="Lens Shape is required";
            isValid=false;
        }
        if(state.lens.lensColor.trim().length<=0){
            lensColorErr.lensColorRequired="Lens Color is required";
            isValid=false;
        }
        if(state.lens.lensQuntity.trim().length<=0){
            lensQuntityErr.lensQuntityRequired="Lens Quntity is required";
            isValid=false;
        }


        setLensIdErr(lensIdErr);
        setLensBrandErr(lensBrandErr);
        setLensPriceErr(lensPriceErr);
        setLensImageErr(lensImageErr);
        setLensShapeErr(lensShapeErr);
        setLensColorErr(lensColorErr);
        setLensQuntityErr(lensQuntityErr);
                return isValid;
    }


   


    return (
        <div>
           
                <div>
                    <form>
                         <div>
                          
                           
                            {Object.keys(lensIdErr).map((key)=>{
                                return <div style={{color:"red"}}>{lensIdErr[key]}</div>
                            })}
                        </div> 
                           <div>     
                            <input className="form-control" type="text"  placeholder="Enter Lens Brand"
                                value={state.lens.lensBrand}
                                onChange={(e) => setState({
                                    lens:
                                    {
                                        ...state.lens,
                                        //...state.lens.department,
                                        lensBrand: e.target.value
                                    }                            
                                })}
                            /><br></br>
                             {Object.keys(lensBrandErr).map((key)=>{
                                return <div style={{color:"red"}}>{lensBrandErr[key]}</div>
                            })}
                        </div>

                        <div> 
                            <input className="form-control my-2" type="number"  placeholder="Enter Lens Price "
                                value={state.lens.lensPrice}
                                onChange={(e) => setState({
                                    lens: {
                                        ...state.lens,
                                     
                                        lensPrice: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(lensPriceErr).map((key)=>{
                                return <div style={{color:"red"}}>{lensPriceErr[key]}</div>
                            })}
                        </div>

                        <div>
             <input className="form-control" type="text"  placeholder="Enter Lens Image"
                 value={state.lens.lensimage}
                 onChange={(e) => setState({
                     lens:
                     {
                         ...state.lens,
                       
                         lensimage: e.target.value
                     }                            
                 })}
             /><br></br>
              {Object.keys(lensImageErr).map((key)=>{
                 return <div style={{color:"red"}}>{lensImageErr[key]}</div>
             })}
         </div>

         <div> 
                            <input className="form-control my-2" type="text"  placeholder="Enter Lens Shape"
                                value={state.lens.lensShape}
                                onChange={(e) => setState({
                                    lens: {
                                        ...state.lens,
                                       // ...state.lens.department,
                                        lensShape: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(lensShapeErr).map((key)=>{
                                return <div style={{color:"red"}}>{lensShapeErr[key]}</div>
                            })}
                        </div>
                        
                        <div>
             <input className="form-control" type="text"  placeholder="Enter Lens Color"
                 value={state.lens.lensColor}
                 onChange={(e) => setState({
                     lens:
                     {
                         ...state.lens,
                        
                         lensColor: e.target.value
                     }                            
                 })}
             /><br></br>
              {Object.keys(lensColorErr).map((key)=>{
                 return <div style={{color:"red"}}>{lensColorErr[key]}</div>
             })}
             </div>
             <div>
             <input className="form-control" type="number"  placeholder="Enter Lens Quntity"
                 value={state.lens.lensQuntity}
                 onChange={(e) => setState({
                     lens:
                     {
                         ...state.lens,
                       
                         lensQuntity: e.target.value
                     }                            
                 })}
             /><br></br>
              {Object.keys(lensQuntityErr).map((key)=>{
                 return <div style={{color:"red"}}>{lensQuntityErr[key]}</div>
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
                              
                                service.addLens(state.lens)
                                    .then((result) => {
                                        alert('Lens is added in database.');
                                        navigate('/adminHome/lens');
                                    })
                                    .catch((error2) => {
                                        alert(error2)
                                    });
                            }
                        }
                        }>Add Lens</button>
                        <Link className="btn btn-outline-primary mt-3 ml-3" to='/adminHome/lens'>Cancel</Link>
                    </form>
                </div>
            
        </div>
    )
}

export default AddLens;
