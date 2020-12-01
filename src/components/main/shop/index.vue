<template>
  <div style="height:92%">
        <el-menu
      style="height: 100%; width: 15%; float: left; box-sizing: border-box"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      active-text-color="teal"
      router
    >
      <el-menu-item index="/shop/goods">
        <i class="el-icon-s-home"></i>
        <span slot="title">商品列表</span>
      </el-menu-item>
      <el-menu-item index="/shop/category">
        <i class="el-icon-picture"></i>
        <span slot="title">分类列表</span>
      </el-menu-item>
      <el-menu-item index="/shop/sku">
        <i class="el-icon-s-claim"></i>
        <span slot="title">商品规格</span>
      </el-menu-item>
      <el-menu-item index="/shop/type">
        <i class="el-icon-s-claim"></i>
        <span slot="title">商品类型</span>
      </el-menu-item>
      <el-menu-item index="/shop/comment">
        <i class="el-icon-s-claim"></i>
        <span slot="title">商品评论</span>
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
