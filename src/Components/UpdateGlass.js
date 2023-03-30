import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import GlassService from "../Service/GlassService";
import Glass from "../Model/Glass";
//import { updateGlass } from "../redux/glass/glassActions";
//import { useDispatch, useSelector } from "react-redux"


export default function UpdateGlass() {
   

    const [state, setState] = useState({ glass: new Glass() });
    const { glassId } = useParams();
    const [glass, setGlass] = useState();
    let isValid = true;

    const glassPriceErr = {};



    if (state.glass.glassPrice <= 0) {

        glassPriceErr.glassPriceRequired = "Price should not be negative";

        isValid = false;

    }
    const [error] = useState({
        idError: "",
        nameError: ""
    })

    

    let service = new GlassService();
    const navigate = useNavigate();


    useEffect(() => {
    
        service.findGlassById(glassId).then((result) => {
         
            setState({ glass: result.data });
        }).catch((error) => {
            alert(error);
        });

    }, []);
    return (
        <div>
            <h2>Update glass</h2>
            <form>
                {/* glassId */}
                <div>
                    <input className="form-control"
                        type="text"
                        id="glassId"
                        placeholder="Enter Glass Id"
                        value={state.glass.glassId}
                        readOnly={true}
                    />
                </div>

               
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input
                        className="form-control my-2"
                        type="text"
                        id="glassName"
                        placeholder="Enter glass Name"
                        value={state.glass.glassName}
                        onChange={(e) =>
                            setState({
                                glass: { ...state.glass, glassName: e.target.value },
                            })
                        }
                    />
                </div>



                {/* glassBrand */}
                <div>
                    <div className="alert-danger">{error.brandError}</div>
                    <input className="form-control"
                        type="text"
                        id="glassBrand"
                        placeholder="Enter Glass Brand"
                        value={state.glass.glassBrand}
                        onChange={(e) => setState({ glass: { ...state.glass, glassBrand: e.target.value }, })}
                    />
                </div>

                {/* glassPrice */}
                <div>
                    <div className="alert-danger">{error.priceError}</div>
                    <input className="form-control my-2"
                        type="number"
                        id="glassPrice"
                        placeholder="Enter Glass Price"
                        value={state.glass.glassPrice}
                        onChange={(e) =>
                            setState({
                                glass: { ...state.glass, glassPrice: e.target.value },
                            })}
                    /><br></br>

                    {Object.keys(glassPriceErr).map((key) => {

                            return <div style={{ color: "red" }}>{glassPriceErr[key]}</div>

                        })}
                </div>

                {/* glassImage */}
                <div>
                    <div className="alert-danger">{error.imageError}</div>
                    <input className="form-control"
                        type="text"
                        id="glassimage"
                        placeholder="Enter Glass Image"
                        value={state.glass.glassimage}
                        onChange={(e) => setState({ glass: { ...state.glass, glassimage: e.target.value }, })}
                    />
                </div>

                {/* glassType */}
                <div>
                    <div className="alert-danger">{error.typeError}</div>
                    <input className="form-control my-2"
                        type="text"
                        id="glassType"
                        placeholder="Enter Glass Type"
                        value={state.glass.glassType}
                        onChange={(e) =>
                            setState({
                                glass: { ...state.glass, glassType: e.target.value },
                            })}
                    />
                </div>

                {/* glassPowerRange */}
                <div>
                    <div className="alert-danger">{error.powerrangeError}</div>
                    <input className="form-control"
                        type="number"
                        id="glassPowerRange"
                        placeholder="Enter Glass PowerRange"
                        value={state.glass.glassPowerRange}
                        onChange={(e) => setState({ glass: { ...state.glass, glassPowerRange: e.target.value }, })}
                    />
                </div>

                <button className="btn btn-outline-primary mt-3" onClick={
                    (e) => {
                        e.preventDefault();
                        console.log("in button");
                        alert(JSON.stringify(state.glass))
                        service
                            .updateGlass(state.glass)
                            .then(() => {
                                alert('Glass record is updated.');
                                setState({ glass: new Glass() })
                                navigate('/adminHome/glasses');
                            })
                            .catch((er) => {
                                alert(er);
                            });
                    }
                }>
                    Update Glass
                </button>
                <Link className="btn btn-outline-primary mt-3 ml-3" to='/adminHome/glasses'>Cancel</Link>
            </form>
        </div>
    );
}
//export default UpdateGlass;