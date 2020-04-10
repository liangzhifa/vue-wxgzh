<template>
    <div class="me">
        <div class="me-swipe">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(image, index) in images" :key="index">
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
                    <div class="card" v-for="(cardItem,cardItemIndex) in item.cardData" :key="cardItemIndex">
                        <!--<van-row gutter="8" v-if="cardItem.skill">

                            <van-col span="24">{{cardItem.skill}}</van-col>
                        </van-row>-->
                        <div v-if="cardItem.skill" class="my-skill">
                            {{cardItem.skill}}
                        </div >
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

    export default {
        name: "Me",
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
                            {skill:'111111111111111111111111111' +
                                    '1111111111111111111111111111111111111111111111'},
                            {skill:'666'},
                            {skill:'666'},
                            {skill:'666'}
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
        margin-bottom: 40px;
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
        //text-indent: 2em;
    }
</style>
