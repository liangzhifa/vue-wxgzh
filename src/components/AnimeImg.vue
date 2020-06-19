<template>
    <div class="animeImg">

        <div class="my_img">
            <van-uploader class="upImg"
                          image-fit="cover"
                          v-model="fileList"
                          multiple :max-count="1"
                          :after-read="afterRead"
                          accept="image/*"
            />
        </div>
        <div class="my_img target">
            <van-image
                    width="10rem"
                    height="10rem"
                    fit="contain"
                    :src="targetImg" v-if="targetImg!=''" @click="viewTargetImg"
            />
        </div>
        <!--  <van-image
                  width="10rem"
                  height="10rem"
                  fit="contain"
                  :src="targetImg"
          />-->
    </div>
</template>

<script>
    import {ImagePreview} from "vant";
    import Exif from 'exif-js'

    export default {
        name: "AnimeImg",
        mounted() {
            window.document.title = "动漫头像"
        },
        data() {
            return {
                fileList: [
                    /* {url: 'https://img.yzcdn.cn/vant/leaf.jpg'}*/
                ],
                targetImg: '',
            };
        },
        methods: {

            //将dataURL转成文件(file)格式
            dataURLtoFile(urlData) {

                var arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1],
                    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new Blob([u8arr], {type: mime});

            },
            //把file转换成二进制形式(binart)
            async upLoaderImg(file, sorceFile) {	//file为 你读取成功的回调文件信息

                let param = new FormData();

                //通过append向form对象添加数据
                param.append("file", file);
                //FormData私有类对象，访问不到，可以通过get判断值是否传进去
                console.log(file);
                let config = {
                    //添加请求头
                    headers: {"Content-Type": "multipart/form-data"}
                };

               /* var res = await this.$http.post('/uploadImg', param, config) //这里的res就是axios请求回来的结果
                this.targetImg = res.data;*/
                sorceFile.status = 'success';

            },
            // 旋转图片
            rotateImg(img, direction, canvas) {
                //最小与最大旋转方向，图片旋转4次后回到原方向
                const min_step = 0;
                const max_step = 3;
                if (img == null) return;
                //img的高度和宽度不能在img元素隐藏后获取，否则会出错
                let height = img.height;
                let width = img.width;
                let step = 2;
                if (step == null) {
                    step = min_step;
                }
                if (direction == "right") {
                    step++;
                    //旋转到原位置，即超过最大值
                    step > max_step && (step = min_step);
                } else {
                    step--;
                    step < min_step && (step = max_step);
                }
                //旋转角度以弧度值为参数
                let degree = (step * 90 * Math.PI) / 180;
                let ctx = canvas.getContext("2d");
                switch (step) {
                    case 0:
                        canvas.width = width;
                        canvas.height = height;
                        ctx.drawImage(img, 0, 0);
                        break;
                    case 1:
                        canvas.width = height;
                        canvas.height = width;
                        ctx.rotate(degree);
                        ctx.drawImage(img, 0, -height);
                        break;
                    case 2:
                        canvas.width = width;
                        canvas.height = height;
                        ctx.rotate(degree);
                        ctx.drawImage(img, -width, -height);
                        break;
                    case 3:
                        canvas.width = height;
                        canvas.height = width;
                        ctx.rotate(degree);
                        ctx.drawImage(img, -width, 0);
                        break;
                }
            },
            afterRead(file) {
                //去获取拍照时的信息，解决拍出来的照片旋转问题
                let self = this;
                let Orientation;

                //去获取拍照时的信息，解决拍出来的照片旋转问题
                Exif.getData(file.file, function () {
                    Orientation = Exif.getTag(this, "Orientation");
                });

                file.status = 'uploading';
                file.message = '客官请稍后...';

                // 大于1MB的jpeg和png图片都缩小像素上传
                console.log("file size ",file.file.size)
                if (/\/(?:jpeg|png|jpg|bmp)/i.test(file.file.type) && file.file.size > 1000000) {
                    // 创建Canvas对象(画布)
                    let canvas = document.createElement('canvas')
                    // 获取对应的CanvasRenderingContext2D对象(画笔)
                    let context = canvas.getContext('2d')
                    // 创建新的图片对象
                    let img = new Image()
                    // 指定图片的DataURL(图片的base64编码数据)
                    img.src = file.content
                    //画布宽度
                    let width = 512
                    // 监听浏览器加载图片完成，然后进行绘制
                    img.onload = () => {
                        //画布大小按照图片的比例生成
                        let height = width / (img.naturalWidth / img.naturalHeight)
                        // 指定canvas画布大小，该大小为最后生成图片的大小
                        canvas.width = width
                        canvas.height = height
                        /* drawImage画布绘制的方法。(0,0)表示以Canvas画布左上角为起点， canvas.width, canvas.height 是将图片按给定的像素进行缩小。*/
                        /* 如果不指定缩小的像素，图片将以图片原始大小进行绘制，图片像素如果大于画布将会从左上角开始按画布大小部分绘制图片，最后得到的图片就是张局部图。图片小于画布就会有黑边。*/
                        context.drawImage(img, 0, 0, canvas.width, canvas.height)
                        // 将绘制完成的图片重新转化为base64编码，file.file.type为图片类型，0.92为默认压缩质量
                        file.content = canvas.toDataURL(file.file.type, 0.92)

                        //修复ios上传图片的时候 被旋转的问题
                        if (Orientation != "" && Orientation != 1) {
                            console.log('--------',Orientation)
                            switch (Orientation) {
                                case 6: //需要顺时针（向左）90度旋转
                                    this.rotateImg(img, "left", canvas);
                                    break;
                                case 8: //需要逆时针（向右）90度旋转
                                    this.rotateImg(img, "right", canvas);
                                    break;
                                case 3: //需要180度旋转
                                    this.rotateImg(img, "right", canvas); //转两次
                                    this.rotateImg(img, "right", canvas);
                                    break;
                            }
                        }

                        //将base64编码的图片转成文件(file)格式
                        let lastfile = this.dataURLtoFile(file.content)
                        //把file转换成二进制形式(binart)并进行上传
                        let uploadImg = this.upLoaderImg(lastfile, file)

                    }
                } else {
                    let uploadImg = this.upLoaderImg(file.file, file)

                }


            },
            viewTargetImg() {
                ImagePreview({
                    images: [
                        this.targetImg
                    ],
                    closeable: true,
                });
            }
        },
    }
