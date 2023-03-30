import React, { useState } from "react";
import { useNavigate } from "react-router";
import FrameService from "../Service/FrameService";
import Frame from "../Model/Frame";
import { Link } from "react-router-dom";
// import { addFrame } from "../redux/frame/frameActions";
// import { connect } from "react-redux";
import "./stylesheet.css";

function AddFrame() {
  const navigate = useNavigate();
  let service = new FrameService();
  const [state, setState] = useState({ frame: new Frame() });
  const [frameIdErr, setframeIdErr] = useState("");
  const [frameNameErr, setframeNameErr] = useState("");
  const [colorErr, setcolorErr] = useState("");
  const [priceErr, setpriceErr] = useState("");
  const [descErr, setdescErr] = useState("");
  const [shapeErr, setshapeErr] = useState("");
  const [sizeErr, setsizeErr] = useState("");

  const formValidation = () => {
    alert("validation");
    let isValid = true;
    const frameIdErr = {};
    const frameNameErr = {};
    const colorErr = {};
    const priceErr = {};
    const shapeErr = {};
    const sizeErr = {};

    alert(state.frame.frameId);

    if (state.frame.frameId.trim().length <= 0) {
      //frameIdErr.frameIdRequired = "Frame ID is required";
      isValid = true;
    }
    if (state.frame.frameName.trim().length <= 0) {
      frameNameErr.frameNameRequired = "frame Name is required";
      isValid = false;
    }
    if (state.frame.color.trim().length <= 0) {
      colorErr.colorRequired = "color is required";
      isValid = false;
    }
    if (state.frame.price.trim().length <= 0) {
      priceErr.priceRequired = "price is required";
      isValid = false;
    }
    if (state.frame.shape.trim().length <= 0) {
      shapeErr.shapeRequired = "shape is required";
      isValid = false;
    }

    if (state.frame.size.trim().length <= 0) {
      sizeErr.sizeRequired = "size is required";
      isValid = false;
    }
    if (state.frame.price <= 0) {
      priceErr.priceRequired = "price should not negative";
      isValid = false;
    }

    setframeIdErr(frameIdErr);
    setframeNameErr(frameNameErr);
    setcolorErr(colorErr);

    setpriceErr(priceErr);
    setdescErr(descErr);
    setshapeErr(shapeErr);
    setsizeErr(sizeErr);

    return isValid;
  };

  

  return (
    <div>
      <div>
        <form>
          <div>
           


            <br></br>
            {Object.keys(frameIdErr).map((key) => {
              return <div style={{ color: "red" }}>{frameIdErr[key]}</div>;
            })}
          </div>

          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter frame image"
              value={state.frame.frameImage}
              onChange={(e) =>
                setState({
                  frame: {
                    ...state.frame,
                    // ...state.frame.cart,
                    frameImage: e.target.value,
                  },
                })
              }
            />
          </div>



          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter frame Name"
              value={state.frame.frameName}
              onChange={(e) =>
                setState({
                  frame: {
                    ...state.frame,
                    // ...state.frame.cart,
                    frameName: e.target.value,
                  },
                })
              }
            />

            {Object.keys(frameNameErr).map((key) => {
              return <div style={{ color: "red" }}>{frameNameErr[key]}</div>;
            })}
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter frame color"
              value={state.frame.color}
              onChange={(e) =>
                setState({
                  frame: {
                    ...state.frame,
                    // ...state.frame.cart,
                    color: e.target.value,
                  },
                })
              }
            />
            <br></br>
            {Object.keys(colorErr).map((key) => {
              return <div style={{ color: "red" }}>{colorErr[key]}</div>;
            })}
          </div>
          <div>
            <input
              className="form-control"
              type="number"
              placeholder="Enter frame price"
              value={state.frame.price}
              onChange={(e) =>
                setState({
                  frame: {
                    ...state.frame,
                    // ...state.frame.cart,
                    price: e.target.value,
                  },
                })
              }
            />
            <br></br>
            {Object.keys(priceErr).map((key) => {
              return <div style={{ color: "red" }}>{priceErr[key]}</div>;
            })}
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter frame desc"
              value={state.frame.desc}
              onChange={(e) =>
                setState({
                  frame: {
                    ...state.frame,
                    // ...state.frame.cart,
                    desc: e.target.value,
                  },
                })
              }
            />
            <br></br>
            {Object.keys(descErr).map((key) => {
              return <div style={{ color: "red" }}>{descErr[key]}</div>;
            })}
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter frame shape"
              value={state.frame.shape}
              onChange={(e) =>
                setState({
                  frame: {
                    ...state.frame,
                    // ...state.frame.cart,
                    shape: e.target.value,
                  },
                })
              }
            />
            <br></br>
            {Object.keys(shapeErr).map((key) => {
              return <div style={{ color: "red" }}>{shapeErr[key]}</div>;
            })}
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Enter frame size"
              value={state.frame.size}
              onChange={(e) =>
                setState({
                  frame: {
                    ...state.frame,
                    // ...state.frame.cart,
                    size: e.target.value,
                  },
                })
              }
            />
            <br></br>
            {Object.keys(sizeErr).map((key) => {
              return <div style={{ color: "red" }}>{sizeErr[key]}</div>;
            })}
          </div>
          
          
         

          <button

            className="btn"
            onClick={(e) => {
              e.preventDefault();
              let isValid = formValidation();
              if (!isValid) {
                return false;
              } else {
                service
                  .addFrame(state.frame)
                  .then((result) => {
                    alert("Frame is added in database.");
                    navigate("/adminHome/frame");
                  })
                  .catch((error2) => {
                    alert(error2);
                  });
              }
            }}
          >
            Add Frame
          </button>

          <Link className="btn btn-outline-primary mt-3 ml-3" to='/adminHome/frame'>Cancel</Link>


        </form>
      </div>
    </div>
  );
}


export default AddFrame;
