<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<style  lang="less">
    #app {
        height: 100%;
        background-color: rgb(255, 255, 255);
    }

    html, body {
        height: 100%;
    }
</style>
