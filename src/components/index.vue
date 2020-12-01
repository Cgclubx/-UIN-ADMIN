<template>
  <div>
    <!-- 头部 -->
    <heads></heads>
    <router-view > </router-view>
  </div>
</template>

<script>
import heads from "./header";
import navBar from "./navBar";
export default {
  name: "",
  data() {
    return {
      num: null,
    };
  },
  computed: {},

  mounted() {},
  components: {
    navBar,
    heads,
  },
  methods: {},
};
</script>

<style scoped lang='scss'>
button {
  width: 40px;
}
</style>
