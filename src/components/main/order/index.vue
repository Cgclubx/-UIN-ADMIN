<template>
  <div style="height:92%">
       <el-menu
      style="height: 100%; width: 15%; float: left; box-sizing: border-box"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      active-text-color="teal"
      router
    >
      <el-menu-item index="/order/order">
        <i class="el-icon-s-home"></i>
        <span slot="title">订单管理</span>
      </el-menu-item>
      <el-menu-item index="/order/invoice">
        <i class="el-icon-picture"></i>
        <span slot="title">发票管理</span>
      </el-menu-item>
      <el-menu-item index="/order/after-sale">
        <i class="el-icon-s-claim"></i>
        <span slot="title">售后服务</span>
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
