<template>
  <div class="container">
    <div class="center">
        <div class="top">
            <h3 class="tit">About ChainAudit</h3>
            <p class="con">READ MORE</p>
            <span class="line"></span>
            <p class="font">让区块链世界不再匿名</p>
            <p class="font">让数字货币不再成为法外之地</p>
            <div class="services">
                <div class="features" @click="$router.push({ name:'feature' })">
                    <p class="topTit">案件特点</p>
                    <p class="en">CHARACTERISTIC</p>
                    <span class="line"></span>
                    <div class="tag">
                        <img src="../../assets/newimg/icon_map@2x.png" alt="">
                        <img src="../../assets/newimg/icon_base@2x.png" alt="">
                        <img src="../../assets/newimg/icon_Setup@2x.png" alt="">
                    </div>
                </div>
                <div class="service" @click="$router.push({name:'service'})">
                    <p class="topTit">链审服务</p>
                    <p class="en">SERVICE</p>
                </div>
                <div class="value" @click="$router.push({name:'value'})">
                    <p class="topTit">链审价值</p>
                    <p class="en">VALUE</p>
                </div>
                <div class="case" @click="$router.push({name:'case'})">
                    <p class="topTit">行业案例</p>
                    <p class="en">INDUSTRY CASE</p>
                </div>
                <div class="honor" @click="$router.push({name:'honor'})">
                    <p class="topTit">荣誉资质</p>
                    <p class="en">HONORS</p>
                </div>
                <div class="team" @click="$router.push({name:'team'})">
                    <p class="topTit">团队背景</p>
                    <p class="en">TEAM CONTEXT</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <span class="button">MORE PARTNERS</span>
            <div class="img">
                <img src="../../assets/newimg/okex@2x.png" alt="">
                <img src="../../assets/newimg/huobi@2x.png" alt="">
                <img src="../../assets/newimg/blnace@2x.png" alt="">
                <img src="../../assets/newimg/usdt@2x.png" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
    return {

    };
  },
  watch: {
   
  },
  mounted() {

  },
  methods: {
    contact(val) {
      this.$router.push({
        // if (val==1) {
            path:'./case/feature.vue'
        // }
        // query: { identification: val }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.container{
    height:100%;
    background: #EEEEEE;
    .center{
        margin: 0 auto;
        background: #EEEEEE;
        .top{
            width: 100%;
            height:650px;
            background: #fff;
            text-align: center;
            padding-top: 30px;
            .tit{
                font-size: 30px;
                font-weight: normal;
                color: #24344B;
                margin: 0;
            }
            .con{
                font-size: 10px;
                font-weight: normal;
                color: #37A99A;
                letter-spacing:5px;
            }
            .line{
                display: inline-block;
                width: 48px;
                height: 1px;
                background:#D7D7D7 ;
                margin-bottom: 5px;
            }
            .font{
                font-size: 13px;
                font-weight: normal;
                color: #656A72;
                line-height: 21px;
            }
            .services{
                width: 1200px;
                margin: 20px auto;
                position: relative;
                
                .features{
                    width: 575px;
                    height: 280px;
                    background:#D5D5D5 ;
                    position: absolute;
                    top: 0;
                    left: 0;
                    padding-top: 50px;
                    cursor: pointer;
                    &:hover{
                    background: #37AA9B;
                    .topTit{
                        color: #fff;
                    }
                }
                    .topTit{
                        font-size: 25px;
                        font-weight: normal;
                        color: #535252;
                        letter-spacing:6px;
                    }
                    .en{
                        font-size: 13px;
                        font-weight: normal;
                        color: #848484;
                        line-height: 26px;
                        letter-spacing:3px;
                    }
                    .line{
                        margin: 30px 0;
                    }
                    .tag{
                        img{
                            width: 43px;
                            height: 42px;
                            &:nth-child(2){
                                margin: 0 10px;
                            }
                        }
                    }
                }
                .service{
                    cursor: pointer;
                    width: 292px;
                    height: 140px;
                    background: #EEEEEE;
                    position: absolute;
                    top: 0;
                    left:595px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    &:hover{
                    background: #37AA9B;
                    .topTit{
                        color: #fff;
                    }
                }
                    .topTit{
                        font-size: 25px;
                        font-weight: normal;
                        color: #535252;
                        letter-spacing:6px;
                        justify-content: center;
                    }
                    .en{
                        font-size: 13px;
                        font-weight: normal;
                        color: #848484;
                        line-height: 26px;
                        letter-spacing:3px;
                        justify-content: center;
                    }
                }
                .value{
                    cursor: pointer;
                    width: 292px;
                    height: 300px;
                    background: #D5D5D5;
                    position: absolute;
                    top: 0;
                    right: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    &:hover{
                    background: #37AA9B;
                    .topTit{
                        color: #fff;
                    }
                }
                    .topTit{
                        font-size: 25px;
                        font-weight: normal;
                        color: #535252;
                        letter-spacing:6px;
                        justify-content: center;
                    }
                    .en{
                        font-size: 13px;
                        font-weight: normal;
                        color: #848484;
                        line-height: 26px;
                        letter-spacing:3px;
                        justify-content: center;
                    }
                }
                .case{
                    cursor: pointer;
                    width: 292px;
                    height: 135px;
                    background: #848484;
                    position: absolute;
                    top: 310px;
                    right: 0;display: flex;
                    flex-direction: column;
                    justify-content: center;
                    &:hover{
                    background: #37AA9B;
                    .topTit{
                        color: #fff;
                    }
                }
                    .topTit{
                        font-size: 25px;
                        font-weight: normal;
                        color: #535252;
                        letter-spacing:6px;
                        justify-content: center;
                    }
                    .en{
                        font-size: 13px;
                        font-weight: normal;
                        color: #B0B0B0;
                        line-height: 26px;
                        letter-spacing:3px;
                        justify-content: center;
                    }
                }
                .honor{
                    cursor: pointer;
                    width: 292px;
                    height: 295px;
                    background: #D5D5D5;
                    position: absolute;
                    top: 150px;
                    left: 595px;display: flex;
                    flex-direction: column;
                    justify-content: center;
                    &:hover{
                    background: #37AA9B;
                    .topTit{
                        color: #fff;
                    }
                }
                    .topTit{
                        font-size: 25px;
                        font-weight: normal;
                        color: #535252;
                        letter-spacing:6px;
                        justify-content: center;
                    }
                    .en{
                        font-size: 13px;
                        font-weight: normal;
                        color: #848484;
                        line-height: 26px;
                        letter-spacing:3px;
                        justify-content: center;
                    }
                }
                .team{
                    cursor: pointer;
                    width: 575px;
                    height: 155px;
                    background: #D5D5D5;
                    position: absolute;
                    top:290px;
                    left: 0;display: flex;
                    flex-direction: column;
                    justify-content: center;
                    &:hover{
                    background: #37AA9B;
                    .topTit{
                        color: #fff;
                    }
                }
                    .topTit{
                        font-size: 25px;
                        font-weight: normal;
                        color: #535252;
                        letter-spacing:6px;
                        justify-content: center;
                    }
                    .en{
                        font-size: 13px;
                        font-weight: normal;
                        color: #848484;
                        line-height: 26px;
                        letter-spacing:3px;
                        justify-content: center;
                    }
                }
            }
        }
        .bottom{
            width: 100%;
            text-align: center;
            padding-top: 15px;
            .button{
                display: inline-block;
                width: 185px;
                height: 35px;
                line-height: 35px;
                border: 1px solid #5F616A;
                border-radius: 19px;
                margin-bottom: 20px;
            }
            .img{
                width: 500px;
                margin: 0 auto;
                display: flex;
                img{
                    &:nth-child(1){
                        width: 58px;
                        height: 62px;
                    }
                    &:nth-child(2){
                        width: 52px;
                        height: 62px;
                        margin: 0 40px;
                    }
                    &:nth-child(3){
                        width: 138px;
                        height: 62px;
                        margin: 0 10px;
                    }
                    &:nth-child(4){
                        width: 157px;
                        height: 43px;
                        margin-left:20px;
                        margin-top:20px;
                    }
                }
            }
        }
    }
}
</style>