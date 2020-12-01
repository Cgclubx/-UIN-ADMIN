<template>
  <div>
           <!-- 左侧logo -->
      <el-header style="height: 60px; line-height:60px;padding: 0;background:#545c64;width:100%">
         <h3 style="float:left;line-height:60px;margin: 0 0 0 20px;color:white">
          <span class="titles">UNI-ADMIN</span>
          </h3>
          <!-- 右侧导航 -->
        <el-menu
          :default-active="0"
          class="el-menu-demo"
          style="height:60px;float:right;"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          mode="horizontal">
          <el-menu-item index="1" @click="$router.push('/index')">首页</el-menu-item>
          <el-menu-item index="2"  @click="$router.push('/shop')">商品</el-menu-item>
          <el-menu-item index="3"  @click="$router.push('/order')">订单</el-menu-item>
          <el-menu-item index="4"  @click="$router.push('/user')">会员</el-menu-item>
          <el-menu-item index="5"  @click="$router.push('/set')">设置</el-menu-item>
            <el-submenu index="6">
            <template slot="title" >
              <img :src="logo" alt="" class="mybaby-img">
               admin </template>
            <el-menu-item index="6-1">修改</el-menu-item>
            <el-menu-item @click="clerall">退出登陆</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-header>
  </div>
</template>

<script>
import login from "@/api/login";
export default {
  name: '',
  data() {
    return {
       logo: require('@/assets/user.jpg'),
    };
  },
  computed:{
  },
  methods: {
      // 退出登陆
   async clerall() {
    //  获取数据
     let res = await login.logout();
           if (res.msg == "ok") {
          sessionStorage.clear();
          this.$message.error("已退出登陆");
          this.$router.push("/login");
        }
    },
  },
};
</script>

<style scoped lang='scss'>
.mybaby-img{
  width: 30px;
  height: 30px;
  border-radius: 100%;
}
.titles:hover{
  color:#CCD4DA;
}
</style>
