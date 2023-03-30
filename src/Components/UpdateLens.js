
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import LensService from "../Service/LensService";
import Lens from "../Model/Lens";
import './stylesheet.css'
//import { updateLens } from "../redux/lens/lensActions";
//import { useDispatch, useSelector } from "react-redux"

export default function UpdateLens() {
   
    const [state, setState] = useState({ lens: new Lens() });
    const { lensId } = useParams();
    const [lens, setLens] = useState();
    const [error] = useState({
        idError: "",
        nameError: ""
    })

    let service = new LensService();
    const navigate = useNavigate();

    useEffect(() => {
        //  alert("lens id in update lens" + lensId)
        service.findLensById(lensId).then((result) => {
            // alert("inside updated" + JSON.stringify(result.data));
            setState({ lens: result.data });
        }).catch((error) => {
            alert(error);
        });

    }, []);
    return (
        <div>
            <h2>Update lens</h2>
            <form>

                {/* lensId */}
                <div>
                    <input className="form-control"
                        type="text"
                        id="lensId"
                        placeholder="Enter Lens Id"
                        value={state.lens.lensId}
                        readOnly={true}
                    />
                </div>

                {/* lensBrand */}
                <div>
                    <div className="alert-danger">{error.brandError}</div>
                    <input className="form-control"
                        type="text"
                        id="lensBrand"
                        placeholder="Enter Lens Brand"
                        value={state.lens.lensBrand}
                        onChange={(e) => setState({ lens: { ...state.lens, lensBrand: e.target.value }, })}
                    />
                </div>

                {/* lensPrice */}
                <div>
                    <div className="alert-danger">{error.priceError}</div>
                    <input className="form-control my-2"
                        type="number"
                        id="lensPrice"
                        placeholder="Enter Lens Price"
                        value={state.lens.lensPrice}
                        onChange={(e) =>
                            setState({
                                lens: { ...state.lens, lensPrice: e.target.value },
                            })}
                    />
                </div>

                {/* lensImage */}
                <div>
                    <div className="alert-danger">{error.imageError}</div>
                    <input className="form-control"
                        type="text"
                        id="lensimage"
                        placeholder="Enter Lens Image"
                        value={state.lens.lensimage}
                        onChange={(e) => setState({ lens: { ...state.lens, lensimage: e.target.value }, })}
                    />
                </div>

                {/* lensShape */}
                <div>
                    <div className="alert-danger">{error.typeError}</div>
                    <input className="form-control my-2"
                        type="text"
                        id="lensShape"

                        placeholder="Enter LensShape "
                        value={state.lens.lensShape}
                        onChange={(e) =>
                            setState({
                                lens: { ...state.lens, lensShape: e.target.value },
                            })}
                    />
                </div>

                {/* lensColor */}
                <div>
                    <div className="alert-danger">{error.powerrangeError}</div>
                    <input className="form-control"
                        type="text"
                        id="lensColor"
                        placeholder="Enter Lens Color"
                        value={state.lens.lensColor}
                        onChange={(e) => setState({ lens: { ...state.lens, lensColor: e.target.value }, })}
                    />
                </div>


                {/* lensQuntity */}
                <div>
                    <div className="alert-danger">{error.typeError}</div>
                    <input className="form-control my-2"
                        type="text"
                        id="lensQuntity"
                        placeholder="Enter Lens Quntity"
                        value={state.lens.lensQuntity}
                        onChange={(e) =>
                            setState({
                                lens: { ...state.lens, lensQuntity: e.target.value },
                            })}
                    />
                </div>

                <button className="btn btn-outline-primary mt-3" onClick={
                    (e) => {
                        e.preventDefault();
                        console.log("in button");
                        alert(JSON.stringify(state.lens))
                        service
                            .updateLens(state.lens)
                            .then(() => {
                                alert('Lens record is updated.');
                                setState({ lens: new Lens() })
                                navigate('/adminHome/lens');
                            })
                            .catch((er) => {
                                alert(er);
                            });
                    }
                }>

                    Update Lens
                </button>
                <Link className="btn btn-outline-primary mt-3 ml-3" to='/adminHome/lens'>Cancel</Link>
            </form>
        </div>
    );
}













