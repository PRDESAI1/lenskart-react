import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import Frame from "../Model/Frame";
import FrameService from "../Service/FrameService";
//import { useDispatch, useSelector } from "react-redux";

import "./stylesheet.css";

export default function UpdateFrame() {
  const [state, setState] = useState({ frame: new Frame() });
  //const dispatch = useDispatch()
  const { frameId } = useParams();

  let isValid = true;
  const priceErr = {};

  if (state.frame.price <= 0) {
    priceErr.priceRequired = "price should not be negative";
    isValid = false;
  }


  //const [frame, setFrame] = useState();
  const [error, setError] = useState({
    idError: "",
    nameError: "",
  });

  let service = new FrameService();
  const navigate = useNavigate();

  useEffect(() => {
    alert("frame id in updateFrame(useEffect): " + frameId)
    service
      .findFrameById(frameId)
      .then((result) => {
        alert("inside updated" + JSON.stringify(result.data));
        setState({ frame: result.data });
      })
      .catch((error) => {
        alert(error);
      });


  }, []);







  return (
    <div>
      <h2>Update frame</h2>
      <form>
        <div>
          <input
            className="form-control"
            type="text"
            id="frameId"
            placeholder="Enter Frame Id"
            value={state.frame.frameId}
            readOnly={true}
          />
        </div>


        <div>

          <div className="alert-danger">{error.nameError}</div>

          <input

            className="form-control my-2"

            type="text"

            id="frameImage"

            placeholder="Enter frame images"

            value={state.frame.frameImage}

            onChange={(e) =>

              setState({

                frame: { ...state.frame, frameImage: e.target.value },

              })

            }

          />

        </div>

        <div>
          <div className="alert-danger">{error.nameError}</div>
          <input
            className="form-control my-2"
            type="text"
            id="frameName"
            placeholder="Enter frame Name"
            value={state.frame.frameName}
            onChange={(e) =>
              setState({
                frame: { ...state.frame, frameName: e.target.value },
              })
            }
          />y
        </div>

        {/* color */}
        <div>
          <div className="alert-danger">{error.colorError}</div>
          <input
            className="form-control my-2"
            type="text"
            id="color"
            placeholder="Enter color"
            value={state.frame.color}
            onChange={(e) =>
              setState({
                frame: { ...state.frame, color: e.target.value },
              })
            }
          />
        </div>

        {/* price */}
        <div>
          <div className="alert-danger">{error.priceError}</div>
          <input
            className="form-control my-2"
            type="number"
            id="price"
            placeholder="Enter price"
            value={state.frame.price}
            onChange={(e) =>
              setState({
                frame: { ...state.frame, price: e.target.value },
              })
            }
         
            />
            <br></br>

          {Object.keys(priceErr).map((key) => {

              return <div style={{ color: "red" }}>{priceErr[key]}</div>;

            })}
        </div>

        {/* desc */}
        <div>
          <div className="alert-danger">{error.descError}</div>
          <input
            className="form-control my-2"
            type="text"
            id="desc"
            placeholder="Enter desc"
            value={state.frame.desc}
            onChange={(e) =>
              setState({
                frame: { ...state.frame, desc: e.target.value },
              })
            }
          />
        </div>

        {/* shape */}
        <div>
          <div className="alert-danger">{error.shapeError}</div>
          <input
            className="form-control my-2"
            type="text"
            id="shape"
            placeholder="Enter shape"
            value={state.frame.shape}
            onChange={(e) =>
              setState({
                frame: { ...state.frame, shape: e.target.value },
              })
            }
          />
        </div>

        {/* size */}
        <div>
          <div className="alert-danger">{error.sizeError}</div>
          <input
            className="form-control my-2"
            type="text"
            id="size"
            placeholder="Enter size"
            value={state.frame.size}
            onChange={(e) =>
              setState({
                frame: { ...state.frame, size: e.target.value },
              })
            }
          />
        </div>

        <button
          className="btn btn-outline-primary mt-3"
          onClick={(e) => {
            e.preventDefault();
            console.log("in button")
            alert(JSON.stringify(state.frame))
            service
              .updateFrame(state.frame)
              .then(() => {
                alert("Frame record is updated.");
                setState({ frame: new Frame() });

                navigate("/adminHome/frame");
              })
              .catch((er) => {
                alert(er);
              });
          }}
        >
          Update Frame
        </button>

        <Link className="btn btn-outline-primary mt-3 ml-3" to='/adminHome/frame'>Cancel</Link>
      </form>

    </div>
  );
}
