<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/me" icon="home-o">
        我
      </van-tabbar-item>
      <van-tabbar-item replace to="/experience" icon="apps-o">
        项目
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="less">
#app{
  background-color: rgb(247,248,250);

}
</style>
