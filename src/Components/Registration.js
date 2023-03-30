import React, { Component } from 'react';
import  { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import UserService from '../Service/UserService';
import { Link } from "react-router-dom";
import Register from '../Model/Register';
//import { connect } from "react-redux";
//import { addNewCustomer } from '../redux/register/RegisterAction';
//import "./styleSheet.css"
import './Registration.css'
// import './stylesheet.css'




function Registration(){
    const navigate = useNavigate();
    let service = new UserService();
    const [state, setState] = useState({ Register: new Register() });
    const [userIdErr,setuserIdErr ]=useState("");
    const [fullNameErr, setfullNameErr]=useState("");
    const [emailIdErr, setemailIdErr]=useState("");
    const [contactNoErr,setcontactNoErr ]=useState("");
    const [passwordErr, setpasswordErr]=useState("");
    



    const formValidation=()=>{
        alert("validation");
        let isValid=true;
        const userIdErr={};
        const fullNameErr ={};
        const emailIdErr={};
        const contactNoErr={};
        const passwordErr={};
        
     
        
        if(state.Register.fullName.trim().length<=0){
            fullNameErr.fullNameRequired="fullName  is required";
            isValid=false;
        }
        if(state.Register.emailId.trim().length<=0){
            emailIdErr.emailIdRequired=" emailId is required";
            isValid=false;
        }
        if(state.Register.contactNo.trim().length<=0){
            contactNoErr.contactNoRequired="contactNo is required";
            isValid=false;
        }
        if(state.Register.contactNo.trim().length<10){
            contactNoErr.contactNoRequired="contactNo must be 10 digit ";
            isValid=false;
        }
        if(state.Register.password.trim().length<=0){
            passwordErr.passwordRequired="password  is required";
            isValid=false;
        }
        
       
        setuserIdErr(userIdErr);
        setfullNameErr(fullNameErr);
        setemailIdErr(emailIdErr);
        setcontactNoErr(contactNoErr);
        setpasswordErr(passwordErr);
        
        
        return isValid;
    }
    
    return (
        <div className='centre'>
           
                <div >
                    <form >
 
                         

                        <div>
                            
                            <input className="form-control" type="text"  placeholder="Enter fullName"
                            
                                value={state.Register.fullName}
                                onChange={(e) => setState({
                                    Register: {
                                        ...state.Register,
                                        
                                        fullName: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(fullNameErr).map((key)=>{
                                return <div style={{color:"red"}}>{fullNameErr[key]}</div>
                            })}
                        </div>
                
        
                   <div>
                        <input className="form-control" type="text"  placeholder="Enter emailId"
                                value={state.Register.emailId}
                                onChange={(e) => {
                                    setState({
                                        Register: {
                                            ...state.Register,
                                    
                                            emailId: e.target.value
                                        }
                                    })
                                }}
                            /><br>
                            </br>
                            {Object.keys(emailIdErr).map((key)=>{
                                return <div style={{color:"red"}}>{emailIdErr[key]}</div>
                            })}
                        </div>
                
                
                
                  
                        <div>
                            
                            <input className="form-control" type="text"  placeholder="Enter contactNo"
                                value={state.Register.contactNo}
                                onChange={(e) => setState({
                                    Register: {
                                        ...state.Register,
                                  
                                        contactNo: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(contactNoErr).map((key)=>{
                                return <div style={{color:"red"}}>{contactNoErr[key]}</div>
                            })}
                        </div>
                        <div>
                            
                            <input className="form-control" type="password"  placeholder="Enter password"
                                value={state.Register.password}
                                onChange={(e) => setState({
                                    Register: {
                                        ...state.Register,
                                     
                                        password: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(passwordErr).map((key)=>{
                                return <div style={{color:"red"}}>{passwordErr[key]}</div>
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
                              
                                service.addNewCustomer(state.Register)
                                    .then((result) => {
                                       
                                     navigate('/customerLogin');
                                    })
                                    .catch((error2) => {
                                        alert(error2)
                                    });
                            }
                        }
                        }>Registration</button>
                      
                    </form>
                </div>
            
        </div>
    )
}


export default Registration;

