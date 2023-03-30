

import React from "react";
import LensService from "../Service/LensService";
import Lens from "../Model/Lens";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

// class ShowOrder extends Component {
class ShowLens extends React.Component {
    constructor() {
        super();
        this.state = {
            lens: new Lens(),
            lenses: [],
        };
        this.LensService = new LensService();
    }

    componentDidMount() {
        this.LensService.getAllLenses()
            .then((result) => {
                // alert(JSON.stringify(result))
                this.setState({ lenses: result.data });
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
                    Lens List
                    <div>
                        {this.state.lenses.length > 0 ? (
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        
                    <th>Lens Id</th>
                    <th>Image</th>&nbsp;
                    <th>detail</th>
                    <th>Delete </th>
                    <th>Update</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.lenses.map((lens) => (
                                        <tr>

                                        <td>{lens.lensId}</td>
                                        <td><img src={lens.lensimage} height ={150} width={250}/></td> &nbsp;
                                       
                                        <td>
                                        <p>Brand: {lens.lensBrand}</p>
                                        <p>Price: {lens.lensPrice}$</p>
                                        <p>shape: {lens.lensShape}</p>
                                        <p>color: {lens.lensColor}</p>
                                        <p>quantity: {lens.lensQuntity}</p>
                                      </td>
                                           
                                           

                                         
                                            <td>

                                                <button
                                                className="button"
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  this.LensService.deleteLensById(lens.lensId)
                                                    .then((result) => {
                                                      //alert("data called "+result.data)
                                                      this.LensService.getAllLenses()
                                                        .then((result2) => {
                                                          this.setState({ lenses: result2.data });
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
                                              </button></td>
                                              <td>
                                              <Link to={{ pathname: `/lens/update/${lens.lensId}` }}>
                                              <button className="update">Update</button>
                                            </Link></td>

                                        </tr>
                                    ))
                                    } </tbody>
                            </table>
                        ) : <div>No lens present</div>
                        }
                    </div>
                </div>
                <Link to={`/lens/add`}>AddLens</Link><br></br>
                <Outlet />
            </>

        );
    }

}






export default ShowLens;

