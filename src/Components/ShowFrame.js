import React, { Component } from 'react';

import FrameService from "../Service/FrameService";
import Frame from "../Model/Frame";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


class ShowFrame extends React.Component {
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
        <div>
        
          Frame List
          <div>
            {this.state.frames.length > 0 ? (
              <table className="table table-bordered">
                <thead>
                <hr/>
                  <tr>
                    
                    <th>Frame Id</th>
                    <th>Image</th>&nbsp;
                    <th>detail</th><br></br>
                    <th>Delete </th>
                    <th>Update</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.frames.map((fra) => (
                   
                    <tr>
                      <td>{fra.frameId}</td>
                      <td><img src={fra.frameImage} height ={150} width={250}/></td> &nbsp;
                     
                      <td>
                      <p>Name: {fra.frameName}</p>
                      <p>color: {fra.color}</p>
                      <p>price: {fra.price}$</p>
                      <p>desc: {fra.desc}</p>
                      <p>shape: {fra.shape}</p>
                      <p>size: {fra.size}</p></td>
                      <hr/>
                      <td>
                        <button
                          className="button"
                          onClick={(e) => {
                            e.preventDefault();
                            this.FrameService.deleteFrameById(fra.frameId)
                              .then((result) => {
                               
                                this.FrameService.getAllFrames()
                                  .then((result2) => {
                                    this.setState({ frames: result2.data });
                                  })
                                  .catch((error) => {
                                    alert("error");
                                  });
                              })
                              .catch((error) => {
                                alert("error");
                              });
                          }}
                        >
                          <div class="trash">
                            <div class="top">
                              <div class="paper"></div>
                            </div>
                            <div class="box"></div>
                            <div class="check">
                              <svg viewBox="0 0 8 6">
                                <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
                              </svg>
                            </div>
                          </div>
                          <span>Delete Item</span>
                        </button>
                      </td>

                      <td>
                        <Link to={{ pathname: `/frame/update/${fra.frameId}` }}>
                          <button className="update">Update</button>
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
        <Link to={`/frame/add`}>AddGlass</Link><br></br>
        <Outlet />
      </>
    );
  }
}
export default ShowFrame;
