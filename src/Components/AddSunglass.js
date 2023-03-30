
import  React,{ useState } from "react";
import { useNavigate } from 'react-router';
import SunglassService from '../Service/SunglassService';
import Sunglass from '../Model/Sunglass'
import { Link } from "react-router-dom";
// import {addSunglass} from "../redux/sunglass/sunglassAction";
// import { connect } from "react-redux";
import  './stylesheet.css';

function AddSunglass() {
    const navigate = useNavigate();
    let service = new SunglassService();
    const [state, setState] = useState({ sunglass: new Sunglass() });
   
    const [idErr, setidErr]=useState("");
    const [nameErr,setnameErr ]=useState("");
    const [brandErr, setbrandErr]=useState("");
    const [priceErr,setpriceErr ]=useState("");
    const [imageErr,setimageErr ]=useState("");
    const [frameShapeErr,setframeShapeErr ]=useState("");
    const [glassColurErr,setglassColurErr ]=useState("");
    const [weightErr,setweightErr ]=useState("");
    const [frameColorErr,setframeColorErr ]=useState("");
    


    const formValidation=()=>{
        alert("validation");
        let isValid=true;
        const idErr={};
        const nameErr ={};
        const brandErr={};
        const priceErr={};
        const imageErr={};
        const frameShapeErr={};
        const glassColurErr={};
        const weightErr={};
        const frameColorErr={};
        
       

        alert(state.sunglass.id)
        if(state.sunglass.id.trim().length<=0){
           
       }
        if(state.sunglass.name.trim().length<=0){
            nameErr.idRequired="sunglass id is required";
            isValid=false;
        }
        if(state.sunglass.brand.trim().length<=0){
            brandErr.brandRequired="sunglass brand is required";
            isValid=false;
        }
        if(state.sunglass.price.trim().length<=0){
            priceErr.priceRequired="sunglass price is required";
            isValid=false;
        }
        if(state.sunglass.image.trim().length<=0){
            imageErr.imageRequired="sunglass image is required";
            isValid=false;
        }
        if(state.sunglass.frameShape.trim().length<=0){
            frameShapeErr.frameShapeRequired="sunglass frameShape is required";
            isValid=false;
        }
        if(state.sunglass.glassColur.trim().length<=0){
            glassColurErr.glassColurRequired="sunglass glassColor is required";
            isValid=false;
        }
        if(state.sunglass.weight.trim().length<=0){
            weightErr.weightRequired="sunglass weight is required";
            isValid=false;
        }
        if(state.sunglass.frameColor.trim().length<=0){
            frameColorErr.frameColorRequired="sunglass frameColor is required";
            isValid=false;
        }


       
        setidErr(idErr);
        setnameErr(nameErr);
        setbrandErr(brandErr);
        setpriceErr(priceErr);
        setimageErr(imageErr);
        setframeShapeErr(frameShapeErr);
        setglassColurErr(glassColurErr);
        setweightErr(weightErr);
        setframeColorErr(frameColorErr);
        

      
        return isValid;
    }
    

    
    return (
        <div>
           
                <div>
                    <form>
                        
                    <div>
                          <input className="form-control" type="text"  placeholder="Enter Sunglass Id"
                                value={state.sunglass.id}
                                onChange={(e) => {
                                    setState({
                                        sunglass: {
                                            ...state.sunglass,
                                            
                                            id: e.target.value,
                                        },
                                    });
                                }}
                            /><br>
                            </br>
                            {Object.keys(idErr).map((key)=>{
                                return <div style={{color:"red"}}>{idErr[key]}</div>
                            })}
                        </div> 
                    
                     
                    
                    
                   
                          
                            
                        <div>
                            
                            <input className="form-control my-2" type="text"  placeholder="Enter sunglass name"
                                value={state.sunglass.name}
                                onChange={(e) => setState({
                                    sunglass: {
                                        ...state.sunglass,
                                      
                                        name: e.target.value,
                                    },
                                })}
                            />
                             {Object.keys(nameErr).map((key)=>{
                                return <div style={{color:"red"}}>{nameErr[key]}</div>
                            })}
                        </div>
                        <div>
                            
                            <input className="form-control my-2" type="text"  placeholder="Enter sunglass brand"
                                value={state.sunglass.brand}
                                onChange={(e) => setState({
                                    sunglass: {
                                        ...state.sunglass,
                                      
                                        brand: e.target.value,
                                    },
                                })}
                            />
                             {Object.keys(brandErr).map((key)=>{
                                return <div style={{color:"red"}}>{brandErr[key]}</div>
                            })}
                        </div>
                        <div>
                            
                            <input className="form-control my-2" type="number"  placeholder="Enter sunglass price"
                                value={state.sunglass.price}
                                onChange={(e) => setState({
                                    sunglass: {
                                        ...state.sunglass,
                                      
                                        price: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(priceErr).map((key)=>{
                                return <div style={{color:"red"}}>{priceErr[key]}</div>
                            })}
                        </div>
                        <div>
                            
                            <input className="form-control my-2" type="text"  placeholder="Enter sunglass image"
                                value={state.sunglass.image}
                                onChange={(e) => setState({
                                    sunglass: {
                                        ...state.sunglass,
                                    
                                        image: e.target.value,
                                    },
                                })}
                            />
                             {Object.keys(imageErr).map((key)=>{
                                return <div style={{color:"red"}}>{imageErr[key]}</div>
                            })}
                        </div>
                        <div>
                            
                            <input className="form-control my-2" type="text"  placeholder="Enter sunglass frameShape"
                                value={state.sunglass.frameShape}
                                onChange={(e) => setState({
                                    sunglass: {
                                        ...state.sunglass,
                                      
                                      frameShape: e.target.value,
                                    },
                                })}
                            />
                             {Object.keys(frameShapeErr).map((key)=>{
                                return <div style={{color:"red"}}>{frameShapeErr[key]}</div>
                            })}
                        </div>
                        <div>
                            
                        <input className="form-control my-2" type="text"  placeholder="Enter sunglass glassColor"
                            value={state.sunglass.glassColur}
                            onChange={(e) => setState({
                                sunglass: {
                                    ...state.sunglass,
                                 
                                  glassColur: e.target.value,
                                },
                            })}
                        />
                         {Object.keys(glassColurErr).map((key)=>{
                            return <div style={{color:"red"}}>{glassColurErr[key]}</div>
                        })}
                    </div>

                    <div>
                            
                    <input className="form-control" type="number"  placeholder="Enter Sunglass weight"
                                value={state.sunglass.weight}
                                onChange={(e) => {
                                    setState({
                                        sunglass: {
                                            ...state.sunglass,
                                        
                                           weight: e.target.value,
                                        },
                                    })
                                }}
                            /><br>
                            </br>
                            {Object.keys(weightErr).map((key)=>{
                                return <div style={{color:"red"}}>{weightErr[key]}</div>
                            })}
                        
                        </div>
                        
                        <div>
                            
                            <input className="form-control my-2" type="text"  placeholder="Enter sunglass frameColor"
                                value={state.sunglass.frameColor}
                                onChange={(e) => setState({
                                    sunglass: {
                                        ...state.sunglass,
                                     
                                      frameColor: e.target.value,
                                    },
                                })}
                            />
                             {Object.keys(frameColorErr).map((key)=>{
                                return <div style={{color:"red"}}>{frameColorErr[key]}</div>
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
                              
                                service.addSunglass(state.sunglass)
                                    .then((result) => {
                                        alert('Sunglass is added in database.');
                                        navigate('/adminHome/sunglass');
                                    })
                                    .catch((error2) => {
                                        alert(error2)
                                    });
                            }
                        }
                        }>Add Sunglass</button>
                         <Link className="btn btn-outline-primary mt-3 ml-3" to='/adminHome/sunglass'>Cancel</Link> 
                    </form>
                </div>
            
        </div>
    )
}

export default AddSunglass;


