// import React, { Component } from 'react';
import React from "react";
//import { Outlet } from "react-router-dom"
import FrameService from "../Service/FrameService";
import Frame from "../Model/Frame";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";



class CustomerShowFrame extends React.Component {
    constructor() {
        super();
        this.state = {
            frame: new Frame(),
            frames: [],
        };
        this.FrameService = new FrameService();
    }

    componentDidMount() {
        this.FrameService.getAllFrames()
            .then((result) => {
                // alert(JSON.stringify(result))
                this.setState({ frames: result.data });
            })
            .catch((error) => {
                alert(error);
            });
    }

    render() {
        console.log("render");
        return (
            <>
            <br></br>
            <br></br>
            <br></br>

                <div><h2>Frame</h2>

                    <div>
                        {this.state.frames.length > 0 ? (
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                    <th>Frame Id</th>

                                    <th>Imgae</th>&nbsp;
                    
                                    <th>detail</th>
                                       {/**<th>Add to Cart</th>&nbsp; */} 
                                     
                                       
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.frames.map((fra) => (
                                        <tr>
                                        <td>{fra.frameId}</td>

                                        <td><img src={fra.frameImage} height ={150} width={250}/></td>&nbsp;
                  
                                       
                  
                                        <td>
                  
                                        <p>Name: {fra.frameName}</p>
                  
                                        <p>color: {fra.color}</p>
                  
                                        <p>price: {fra.price}$</p>
                  
                                        <p>desc: {fra.desc}</p>
                  
                                        <p>shape: {fra.shape}</p>
                  
                                        <p>size: {fra.size}</p></td>
                                      


                                            <td>
                        <Link to={{ pathname: `/Home/customerShowFrame/cart` }}>
                          <button className="update">add</button>
                        </Link>
                        <Link to={{ pathname: `/Home/customerShowFrame/buy` }}>
                        <button className="update">Buy</button>
                      </Link>
                      </td>
            
                                        </tr>
                                    ))}{" "}
                                </tbody>
                            </table>
                        ) : (
                            <div>No Frame is present</div>
                        )}
                    </div>
                </div>
                <Outlet />
            </>
        );
    }
}
export default CustomerShowFrame;
