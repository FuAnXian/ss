import axios from "axios";
// api 地址：http://timemeetyou.com:8889/api/private/v1/
let loading;

 let instance = axios.create({
   baseURL:"http://timemeetyou.com:8889/api/private/v1",
   timeout:10000
 });

 instance.interceptors.request.use(function(config){
  // loading = Loading.service({
  //   target:document.getElementById("app"),
  //   text: "Are you ok ...",
  //   customClass:"loading"
  // });
  console.log(config)
   return config;
 })

 instance.interceptors.response.use(function(body){
  // loading.close();
  if(body.status !== 200) {
    return Promise.reject(body);
  }
   return body.data
 })

 export default  instance;
