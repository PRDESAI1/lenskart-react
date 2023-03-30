import axios from "axios";

class FrameService {
  baseUrl = `http://localhost:8086/lenscart/product`;
  updatebaseUrl=`http://localhost:8086/lenscart/product/upadateFrame`;

  getAllFrames() {
    return axios.get(this.baseUrl);
  }

  deleteFrameById(frameId) {
    return axios.delete(this.baseUrl + "/" + frameId);
  }

  addFrame(frame) {
    console.log("inside service" + JSON.stringify(frame));
    return axios.post(this.baseUrl, frame);
  }

  updateFrame(frame) {
     
     alert("frame id in service:"+frame.frameId);
    return axios.put(this.updatebaseUrl+ "/" +frame.frameId, frame);
  }

  findFrameById(frameId) {
    alert("frame id in findFrame"+frameId)
    return axios.get(this.baseUrl + "/" + frameId);
  }

}
export default FrameService;
