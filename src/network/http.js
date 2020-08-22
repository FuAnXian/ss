import axios from "axios";
import element from "element-ui";

// api 地址：http://timemeetyou.com:8889/api/private/v1/
let loading;
 let instance = axios.create({
   baseURL:"http://timemeetyou.com:8889/api/private/v1",
   timeout:10000
 });

 instance.interceptors.request.use(function(config){
  loading = element.Loading.service({
    target:document.getElementById("app"),
    text: "Are you ok ...",
    customClass:"loading",
    background:"#c6d5f37a"
  });
   return config;
 })

 instance.interceptors.response.use(function(body){
   loading.close(),1000
  if(body.status !== 200) {
    return Promise.reject(body);
  }
   return body.data
 },function(err){
   element.message({
     type:"error",
     message:"不知道那个接口出问题了"
   })
 })

 export default  instance;
