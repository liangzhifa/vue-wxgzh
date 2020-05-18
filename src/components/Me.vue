<template>
    <div class="me">
        <div class="me-swipe">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(image, index) in images" :key="index" @click="openSwipe(index)">
                    <img v-lazy="image"/>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- closeable 模式，在右侧显示关闭按钮 -->
        <van-notice-bar color="#1989fa"
                        background="#ecf9ff"
                        mode="closeable"
                        left-icon="volume-o"
        >
            {{notice.msg}}
        </van-notice-bar>

        <van-divider/>
        <div>
            <van-row>
                <van-col span="6">
                    <van-image class="my-head-img"
                               round
                               width="4.5rem"
                               height="4.5rem"
                               fit="cover"
                               :src="lzf.my_head_img"
                    />
                </van-col>
                <van-col span="9">
                    <h4>{{lzf.school}}</h4>
                </van-col>
                <van-col span="9">
                    <h4>{{lzf.profession}}</h4>
                </van-col>
            </van-row>
        </div>
        <van-divider/>
        <div>
            <van-collapse v-model="activeName" accordion>
                <van-collapse-item v-for="(item,itemIndex) in listData" :title="item.title" :name="itemIndex"
                                   :key="itemIndex" :icon="item.icon">
                    <div :class="['card',cardItemIndex%2==0?'card-green':'card-blue' ]"
                         v-for="(cardItem,cardItemIndex) in item.cardData" :key="cardItemIndex">
                        <!--<van-row gutter="8" v-if="cardItem.skill">

                            <van-col span="24">{{cardItem.skill}}</van-col>
                        </van-row>-->
                        <div v-if="cardItem.skill" class="my-skill">
                            {{cardItem.skill}}
                        </div>
                        <div v-if="cardItem.enterprise" class=""><!-- 居中 -->
                            <van-row type="flex" justify="center">
                                <!--<van-col span="12"> {{cardItem.time}}</van-col>-->
                                <van-col span="24">
                                    <van-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">
                                        {{cardItem.enterprise}}
                                    </van-divider>

                                </van-col>
                            </van-row>

                            <div class="my-skill" v-if="cardItem.contents"
                                 v-for="(workItem,workIndex) in cardItem.contents" :key="workIndex">
                                {{workItem.work}}
                            </div>

                        </div>
                        <van-row gutter="1" v-else>
                            <van-col span="6">{{cardItem.time}}</van-col>
                            <van-col span="11">{{cardItem.type}}</van-col>
                            <van-col span="7">{{cardItem.award}}</van-col>
                        </van-row>
                    </div>
                </van-collapse-item>
            </van-collapse>
        </div>
    </div>
</template>

