<template>
    <div class="main">
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

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>

</style>