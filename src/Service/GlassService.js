import axios from "axios";
class GlassService {
    baseUrl = `http://localhost:8086/lenscart/product/getGlass`
    baseUrladd =`http://localhost:8086/lenscart/product/addGlass`
   
    baseUrlUpdate = `http://localhost:8086/lenscart/product/putGlass`
    baseUrlUpdateId = `http://localhost:8086/lenscart/product/getGlassById`
    getAllGlasses() {
        // alert('inside get all orders')
        return axios.get(this.baseUrl);
    }

    deleteGlassById(glassId) {
        return axios.delete( "http://localhost:8086/lenscart/product/deleteGlass/"+ glassId);
    }

    addGlass(glass) {
        console.log("inside service"+JSON.stringify(glass))
        return axios.post(this.baseUrladd, glass);
    }

    updateGlass(glass) {
      
        return axios.put(this.baseUrlUpdate + "/" +glass.glassId, glass);
    
    }

    findGlassById(glassId) {
      
        return axios.get(this.baseUrlUpdateId +"/"+ glassId);
    }

}

export default GlassService;