<template>
  <div id="app">
    <router-view style="height:100%" />
  </div>
</template>

<style lang="scss">
#app,body,html{
  padding: 0;
  margin: 0;
  height: 100%;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-to{
  opacity: 1;
}
.fade-enter-active{
  transition:1s;
}


.fade-leave{
  opacity: 1;
}
.fade-leave-to{
  opacity: 0;
}
.fade-leave-active{
  transition:1s;
}

</style>
