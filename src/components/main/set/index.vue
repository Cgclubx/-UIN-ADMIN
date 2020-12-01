<template>
  <div style="height:92%">
      <el-menu
      style="height: 100%; width: 15%; float: left; box-sizing: border-box"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      active-text-color="teal"
      router
    >
      <el-menu-item index="/set/base">
        <i class="el-icon-s-home"></i>
        <span slot="title">基础设置</span>
      </el-menu-item>
      <el-menu-item index="/set/express">
        <i class="el-icon-picture"></i>
        <span slot="title">物流设置</span>
      </el-menu-item>
      <el-menu-item index="/set/manager">
        <i class="el-icon-s-claim"></i>
        <span slot="title">管理员设置</span>
      </el-menu-item>
      <el-menu-item index="/set/payment">
        <i class="el-icon-s-claim"></i>
        <span slot="title">交易设置</span>
      </el-menu-item>
       <el-menu-item>
        <i class="el-icon-s-claim"></i>
        <span slot="title">测试设置</span>
      </el-menu-item>
    </el-menu>
    <router-view id="mains"></router-view>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
    };
  },
  computed:{
  },
  methods: {},
};
</script>

<style scoped lang='scss'>

</style>
