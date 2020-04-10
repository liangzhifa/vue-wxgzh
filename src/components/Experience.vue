<template>
    <div class="experience">
        <van-panel :title="item.title" :desc="item.desc" class="my-panel"
                   v-for="(item,index) in listData" :key="index"
                   @click="changeShow(item)" >
            <van-row gutter="0" class="my-van-row">
                <van-col span="5" v-for="(tagItem,tagItemIndex) in item.tag " :key="tagItemIndex" >
                    <van-tag round  :color="colorList[tagItemIndex]">{{tagItem}}</van-tag>
                </van-col>
            </van-row>
        </van-panel>

        <van-action-sheet v-model="show" :title="dataItem.title">
            <div class="content">
                {{dataItem.details}}
            </div>
        </van-action-sheet>
    </div>
</template>

<script>
    export default {
        name: "Experience",
        data() {
            return {
                show: false,
                colorList: ['#8bd3f2','#b884dd','#986add','#687fdd','#655ADD','#29f585','#f175f5'],
                listData: [
                    {
                        title:'项目1',
                        desc:'查看详情',
                        tag:["springboot","mysql","jenkins",'docker'],
                        details:'详情啊1'
                    },
                    {
                        title:'项目2',
                        desc:'查看详情',
                        tag:["springboot","jenkins"],
                        details:'详情啊2'
                    },
                    {
                        title:'项目2',
                        desc:'查看详情',
                        tag:["springboot","jenkins"],
                        details:'详情啊2'
                    },
                    {
                        title:'项目2',
                        desc:'查看详情',
                        tag:["springboot","jenkins"],
                        details:'详情啊2'
                    },
                    {
                        title:'项目2',
                        desc:'查看详情',
                        tag:["springboot","jenkins"],
                        details:'详情啊2'
                    },
                    {
                        title:'项目2',
                        desc:'查看详情',
                        tag:["springboot","jenkins"],
                        details:'详情啊2'
                    },
                    {
                        title:'项目2',
                        desc:'查看详情',
                        tag:["springboot","jenkins"],
                        details:'详情啊2'
                    },
                    {
                        title:'项目2',
                        desc:'查看详情',
                        tag:["springboot","jenkins"],
                        details:'详情啊2'
                    },
                    {
                        title:'项目2',
                        desc:'查看详情',
                        tag:["springboot","jenkins"],
                        details:'详情啊2'
                    }
                ],
                dataItem: {}
            };
        },
        methods: {
            changeShow(item) {
                this.show = !this.show;
                if (this.show) {
                    this.dataItem = item;
                }
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
        margin: 20px;
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

</style>
