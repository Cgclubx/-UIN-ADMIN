<template>
  <div style="height:92%" >
       <el-menu
      style="height:100%;width: 15%; box-sizing: border-box;float:left;"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      active-text-color="teal"
      router
    >
      <el-menu-item index="/index">
        <i class="el-icon-s-home"></i>
        <span slot="title">后台首页</span>
      </el-menu-item>
      <el-menu-item index="/image">
        <i class="el-icon-picture"></i>
        <span slot="title">相册管理</span>
      </el-menu-item>
      <el-menu-item index="/shop/goods">
        <i class="el-icon-s-claim"></i>
        <span slot="title">商品列表</span>
      </el-menu-item>
    </el-menu>
    <router-view id="mains" style="width: 85%;height:100%;float:left;padding: 20px;overflow:auto;"></router-view>
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
