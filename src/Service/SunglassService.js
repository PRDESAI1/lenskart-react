import axios from "axios";
class SunglassService {
    baseUrlUpdateId ='http://localhost:8086/lenscart/product/getSunglassById'
    baseUrlUpdate = 'http://localhost:8086/lenscart/product/updateSunglass'
    baseUrladd = 'http://localhost:8086/lenscart/product/addSunglass'
    baseUrl = 'http://localhost:8086/lenscart/product/getSunglass'
    getAllSunglasss() {
       
        return axios.get(this.baseUrl);
    }

    deleteSunglassById(id) {
        return axios.delete("http://localhost:8086/lenscart/product/deleteSunglass/" + id);

    }

    addSunglass(sunglass) {
        console.log("inside service" + JSON.stringify(sunglass))
      ;
        return axios.post(this.baseUrladd, sunglass);
    }

    
    updateSunglass(sunglass) {
        return axios.put(this.baseUrlUpdate+"/"+sunglass.id, sunglass);
    }

    findSunglassById(id) {
        return axios.get(this.baseUrlUpdateId + '/' + id);
    }
    
}
export default SunglassService;