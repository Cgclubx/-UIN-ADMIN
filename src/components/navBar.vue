<template>
  <div>
     <el-breadcrumb separator-class="el-icon-arrow-right">
     <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
     <el-breadcrumb-item v-if="$route.path!=='/index'" >{{$route.meta.name}}</el-breadcrumb-item>
     <el-breadcrumb-item v-if="$route.path!=='/index'">{{$route.meta.title}}</el-breadcrumb-item>
</el-breadcrumb>
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
  mounted(){
    console.log(this.$router)
  }
};
</script>

<style scoped lang='scss'>

</style>
