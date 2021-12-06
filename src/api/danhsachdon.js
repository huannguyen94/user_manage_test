import axios from "../../src/plugin/axios";

axios({
    method: 'get',
    url: 'https://dev.api.cpn.haivanexpress.vn/api/v1/rejected-orders',
    responseType: 'stream'
  })