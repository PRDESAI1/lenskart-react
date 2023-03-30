import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CartService from "../Service/CartService";
import Cart from "../Model/Cart";
import { useState } from "react";

function AddCart() {
    const navigate = useNavigate();
    let service = new CartService();
    const [state, setState] = useState({ cart: new Cart() });
    const [customerIdErr, setcustomerIdErr] = useState("");
    const [productIdErr, setproductIdErr] = useState("");
    
  
    const formValidation = () => {
      alert("validation");
      let isValid = true;
      const customerIdErr = {};
      const productIdErr = {};
     
  
      alert(state.cart.customerId);
  
      if (state.cart.customerId.trim().length <= 0) {
        customerIdErr.customerIdRequired = "customerId is required";
        isValid = true;
      }
      if (state.cart.productId.trim().length <= 0) {
        productIdErr.productIdRequired = "productId is required";
        isValid = false;
      }
      
  
      setcustomerIdErr(customerIdErr);
      setproductIdErr(productIdErr);
     
  
      return isValid;
    };
  
    
  
    return (
      <div>
        <div>
          <form>
           
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="Enter customerId"
                value={state.cart.customerId}
                onChange={(e) =>
                  setState({
                    cart: {
                      ...state.cart,
                     
                      customerId: e.target.value,
                    },
                  })
                }
              />
  
              {Object.keys(customerIdErr).map((key) => {
                return <div style={{ color: "red" }}>{customerIdErr[key]}</div>;
              })}
            </div>
            <div>
              <input
                className="form-control"
                type="text"
                placeholder="Enter productId"
                value={state.cart.productId}
                onChange={(e) =>
                  setState({
                    cart: {
                      ...state.cart,
                      // ...state.cart.cart,
                      productId: e.target.value,
                    },
                  })
                }
              />
              <br></br>
              {Object.keys(productIdErr).map((key) => {
                return <div style={{ color: "red" }}>{productIdErr[key]}</div>;
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
                  .AddCart(state.cart)
                  .then((result) => {
                    alert("Cart is added in database.");
                    //navigate("");
                  })
                  .catch((error2) => {
                    alert(error2);
                  });
              }
            }}
          >
            Add Cart
          </button>
         
          <Link className="btn btn-outline-primary mt-3 ml-3" to='/adminHome/cart'>Cancel</Link>
           
          
        </form>
      </div>
    </div>
  );
}
export default AddCart;