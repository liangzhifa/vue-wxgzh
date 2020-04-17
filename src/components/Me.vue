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
            openSwipe(index){
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
                    my_head_img: "http://images.zhifa.tech/%E6%A2%81%E6%99%BA%E5%8F%91.jpg"
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
                            {skill: '熟悉常用的数据结构, 算法知识。能手写一些深度优先搜索算法。'},
                            {skill: '理解多线程并发下web开发注意事项以及线程安全问题。'},
                            {skill: '对Spring的IoC容器和AOP原理有了解，熟练的运用Spring框架管理各种Web组件及其依赖关系，熟练的使用Spring进行事务、日志、安全性等的管理，有使用Spring MVC作为表示层技术以及使用Spring提供的持久化支持进行Web项目开发的经验，熟悉Spring对其他框架的整合。'},
                            {skill: '熟悉常用的关系型数据库产品（MySQL、Oracle），熟练的使用SQL进行数据库编程，能手动搭建mysql读写分离、主从架构、了解数据索引机制，锁机制，SQL优化。'},
                            {skill: '熟练使用远程过程调用框架webservice、熟悉springboot等开源框架技术，熟练使用redis缓存（分布式session和分布式锁）。'},
                            {skill: '了解分布式结构体系、SOA架构、Dubbo+Zookeeper、Spring Cloud技术栈以及Eureka、nacos注册中心、Feign客户端负载均衡组件、Hystrix熔断器、Config分布式统一配置中心、Zuul、spring的gateway服务网关。'},
                            {skill: '熟悉elasticsearch搜索引擎，以及常用字段搜索和地图GEO的范围搜索，目前应用改技术编写搜索业务到实际项目中。'},
                            {skill: '运用设计原则和设计模式对项目进行架构设计、封装服务调用中间层，提高代码重用性，加强代码解耦能力。'}
                        ]
                    }
                ],
                activeName: '1',
                images: [
                    'http://images.zhifa.tech/%E8%BD%AF%E4%BB%B6%E7%B3%BB.jpg',
                    'http://images.zhifa.tech/BV1A5048.jpg',
                    'http://images.zhifa.tech/7B106189F47CC99111322C624FF_27821928_CB67C.jpg'
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
