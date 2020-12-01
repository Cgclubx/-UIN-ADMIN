<template>
  <div id="app">
    <!-- 背景 -->
    <!-- http://bpic.588ku.com/video_listen/588ku_video/20/07/01/11/42/50/video5efc063aafa97.mp4 -->
    <!-- <video class="bgimg" autoplay="autoplay" loop="loop" muted="muted">
      <source
        class="bgimg"
        src="http://www.pds.gov.cn/images/24152559456.mp4"
        type="video/mp4"
      />
    </video> -->
    <el-card class="box-card">
      <div slot="header" style="padding: 0px" class="clearfix">
        <h2>UNI-ADMIN</h2>
      </div>
      <el-form :model="admin" :ref="admin" class="demo-dynamic">
        <el-form-item
          prop="username"
          label=""
          :rules="[
            { required: true, message: '用户名不能为空', trigger: 'blur' },
          ]"
        >
          <el-input
            type="text"
            prefix-icon="el-icon-user-solid"
            v-model.trim="admin.username"
            placeholder="用户名"
          ></el-input>
        </el-form-item>
        <el-form-item
          style="padding: 0px"
          prop="password"
          :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]"
        >
          <el-input
            type="password"
            prefix-icon="el-icon-lock"
            v-model.trim="admin.password"
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            class="btn btn-block btn-outline-info"
            :loading="loadingbut"
            @click.prevent="logins(admin)"
          >
          	{{loadingbut ? '登录中...' : '立即登录'}}
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>            
  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";
import login from "../api/login";
import "@/assets/bootstrap.css";
export default {
  name: "",
  data() {
    return {
      loadingbut: false, 
      message: "",
      admin: {
        username: "admin",
        password: "admin",
      },
    };
  },
  created() {
  },
  mounted() {
  },
  computed: {},
  methods: {
    // 登陆节流
    logins: _.throttle(function (formName) {
      this.submitForm(formName);
    }, 2000),

    submitForm(formName) {
      console.log(formName);
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.loadingbut = true;
          try {
            let res = await login.login(
              this.admin.username,
              this.admin.password
            );
            if (res.msg === "ok") {
              this.loadingbut = false;
              this.$message("登陆成功");
              this.admin = this.$options.data();
              this.$store.dispatch('info',res)
              this.$router.push("/index")
              sessionStorage.setItem("user_token", res.data.token);
            }
          } catch {
            this.$message.error("登陆失败");
            return false;
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>

<style scoped lang='scss'>
.el-input {
  margin-top: 10px;
}
.el-card {
  min-width: 500px;
  width: 40%;
  min-height: 330px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  height: 330px;
  background: rgba(255, 255, 255, 0.6);
}
h2 {
  color: slategray;
  text-align: center;
}

.bgimg {
  margin: auto;
  position: absolute;
  z-index: -1;
  top: 44%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: visible;
  width: 100%;
}
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>















