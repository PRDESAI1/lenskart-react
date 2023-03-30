import React from 'react';
import GlassService from '../Service/GlassService';
import Glass from '../Model/Glass'
import { Navigate, Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";


    class ShowGlass extends React.Component {
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
                            <th>Delete</th>
                            <th>Update</th>
                               
                                </tr>
                            </thead>
                            <tbody>{
                                this.state.glasses.map((glass) => (
                                    <tr>
                                   <td> <p> Id: {glass.glassId}</p></td>
                                    <td><img src={glass.glassimage} height ={150} width={250}/></td>&nbsp;
                                    <td>
                                  
                                    <p> Name: {glass.glassName}</p>
                                    <p> Brand: {glass.glassBrand}</p>
                                    <p> Price: {glass.glassPrice}$</p>
                                   
                                    <p> Type: {glass.glassType}</p>
                                    <p> Power Range: {glass.glassPowerRange}</p>
                                   
                                    </td>
                                 

                                    <td><button className="button"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                         this.GlassService.deleteGlassById(glass.glassId)
                                                            .then((result) => {
                                                                Navigate()
                                                                this.GlassService.getAllGlasses()
                                                                .then((result2) => {
                                                                    this.setState({ glasses: result2.data });
                                                                })
                                                                .catch((error) => {
                                                                    alert("error");
                                                                });
                                                            })
                                                            .catch((error) => {
                                                                alert("error");
                                                            });
                                                      
                                                      
                                                    }}><div class="trash">  
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
                                                                       <td><Link to={{ pathname: `/glasses/update/${glass.glassId}`}}>  <button className="update">Update</button></Link></td><br></br>
                                   
                                    </tr>
                                ))
                                } </tbody>
                        </table>
                    ) : <div>No glass present</div>
                            }   
                </div>
            </div>
            <Link to={`/glasses/add`}>AddGlass</Link><br></br>
            <Outlet />
            </>
           
        );
    }
    
}
export default ShowGlass;