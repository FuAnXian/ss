import http from "./http.js"

//登录请求
export function login(params,methods){
 return http({
    url:"/login",
    methods:methods || "post",
    params
  })
}