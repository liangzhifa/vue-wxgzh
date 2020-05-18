<template>
    <div class="experience">
        <van-panel :title="item.title" :desc="item.desc" :class="['my-panel',index%2==0?'card-green':'card-blue']"
                   v-for="(item,index) in listData" :key="index"
                   @click="changeShow(item)" >
            <van-row gutter="8" class="my-van-row">
                <van-col v-for="(tagItem,tagItemIndex) in item.tag " :key="tagItemIndex" >
                    <van-tag round  :color="colorList[tagItemIndex]">{{tagItem}}</van-tag>
                </van-col>
            </van-row>
        </van-panel>

        <van-action-sheet v-model="show" :title="dataItem.title" class="my-action-sheet">
            <div class="content" >
                <van-row gutter="10" class="my-time-company">
                    <van-col span="9">
                       {{dataItem.project_time}}
                    </van-col>
                    <van-col span="2">

                    </van-col>
                    <van-col span="12">{{dataItem.company}}</van-col>
                </van-row>
                <van-row v-if="dataItem.project_img">
                    <img :src="dataItem.img_url" class="city-img" @click="amplificationImg(dataItem.img_url)">
                </van-row>

                <van-collapse v-model="activeName" accordion >
                    <van-collapse-item  name="1" v-if="dataItem.project_desc">
                        <template #title>
                            <div><van-tag mark type="primary">项目描述</van-tag></div>
                        </template>
                        <div class="my-text-space">
                            {{dataItem.project_desc}}
                        </div>
                    </van-collapse-item>
                    <van-collapse-item  name="2" v-if="dataItem.project_module">
                        <template #title>
                            <div><van-tag mark color="#7232dd">功能模块</van-tag></div>
                        </template>
                        <div class="my-text-space">
                            {{dataItem.project_module}}
                        </div>
                    </van-collapse-item>
                    <van-collapse-item name="3">
                        <template #title>
                            <div><van-tag mark type="success">项目职责</van-tag></div>
                        </template>
                        <div class="my-text-space">
                            {{dataItem.project_responsibilities}}
                        </div>
                    </van-collapse-item>
                    <van-collapse-item name="4" v-if="dataItem.project_skill_desc">
                        <template #title>
                            <div><van-tag mark type="warning">技术要点</van-tag></div>
                        </template>
                        <div class="my-text-space">
                            {{dataItem.project_skill_desc}}
                        </div>
                    </van-collapse-item>
                </van-collapse>
            </div>
        </van-action-sheet>
    </div>
</template>

<script>
    import exprienceListData from "../assets/data/data";
    import {ImagePreview} from "vant";

    export default {
        name: "Experience",
        mounted() {
            this.screenWidth=window.screen.width;
        },
        data() {
            return {
                city_img: 'http://images.zhifa.tech/%E5%9F%8E%E5%B8%82%E5%88%86%E5%B8%83%E5%9B%BE.png',
                screenWidth: '',
                activeName: '1',
                show: false,
                colorList: ['#8bd3f2','#b884dd','#986add','#687fdd','#655ADD','#29f585','#f175f5'],
                listData: exprienceListData,
                dataItem: {}

            };
        },
        methods: {
            changeShow(item) {
                //console.log(this.screenWidth)
                this.show = !this.show;
                if (this.show) {
                    this.dataItem = item;
                    if (item.project_desc) {
                        this.activeName =  '1';
                    } else {
                        this.activeName =  '3';
                    }

                }
            },
            amplificationImg(url) {
                ImagePreview({
                    images: [url],
                    closeable: true
                });
            }

        }
    }
</script>

<style scoped lang="less">

    .experience {
        width: 100%;
        height: 100%;
        margin-bottom: 58px;
    }

    .content {
        margin: 7px;
        width: 100%;

    }
    .my-panel {
        background-color: #fff;
        border-radius: 12px;
        margin: 7px 10px;
        padding: 0.3em 4px;
        box-shadow: 0px 5px 14px 3px #ebedf0;
    }
    .my-van-row{
        margin: 2px;
    }
    .project-detail {
        width: 200px;

    }
    .my-action-sheet{
        //width: content-box;
        height: 80%;
        width: 100%;
    }
    .my-time-company{
        margin: 17px auto;
    }
    .my-text-space {
        text-indent: 2em;
    }
    .card-green{
        border: 0.8px solid #0aee627d;
    }

    .card-blue{
        border: 0.8px solid #409eff8f
    }
    .city-img{
        width: 97%;
        height: 150px;
    }
</style>
