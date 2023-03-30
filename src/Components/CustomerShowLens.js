

import React from "react";
import LensService from "../Service/LensService";
import Lens from "../Model/Lens";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


class CustomerShowLnes extends React.Component {
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
                    <th>detail</th><br></br>
                    <th>Add To Cart </th>
                  
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.lenses.map((lens) => (
                                        <tr>

                                        <td>{lens.lensId}</td>
                                        <td><img src={lens.lensimage} height ={150} width={250}/></td> &nbsp;
                                       
                                        <td>
                                        <p>Brand: {lens.lensBrand}</p>
                                        <p>Price: {lens.lensPrice}</p>
                                        <p>shape: {lens.lensShape}$</p>
                                        <p>color: {lens.lensColor}</p>
                                        <p>shape: {lens.lensQuntity}</p>
                                      </td>&nbsp;
                                      <td><button className='update'>add</button></td>   
                                           

                                           
                                           

                                        </tr>
                                    ))
                                    } </tbody>
                            </table>
                        ) : <div>No lens present</div>
                        }
                    </div>
                </div>
                
                <Outlet />
            </>

        );
    }

}






export default CustomerShowLnes;

