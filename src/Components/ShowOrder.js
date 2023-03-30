
import React from 'react';
import SunglassService from '../Service/SunglassService';
import Sunglass from '../Model/Sunglass'
import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";


class ShowOrder extends React.Component {
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

                      <th> Image</th> &nbsp;

                      <th>Details</th> 

                      <th>Delete</th> 

                      <th>Update</th>

                    </tr>
                  </thead>
                  <tbody>{
                    this.state.sunglass.map((sunglass) => (

                      <tr>
                        
                        <td>{sunglass.id}</td> &nbsp;
                        <td><img src={sunglass.image} height={150} width={150} /></td> &nbsp;
                        <td>
                          <p>Name:{sunglass.name}</p>
                          <p>Brand:{sunglass.brand}</p>
                          <p>Price:{sunglass.price}</p>
                          <p>FrameShape:{sunglass.frameShape}</p>
                          <p>GlassColor:{sunglass.glassColur}</p>
                          <p>Weight:{sunglass.weight}</p>
                          <p>FrameColor:{sunglass.frameColor}</p>

                        </td>


                       

                        <td>
                          <button
                            className="button"
                            onClick={(e) => {
                              e.preventDefault();
                              this.SunglassService.deleteSunglassById(sunglass.id)
                                .then((result) => {
                                 
                                  this.SunglassService.getAllSunglasss()
                                    .then((result2) => {
                                      this.setState({ sunglass: result2.data });
                                      
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
                        <td><Link to={{ pathname: `/sunglass/update/${sunglass.id}` }}> <button className='update'>Update</button></Link></td>
                      </tr>
                    ))
                  } </tbody>
                </table>
              ) : <div>No order present</div>
            }
          </div>
        </div>
        <Link to={`/sunglass/add`}>AddSunglass</Link><br></br>
        <Outlet />
      </>

    );
  }

}
export default ShowOrder