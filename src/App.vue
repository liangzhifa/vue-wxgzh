<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <van-tabbar route>
      <van-tabbar-item replace to="/me" icon="home-o">
        个人信息
      </van-tabbar-item>
      <van-tabbar-item replace to="/experience" icon="apps-o">
        项目介绍
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<style scoped lang="less">
#app{
  background-color: rgb(247,248,250);

}
</style>
