<template>
  <div class="el-container login" ref="div">
    <div class="login-div">
      <div class="left login-item">
        <div style="width:65%;">
          <img style="width:100%;vertical-align: middle;" src="../assets/img/logo.png" alt />
        </div>
      </div>
      <div class="right login-item">
        <div>
          <input type="text" class="customer-input" v-model="name" placeholder="账号" />
        </div>
        <div>
          <input type="password" class="customer-input" v-model="password" placeholder="密码" />
        </div>
        <el-row>
          <el-button class="btn" @click="login" style="width:100%" type="primary" size="small">登 录</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import {login} from "../network/login.js"
export default {
  name: "login",
  data() {
    return {
        name: "",
        password: "",
    };
  },
  methods: {
    login() {
      if (this.name === "") {
        this.$message({
          type: "warning",
          message: "想啥呢?名字都没有吗",
        });
      } else if (this.password === "") {
        this.$message({
          type: "warning",
          message: "密码都不输入,你是要飞啊！",
        });
      } else {
        console.log(login)
            login({
              username:this.name,
              password:this.password  
            }).then((res)=>{
              console.log(res)
            })
      }
    },
  },
};
</script>

<style scoped>
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(to top left, #53c8ab, #49e1b2);
}
.login-div {
  position: absolute;
  left: 50%;
  display: flex;
  top: 50%;
  transform: translate(-50%, -50%);
  max-width: 600px;
  width: 80%;
  height: 400px;
}
.login-item {
  position: relative;
  width: 50%;
  height: 100%;
  display: inline-block;
  border-radius: 10px;
  box-shadow: 5px 0px 10px #2a2a2a;
}
.btn {
  border: solid 1px #1ca578;
  background-color: #22c691;
  border-radius: 10px;
  margin-top: 20px;
}
.btn:hover {
  border: solid 1px #1ca578;
  background-color: #1fa87d;
}
.left {
  background-color: #bfe5d8;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left::before {
  content: "";
  height: 100%;
  width: 10px;
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(to left, #c9f3e7, #ddf3edd3);
}
.left::after {
  content: "";
  filter: blur(3px);
  height: 10px;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(to top, #c9f3e7, #d4f1e9);
}
.right {
  background-color: #fff;
  box-sizing: border-box;
  padding: 100px 50px;
  z-index: 99;
}
.right div {
  margin-bottom: 20px;
}
.right::after {
  content: "";
  position: absolute;
  right: -60px;
  top: 10%;
  width: 60px;
  height: 20px;
  z-index: 1;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 1px 0px 3px #3a3a3a;
}
.right::before {
  content: "";
  position: absolute;
  z-index: 1;
  right: -75px;
  top: 20%;
  width: 75px;
  height: 20px;
  background-color: #fff;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 2px 0px 5px #3b3b3b;
}
.customer-input {
  display: block;
  color: #2a2a2a;
  width: 100%;
  padding: 8px 0;
  border: none;
  font-size: 0.9rem;
  color: #53c8ab;
  border-bottom: 1px solid rgb(153, 153, 153);
  outline: none;
}
.login-div::after {
  content: "";
  position: absolute;
  left: -50px;
  top: 40%;
  width: 50px;
  height: 20px;
  background-color: #c9f3e7;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: -1px 0px 3px #3a3a3a;
}
.login-div::before {
  content: "";
  position: absolute;
  left: -70px;
  top: 50%;
  width: 70px;
  height: 20px;
  background-color: #c9f3e7;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  box-shadow: 1px 0px 5px #3b3b3b;
}
</style>