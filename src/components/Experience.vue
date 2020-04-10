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

                <van-collapse v-model="activeName" accordion>
                    <van-collapse-item  name="1">
                        <template #title>
                            <div><van-tag mark type="primary">项目描述</van-tag></div>
                        </template>
                        <div class="my-text-space">
                            {{dataItem.project_desc}}
                        </div>
                    </van-collapse-item>
                    <van-collapse-item  name="2">
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
    export default {
        name: "Experience",
        mounted() {
            this.screenWidth=window.screen.width;
        },
        data() {
            return {
                screenWidth: '',
                activeName: '1',
                show: false,
                colorList: ['#8bd3f2','#b884dd','#986add','#687fdd','#655ADD','#29f585','#f175f5'],
                listData: [
                    {
                        title:'四川精准服务系统',
                        company:'德生科技股份有限公司',
                        project_time:'2019.02-2019.3',
                        project_desc: '精准服务系统是公司从产品提供商向产品+运营服务商转变的标志性产品，通过德生精准服务系统的呼叫、短信等功能，支持人社公众服务业务，提高公众满意度。',
                        project_module: '主线功能有智能客服+人工坐席服务、待遇发放短信通知。实现精准社保卡信息客服服务。',
                        project_responsibilities: '负责阿里云短信接口的开发，单条、批量发送、处理短信上行回执；在接口的基础上实现待遇发放短信的提醒功能。',
                        project_skill_desc: '通过线程池异步方式批量发送短信下行通知，提升系统的相应和吞吐量。',
                        desc:'查看详情',
                        tag:["springboot","jpa","oracle",'redis','线程池'],
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
                dataItem: {},
                textarea: '新华社北京4月10日电 中共中央总书记、国家主席、中央军委主席习近平近日就安全生产作出重要指示强调，习近平指出，从2019年的情况看，全国安全生产事故总量、较大事故和重特大事故实现“三个继续下降”，安全生产形势进一步好转，但风险隐患仍然很多，这方面还有大量工作要做。习近平强调，生命重于泰山。各级党委和政府务必把安全生产摆到重要位置，树牢安全发展理念，绝不能只重发展不顾安全，更不能将其视作无关痛痒的事，搞形式主义、官僚主义。要针对安全生产事故主要特点和突出问题，层层压实责任，狠抓整改落实，强化风险防控，从根本上消除事故隐患，有效遏制重特大事故发生。'
            };
        },
        methods: {
            changeShow(item) {
                //console.log(this.screenWidth)
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
        height: 90%;
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
</style>
