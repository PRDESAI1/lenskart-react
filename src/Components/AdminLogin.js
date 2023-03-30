import React, { Component } from 'react';
import  { useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import UserService from '../Service/UserService';
import { Link } from "react-router-dom";
import Login from '../Model/Login';
//import "./styleSheet.css"



function AdminLogin() {
    const navigate = useNavigate();
    let service = new UserService();
    const [state, setState] = useState({ login: new Login() });
    const [emailIdErr,setemailIdErr ]=useState("");
    const [passwordErr, setpasswordErr]=useState("");
   



    const formValidation=()=>{
        alert("validation");
        let isValid=true;
        const emailIdErr={};
        const passwordErr ={};
        
        
      //alert(state.login.emailIdErr)
         if(state.login.emailId.trim().length<=0){
            emailIdErr.emailIdRequired=" emailId is required";
            isValid=false;
        }
        if(state.login.password.trim().length<=0){
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
                                value={state.login.emailId}
                                onChange={(e) => setState({
                                    login: {
                                        ...state.login,
                
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
                            
                                value={state.login.password}
                                onChange={(e) => setState({
                                    login: {
                                        ...state.login,
                                        
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
                              
                                service.checkAdminLogin(state.login)
                                    .then((result) => {

                                        alert('admin sucessfully login.');
                                       navigate('/adminHome');
                                    })
                                    .catch((error2) => {
                                        alert(error2)
                                    });
                            }
                        }
                        }>Admin Login</button>
                        
                      
                    </form>
                </div>
            
        </div>
    )
}
export default AdminLogin;

