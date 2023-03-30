
import axios from "axios";

class LensService {
    baseUrl = `http://localhost:8086/lenscart/product/getLens`;
baseUrlAdd= `http://localhost:8086/lenscart/product/addLens`
baseUrlUpdate= `http://localhost:8086/lenscart/product/putLens`
baseUrlUpdateId1= `http://localhost:8086/lenscart/product/getLensById`
    getAllLenses() {
        return axios.get(this.baseUrl);
    }

    deleteLensById(lensId) {
        return axios.delete( "http://localhost:8086/lenscart/product/deleteLens/" + lensId);
    }

    addLens(lens) {
        console.log("inside service" + JSON.stringify(lens));
        return axios.post(this.baseUrlAdd,lens);
    }

    updateLens(lens) {

        alert("lens id in service:" + lens.lensId);
        return axios.put(this.baseUrlUpdate , lens);
    }

    findLensById(lensId) {
        alert("lens id in findLens" + lensId)
        return axios.get(this.baseUrlUpdateId1 + "/" + lensId);
    }

}
export default LensService;

