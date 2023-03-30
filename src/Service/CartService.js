import axios from "axios";
class CartService {


    baseUrl = `http://localhost:8086/lenscart/customer/addCart`;
    baseUrlfind = `http://localhost:8086/lenscart/product`;

    addFrame(Cart) {
        console.log("inside service" + JSON.stringify(Cart));
        return axios.post(this.baseUrl, Cart);
      }
      
      findFrameById(productId) {
        alert("frame id in findFrame"+productId)
        return axios.get(this.baseUrl + "/" + productId);
      }
}
export default CartService;