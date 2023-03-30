import React from 'react';
import GlassService from '../Service/GlassService';
import Glass from '../Model/Glass'
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";



    class CustomerShowGlass extends React.Component {
    constructor() {
        super();
        this.state = {
           glass: new Glass(),
            glasses: []
        }
        this.GlassService = new GlassService();
    }
        
    componentDidMount() {
        this.GlassService.getAllGlasses()
        .then(result => {
            // alert(JSON.stringify(result))
            this.setState({glasses:result.data})
        })
        .catch(error => {
            alert(error)
        })
    }

    render () {
        console.log('render');
        return (
           <>
           <br></br>
           <br></br>
           <br></br>
            <div>
            <h2>Glass</h2>
                <div>
                    {
                    this.state.glasses.length > 0 ? ( 
                        <table className='table table-bordered'>
                            <thead>
                            <tr>
                            <th>GlassId</th>

                            <th>Image</th>&nbsp;
            
                            <th>detail</th>
                                <th>Add to Cart</th>&nbsp;
                               
                            </tr>
                                
                            </thead>
                            <tbody>{
                                this.state.glasses.map((glass) => (
                                    <tr>
                                   <td><p> Id: {glass.glassId}</p></td>
                                    <td><img src={glass.glassimage} height ={150} width={250}/></td>&nbsp;
                                    <td>
                                    
                                    <p> Name: {glass.glassName}</p>
                                    <p> Brand: {glass.glassBrand}</p>
                                    <p> Price: {glass.glassPrice}$</p>
                                   
                                    <p> Type: {glass.glassType}</p>
                                    <p> Power Range: {glass.glassPowerRange}</p>
                                    
                                    </td>
                                    <td><button className='update'>add</button></td>
                                    </tr>
                                ))
                                } </tbody>
                        </table>
                    ) : <div>No glass present</div>
                            }   
                </div>
            </div>
            <Outlet />
            </>
           
        );
    }
    
}
export default CustomerShowGlass;