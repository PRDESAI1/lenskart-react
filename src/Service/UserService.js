// import axios from "axios";
var axios = require('axios');

class UserService {
    baseUrl ='http://localhost:8086/lenscart/customer/registration'
    loginUrl='http://localhost:8086/lenscart/product/adminLogin'
    cusLogin='http://localhost:8086/lenscart/customer/login'
    addNewCustomer(Register) {
        console.log("inside service"+JSON.stringify(Register))
        return axios.post(this.baseUrl,Register)
        
    }

    checkAdminLogin(login){
        console.log("inside service"+JSON.stringify(login))
        return axios.post(this.loginUrl,login)
    }
    checkCustomerLogin(Register){
        console.log("inside service"+JSON.stringify(Register))
        return axios.post(this.cusLogin,Register)
    }
    
}
export default UserService;
// module.exports = {

//     UserService

// }