import React, { Component } from 'react';
import  { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import UserService from '../Service/UserService';
import { Link } from "react-router-dom";
import Register from '../Model/Register';
//import { checkCustomerLogin } from '../redux/register/RegisterAction';
//import "./styleSheet.css"




function CustomerLogin() {
    const navigate = useNavigate();
    let service = new UserService();
    const [state, setState] = useState({ Register:new Register() });
    const [emailIdErr,setemailIdErr ]= useState("");
    const [passwordErr, setpasswordErr]= useState("");
   



    const formValidation=()=>{
        alert("validation");
        let isValid=true;
        const emailIdErr={};
        const passwordErr ={};
        
        
      alert(state.Register.emailId)
         if(state.Register.emailId.trim().length<=0){
            emailIdErr.emailIdRequired=" emailId is required";
            isValid=false;
        }
        if(state.Register.password.trim().length<=0){
            passwordErr.passwordRequired="password  is required";
            isValid=false;
        }

        setemailIdErr(emailIdErr);
        setpasswordErr(passwordErr);
        return isValid;
    }
    
    return (
        <div>
           
                <div>
                    <form>
 
                           <div>
                            
                            <input className="form-control" type="text"  placeholder="Enter emailId"
                                value={state.Register.emailId}
                                onChange={(e) => setState({
                                    Register: {
                                        ...state.Register,
                
                                        emailId: e.target.value
                                    }
                                })}
                            />
                             {Object.keys(emailIdErr).map((key)=>{
                                return <div style={{color:"red"}}>{emailIdErr[key]}</div>
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
                              
                                service.checkCustomerLogin(state.Register)
                                    .then((result) => {

                                        alert('customer sucessfully login.');
                                       navigate('/home');
                                    })
                                    .catch((error2) => {
                                        alert(error2)
                                    });
                            }
                        }
                        }>login</button>
                    </form>
                </div>
            
        </div>
    )
}

export default CustomerLogin;


