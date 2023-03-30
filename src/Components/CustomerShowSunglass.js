import React from 'react';
import SunglassService from '../Service/SunglassService';
import Sunglass from '../Model/Sunglass'
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";

class CustomerShowSunglass extends React.Component {
    constructor() {
        super();
        this.state = {
            sunglass: new Sunglass(),
            sunglass: []
        }
        this.SunglassService = new SunglassService();
    }

    componentDidMount() {
        this.SunglassService.getAllSunglasss()
            .then(result => {
                // alert(JSON.stringify(result))
                this.setState({ sunglass: result.data })
            })
            .catch(error => {
                alert(error)
            })
    }

    render() {
        console.log('render');
        return (
            <>
            <br></br>
            <br></br>
            <br></br>
                <div>
                <h2>Sunglass</h2>

                    <div>
                        {
                            this.state.sunglass.length > 0 ? (
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                        <th>SunglassId</th> &nbsp;

                                        <th> Image</th>  &nbsp;
                  
                                        <th>Details</th>
                  
                                            <th>Add To Cart</th>

                                        </tr>
                                    </thead>
                                    <tbody>{
                                        this.state.sunglass.map((sunglass) => (
                                            <tr>
                                            <td>{sunglass.id}</td> &nbsp;
                                            <td><img src={sunglass.image} height={150} width={250} /></td> &nbsp;
                                            <td>
                                              <p>Name:{sunglass.name}</p>
                                              <p>Brand:{sunglass.brand}</p>
                                              <p>Price:{sunglass.price}</p>
                                              <p>FrameShape:{sunglass.frameShape}</p>
                                              <p>GlassColor:{sunglass.glassColur}</p>
                                              <p>Weight:{sunglass.weight}</p>
                                              <p>FrameColor:{sunglass.frameColor}</p>
                    
                                            </td>
                                                <td><button className='update'>add</button></td>
                                            </tr>
                                        ))
                                    } </tbody>
                                </table>
                            ) : <div>No order present</div>
                        }
                    </div>
                </div>
                <Outlet />
            </>

        );
    }

}
export default CustomerShowSunglass