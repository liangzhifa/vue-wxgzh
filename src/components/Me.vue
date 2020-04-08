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
          <div class="card">
              <van-row >
                  <van-col span="8">时间</van-col>
              </van-row>
              <van-row gutter="8">
                  <van-col span="8">span: 8</van-col>
                  <van-col span="8">span: 8</van-col>
                  <van-col span="8">span: 8</van-col>
              </van-row>
          </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Me",
        data() {
            return {
                lzf: {
                    school: "广东东海洋大学",
                    profession: "软件工程",
                    my_head_img: "http://images.zhifa.tech/%E6%A2%81%E6%99%BA%E5%8F%91.jpg"
                },
                notice: {
                    msg: "仅作个人开发测试使用..."
                },

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
    .me{
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

    }
    .card{
        padding: 12px;
        background-color: #fff;
        border-radius: 13px;
        box-shadow: 6px 7px 12px 2px #ebedf0;
    }
    .block{
        height: 100%;
        width: 100%;
    }
    .el-timeline-item_wrapper {
        position: relative;
        padding-left: 14px;
        top: 9px;
    }

</style>
