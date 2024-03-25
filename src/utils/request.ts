import axios from 'axios';
import { toastShow } from './toast';

axios.defaults.withCredentials = false;

// request interceptor
axios.interceptors.request.use(
  (config) => {
    const userToken = 'xxxxxxxxxxx'

    // do something before request is sent
    if (userToken) {
      // let each request carry token
      config.headers.Authorization = `Bearer ${userToken}`;
    }

    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
axios.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  async (response) => {
    const { config, data } = response;

    // @ts-ignore
    const { showErrorMsg = true } = config || {};
    // if the custom code is not 200, it is judged as an error.
    if (data.code !== 200) {
        if(showErrorMsg){
            toastShow(data.msg)
        }
       
        return Promise.reject({code: data.code,msg: data.msg || 'Error'})
     } else {
       return data
     }

  },
  (error) => {
    console.error('err' + error);
    toastShow(error.message)
    return Promise.reject({ code: 1000, msg: error.message });
  }
);

export default axios