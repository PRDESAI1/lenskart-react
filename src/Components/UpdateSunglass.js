import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import SunglassService from "../Service/SunglassService";
import Sunglass from "../Model/Sunglass";
import './stylesheet.css';

function UpdateSunglass() {
    const [state, setState] = useState({ sunglass: new Sunglass() });
    const [error, setError] = useState({
        idError: "",
        nameError: "",
    });
    let isValid = true;

    const priceErr = {};



    if (state.sunglass.price <= 0) {

        priceErr.priceRequired = "sunglass price should not be negative or zero";

        isValid = false;

    }
    let service = new SunglassService();
    const { sunglassid } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        service.findSunglassById(sunglassid).then((result) => {
            alert("inside updated" + JSON.stringify(result.data));
            setState({ sunglass: result.data });
        })
            .catch((error) => {
                alert(error);
            });

        
    }, []);


    return (
        <div>
            <form>
                <div>
                    <input
                        className="form-control"
                        type="text"
                        id="sunglassId"
                        placeholder="sunglass Id"
                        value={state.sunglass.id}
                        readOnly={true}
                    />
                </div>


                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input
                        className="form-control my-2"
                        type="text"
                        id="name"
                        placeholder="Enter sunglass Name"
                        value={state.sunglass.name}
                        onChange={(e) =>
                            setState({
                                sunglass: { ...state.sunglass, name: e.target.value },
                            })
                        }
                    />
                </div>

                {/* brand */}
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input
                        className="form-control my-2"
                        type="text"
                        id="brand"
                        placeholder="Enter brand"
                        value={state.sunglass.brand}
                        onChange={(e) =>
                            setState({
                                sunglass: { ...state.sunglass, brand: e.target.value },
                            })
                        }
                    />
                </div>


                {/* price */}
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input
                        className="form-control my-2"
                        type="number"
                        id="price"
                        placeholder="Enter price"
                        value={state.sunglass.price}
                        onChange={(e) =>
                            setState({
                                sunglass: { ...state.sunglass, price: e.target.value },
                            })
                        }
                    />{Object.keys(priceErr).map((key) => {



                        return <div style={{ color: "red" }}>{priceErr[key]}</div>;



                    })}
                </div>


                {/* image */}
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input
                        className="form-control my-2"
                        type="text"
                        id="image"
                        placeholder="Enter image"
                        value={state.sunglass.image}
                        onChange={(e) =>
                            setState({
                                sunglass: { ...state.sunglass, image: e.target.value },
                            })
                        }
                    />
                </div>



                {/* frameShape */}
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input
                        className="form-control my-2"
                        type="text"
                        id="frameShape"
                        placeholder="Enter frameShape"
                        value={state.sunglass.frameShape}
                        onChange={(e) =>
                            setState({
                                sunglass: { ...state.sunglass, frameShape: e.target.value },
                            })
                        }
                    />
                </div>



                {/* glassColur */}
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input
                        className="form-control my-2"
                        type="text"
                        id="glassColur"
                        placeholder="Enter glassColur"
                        value={state.sunglass.glassColur}
                        onChange={(e) =>
                            setState({
                                sunglass: { ...state.sunglass, glassColur: e.target.value },
                            })
                        }
                    />
                </div>

                {/* weight */}
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input
                        className="form-control my-2"
                        type="number"
                        id="weight"
                        placeholder="Enter glassweight"
                        value={state.sunglass.weight}
                        onChange={(e) =>
                            setState({
                                sunglass: { ...state.sunglass, weight: e.target.value },
                            })
                        }
                    />
                </div>

                {/* frameColor */}
                <div>
                    <div className="alert-danger">{error.nameError}</div>
                    <input
                        className="form-control my-2"
                        type="text"
                        id="frameColor"
                        placeholder="Enter frameColor"
                        value={state.sunglass.frameColor}
                        onChange={(e) =>
                            setState({
                                sunglass: { ...state.sunglass, frameColor: e.target.value },
                            })
                        }
                    />
                </div>










             
                <button
                    className="btn btn-outline-primary mt-3"
                    onClick={(e) => {
                        e.preventDefault();
                        service
                            .updateSunglass(state.sunglass)
                            .then(() => {
                                alert("Sunglass record is updated.");
                                setState({ sunglass: new Sunglass() });
                                navigate("/adminHome/sunglass");
                            })
                            .catch((er) => {
                                alert(er);
                            });
                    }}
                >
                    Update Sunglass
                </button>  <br></br>
                <Link className="btn btn-outline-primary mt-3 ml-3" to='/sunglass'> Cancel</Link>


            </form>
        </div>
    );
}
export default UpdateSunglass;