<template>
  <div class="el-container login">
    <div class="login-div">
      <div class="left login-item"></div>
      <div class="right login-item">
        <div>
          <input type="text" class="customer-input" placeholder="账号"/>
        </div>
        <div>
          <input type="password" class="customer-input" placeholder="密码"/>
        </div>
        <el-row >
           <el-button style="width:100%" type="primary" size="small">主要按钮</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      formData: {
        sizeForm: {
          name: "",
        },
      },
    };
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
.left {
  background-color: #bfe5d8;
  overflow: hidden;
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
  padding: 50px 50px;
}
.right div{
  margin-bottom: 20px;;
}
.customer-input {
  display: block;
  color: #2a2a2a;
  width: 100%;
  padding:8px 0;
  border: none;
  border-bottom: 1px solid rgb(153, 153, 153);
  outline: none;
}
</style>