</script>

<style scoped lang="less">

    .animeImg {
        width: 100%;
        height: 100%;
        background-image: url("../assets/鸣人手机壁纸.png");
        background-size: contain;
        padding-top: 18px;

    }

    .my_img {
        width: 80%;
        height: 40%;
        border: 1px rgba(177, 209, 235, 0.04) solid;
        margin: 0 auto;
        box-shadow: 0px 1px 10px 2px #ebedf0;

    }

    .target {
        margin-top: 15%;
    }

    .van-row {
        margin: 0 !important;
    }

    .upImg {
        width: 100%;
        height: 100%;
    }

    /deep/ .van-uploader__preview {
        /* position: relative; */
        /* margin: 0 8px 8px 0; */
        cursor: pointer;
    }

    /deep/ .van-uploader__preview {
        position: relative;
        cursor: pointer;
        height: 100%;
        width: 100%;
    }

    /deep/ .van-uploader__wrapper {
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
        height: 100%;
        width: 100%;
    }

    /deep/ .van-uploader__preview-image {
        display: block;
        /* width: 80px; */
        /* height: 80px; */
        overflow: hidden;
        border-radius: 10px;
        height: 100%;
        width: 100%;
    }

    /deep/ .van-uploader__preview {
        position: relative;
        cursor: pointer;
        margin: 0;
        padding: 1px;

    }

    /deep/ .van-uploader__upload {
        width: 80%;
        height: 80%;
        margin: 9% auto
    }

    /deep/ .van-image {
        position: relative;
        display: inline-block;
        width: 100% !important;
        height: 100% !important;
    }

</style>