<script>
    import {ImagePreview} from "vant";

    export default {
        name: "Me",
        mounted() {
            this.getUserList();
        },
        methods: {
            async getUserList() {
                /*const {data: res} = await this.$http.get('table/user/?page=1&limit=10');
                console.log(res);*/
            },
            openSwipe(index) {
                ImagePreview({
                    images: this.images,
                    closeable: true,
                    startPosition: index
                });
            }

        },
        data() {
            return {
                lzf: {
                    school: "广东海洋大学",
                    profession: "软件工程",
                    my_head_img: "http://images.zhifa.tech/me.jpg"
                },
                notice: {
                    msg: "仅作个人开发测试使用..."
                },
                listData: [
                    {
                        title: '证书奖项',
                        icon: 'award',
                        cardData: [
                            {
                                time: '2018-11',
                                type: '国家软考',
                                award: '系统架构设计师'

                            },
                            {
                                time: '2018-05',
                                type: '第九届蓝桥杯算法大赛',
                                award: '国赛三等奖'

                            },
                            {
                                time: '2018-04',
                                type: '第九届蓝桥杯算法大赛',
                                award: '省赛一等奖'

                            },
                            {
                                time: '2017-2018',
                                type: '校奖学金',
                                award: '三等奖'

                            },
                            {
                                time: '2017-11',
                                type: '国家软考',
                                award: '软件设计师'

                            },
                            {
                                time: '2017-05',
                                type: '第八届蓝桥杯算法大赛',
                                award: '国赛三等奖'

                            },
                            {
                                time: '2017-04',
                                type: '第八届蓝桥杯算法大赛',
                                award: '省赛一等奖'

                            },
                            {
                                time: '2016-12',
                                type: '大学英语',
                                award: 'CET4'

                            }
                        ]
                    },
                    {
                        title: '个人技能',
                        icon: 'column',
                        cardData: [
                            {skill: '熟练使用Java语言进行面向对象程序设计以及常用的Java API，包括集合框架、反射等。'},
                            {skill: '熟悉常用的数据结构, 算法知识。能手写一些深度优先搜索算法(八皇后、马踏棋盘、走迷宫)。'},
                            {skill: '理解多线程并发下web开发注意事项以及线程安全问题，使用多线程异步技术解决项目中请求快速响应问题。'},
                            {skill: '对Spring的IoC容器和AOP原理有了解，熟练的运用Spring框架管理各种Web组件及其依赖关系，熟练的使用Spring进行事务、日志、安全性等的管理，有使用Spring MVC作为表示层技术以及使用Spring提供的持久化支持进行Web项目开发的经验，熟悉Spring对其他框架的整合。'},
                            {skill: '熟悉常用的关系型数据库产品（MySQL、Oracle），熟练的使用SQL进行数据库编程，编写视图，能手动搭建mysql读写分离、主从架构、了解数据索引机制，锁机制，SQL优化。'},
                            {skill: '能搭建分布式缓存 Redis 集群（通过集群管理工具搭建官方在 3.0 版本推出的一套分布式存储方案）。'},
                            {skill: '熟练使用远程过程调用框架webservice、熟悉springboot等开源框架技术，熟练使用redis缓存（分布式session和分布式锁）。'},
                            {skill: '了解分布式结构体系、SOA架构、Dubbo+Zookeeper、Spring Cloud/Alibaba技术栈以及Eureka、nacos注册中心、Feign客户端负载均衡组件、Hystrix熔断器、Config分布式统一配置中心、Zuul、spring的gateway服务网关。'},
                            {skill: '能手写自定义springboot-starter组件，熟悉springboot加载组件过程，可以根据需要手动封装基础组件。'},
                            {skill: '熟悉elasticsearch搜索引擎，以及常用字段搜索和地图GEO的范围搜索、关键词模糊匹配、分词查询，目前应用改技术编写搜索业务到实际项目中。'},
                            {skill: '能搭建Jenkins+Docker用于项目的CI/CD做持续集成、部署，通过Docker镜像的方式实现自动化流程来检查代码并部署到新环境。'},
                            {skill: '运用设计原则和设计模式对项目进行架构设计、封装服务调用中间层，提高代码重用性，加强代码解耦能力。'}
                        ]
                    },
                    {
                        title: '工作经历',
                        icon: 'more',
                        cardData: [
                            {
                                /*time: '2018.12-2020.2',*/
                                enterprise: '德生科技股份有限公司',
                                department: '大数据项目组',
                                position: 'java开发工程师',
                                contents: [
                                    {work: '1.负责公司一体化产品的后台开发、 pc端社保卡业务开发。'},
                                    {work: '2.编写一些公司通用服务，如短信服务、搭建一些分布式应用系统的环境。'},
                                    {work: '3.为公司多个展示大屏编写数据处理逻辑，提供接口给财务直接上传文件展示数据。'},
                                    {work: '4.优化公司现有系统的性能、实现高可用，在项目中对代码采用设计模式，对代码结构进行抽象，遵循软件设计原则，注重里氏替换原则，其核心为了调用的解耦。'},
                                    {work: '5.与开发经理，产品运营，前端，UI，测试人员共同参与需求分析，以及需求评审工作。'},
                                    {work: '6.负责从0到1搭建微服务架构项目（人力资源产品），参与项目搭建和各大应用组件，工具的封装。'}
                                ]
                            },
                            {
                                /* time: '2020.3-至今',*/
                                enterprise: '奥格智能科技有限公司',
                                department: '智慧水务二部',
                                position: 'java开发工程师',
                                contents: [
                                    {work: '1.负责广州市排水设施巡检系统数据维护和更新迭代功能，合并其他城市或地区的排水巡检记录数据。'},
                                    {work: '2.编写、处理广州市各区的排水公司的排水设施巡检信息系统的数据，并统计报表信息。'},
                                    {work: '3.优化系统性能，提升用户交互体验，重构，优化项目代码结构。'},
                                    {work: '4.与产品经理，设计师，安卓APP开发工作人员协同工作，负责pc端，安卓手机APP端项目接口开发。'}
                                ]
                            }
                        ]
                    }
                ],
                activeName: '1',
                images: [
                    'http://images.zhifa.tech/%E5%9F%8E%E5%B8%82%E5%88%86%E5%B8%83%E5%9B%BE.png',
                    'http://images.zhifa.tech/%E4%BA%91%E7%A4%BE%E8%81%981.jpg',
                    'http://images.zhifa.tech/%E5%B9%BF%E5%B7%9E%E6%8E%92%E6%B0%B4%E5%B7%A1%E6%A3%80pc%281%29.png'
                   /* 'http://images.zhifa.tech/%E6%95%99%E5%AD%A6%E6%A5%BC.jpg',
                    'http://images.zhifa.tech/%E9%97%A8%E5%8F%A3%E7%99%BD%E8%A1%A3.jpg',
                    'http://images.zhifa.tech/%E9%92%9F%E6%B5%B7%E6%A5%BC.jpg',
                    'http://images.zhifa.tech/%E7%8F%AD%E7%BA%A7%E6%A0%A1%E9%97%A8%E5%8F%A3.jpg'*/
                ]
            }
        }
    }
</script>

<style scoped lang="less">
    .me {
        margin-bottom: 55px;
    }

    .my-swipe {
        height: 220px;

        img {
            height: 100%;
            width: 100%;
        }
    }

    .my-head-img {
        margin-left: 2px;
    }

    .card {
        padding: 12px;
        margin: 8px -8px;
        background-color: #fff;
        border-radius: 13px;
        box-shadow: 6px 7px 12px 2px #ebedf0;

    }

    .card-green {
        border: 0.8px solid #0aee627d;
    }

    .card-blue {
        border: 0.8px solid #409eff8f
    }

    .block {
        height: 100%;
        width: 100%;
    }

    .el-timeline-item_wrapper {
        position: relative;
        padding-left: 14px;
        top: 9px;
    }

    .van-divider {
        margin: 5px 0;
    }

    .van-collapse-item__content {
        padding: 3px 16px;
    }

    .my-skill {
        word-wrap: break-word;
        word-break: normal;
        text-indent: 2em;
    }
</style>
