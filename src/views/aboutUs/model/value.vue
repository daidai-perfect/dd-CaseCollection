<template>
    <div class="container">
        <div class="center">
            <div class="top">
                <h3 class="tit">VALUE</h3>
                <p class="con">链审价值</p>
                <span class="line"></span>
                <p class="con1">区块链由于没有中心化的监管机构和完整的法律约束，现已成为滋生犯罪的高发领域。链审通过创造性技术手段，重点突破区块链核心的匿名化机制：</p>
                <div class="content">
                    <div class="card">
                        <div class="cardtop">
                            <img src="../../../assets/newimg/icon_1.png" alt="">
                            <div class="tit">01</div>
                            <div class="con">通过链审的技术梳理，可以从IP、登录设备、支付信息、电话信息、网络使用痕迹等多维度绘画区块链背后的现实操控人画像。</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardtop">
                            <img src="../../../assets/newimg/icon_2.png" alt="">
                            <div class="tit">02</div>
                            <div class="con">通过链审的合作白名单机构，可以向上百家境内外机构申请获得变成人民币、美元等法币时收款认证的实名信息。</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardtop">
                            <img src="../../../assets/newimg/icon_3.png" alt="">
                            <div class="tit">03</div>
                            <div class="con">通过链审的业内资源，可以向包括USDT在内的多家稳定币公司申请冻结并没收犯罪资产。</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardtop">
                            <img src="../../../assets/newimg/icon_4.png" alt="">
                            <div class="tit">04</div>
                            <div class="con">通过链审的合作方，可以获得犯罪分子购买虚假身份时的真实信息。</div>
                        </div>
                    </div>
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
            height:750px;
            background: #fff;
            text-align: center;
            padding-top: 60px;
            .tit{
                font-size: 40px;
                font-weight: normal;
                color: #D5D5D5;
                letter-spacing:0px;
                margin: 0;
            }
            .con{
                font-size: 30px;
                font-weight: normal;
                color: #344257;
                letter-spacing:10px;
            }
            .con1{
                width: 514px;
                font-size: 13px;
                font-weight: normal;
                color: #656A72;
                line-height: 21px;
                margin: 20px auto;
            }
            .content{
                width: 1200px;
                margin: 50px auto 0;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .card{
                    height:380px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: center;
                    .cardtop{
                        background: #fff;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 140px;
                            height:140px;
                        }
                        .tit{
                            height: 20px;
                            font-size: 20px;
                            font-weight: normal;
                            color: #24344B;
                            letter-spacing:5px;
                            margin: 30px;
                        }
                        .con{
                            width: 175px;
                            font-size: 13px;
                            font-weight: normal;
                            color: #656A72;
                            line-height: 30px;
                            letter-spacing:0px;
                            text-align: center;
                        }
                    }
                }
            }
        }
        
    }
}
</style>