<template>
  <div style="height:92%">
       <el-menu
      style="height: 100%; width: 15%; float: left; box-sizing: border-box"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      active-text-color="teal"
      router
    >
      <el-menu-item index="/user/user-list">
        <i class="el-icon-s-home"></i>
        <span slot="title">会员列表</span>
      </el-menu-item>
      <el-menu-item index="/user/user-level">
        <i class="el-icon-picture"></i>
        <span slot="title">会员等级</span>
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
