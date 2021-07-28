<template>
    <div class="container">
        <div class="center">
            <div class="top">
                <h3 class="tit">SERVICE</h3>
                <p class="con">链审服务</p>
                <span class="line"></span>
                <p class="con1">我们为政府监管机构、执法部门和金融机构，提供区块链数据分析、洗钱资金数据分析及实名认证分析。分析结果配合第三方出具具有法律效力的司法鉴定报告。</p>
                <div class="content">
                    <div class="card">
                        <div class="cardtop">
                            <img src="../../../assets/newimg/1.png" alt="">
                            <span class="line"></span>
                            <div class="tit">监管机构</div>
                            <div class="con">通过链审团队实时监控各类传销资金盘、非法集资、电信诈骗等不法活动利用区块链技术进行的各种交易，政府有关监管部门能够获得及时有效的数据支持。</div>
                        </div>
                        <div class="cardbottom"></div>
                    </div>
                    <div class="card">
                        <div class="cardtop">
                            <img src="../../../assets/newimg/2.png" alt="">
                            <span class="line"></span>
                            <div class="tit">执法部分</div>
                            <div class="con">通过链审绘制可视化的数字资产交易流向图及分析报告，执法部门能够获得涉案数字资产的转移路径和实时存储地址，最终查明涉案人员身份并查扣涉案资产。</div>
                        </div>
                        <div class="cardbottom"></div>
                    </div>
                    <div class="card">
                        <div class="cardtop">
                            <img src="../../../assets/newimg/3.png" alt="">
                            <span class="line"></span>
                            <div class="tit">金融机构</div>
                            <div class="con">通过链审，了解用户数字资产的来源，做好反洗钱（AML）、实名认证（KYC）、梳理制裁合作等多项信息源真实性的背调。</div>
                        </div>
                        <div class="cardbottom"></div>
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
                letter-spacing:3px;
                margin: 0;
            }
            .con{
                font-size: 30px;
                font-weight: normal;
                color: #344257;
                letter-spacing:10px;
            }
            .con1{
                font-size: 13px;
                font-weight: normal;
                color: #656A72;
                line-height: 21px;
            }
            .line{
                display: inline-block;
                width: 48px;
                height: 1px;
                background:#39AD9D ;
                margin: 10px 0;
            }
            .content{
                width: 1200px;
                margin: 30px auto 0;
                display: flex;
                justify-content: space-around;
                align-items: center;
                .card{
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    .cardtop{
                        width: 370px;
                        height:380px;
                        background: #fff;
                        // line-height: 320px;
                        border: 1px solid #DCDCDC;
                        border-bottom: none;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        img{
                            width: 90px;
                            height: 86px;
                        }
                        .line{
                            height: 1.5px;
                            margin:25px 0 15px;
                        }
                        .tit{
                            height: 20px;
                            font-size: 20px;
                            font-weight: normal;
                            color: #24344B;
                            letter-spacing:5px;
                            margin-bottom: 15px;
                        }
                        .con{
                            width: 310px;
                            font-size: 13px;
                            font-weight: normal;
                            color: #656A72;
                            line-height: 30px;
                            letter-spacing:0px;
                            text-align: center;
                        }
                    }
                    .cardbottom{
                        width: 370px;
                        height: 100px;
                        background: #DCDCDC;
                        
                    }
                    &:nth-child(2){
                        .cardtop{
                            img{
                                margin: 20px 0 15px;
                                width: 90px;
                                height: 51px;
                            }
                        }
                    }:hover{
                        background:#40BBA6 ;
                    }
                }&:nth-child(2){
                        .cardtop{
                            img{
                                margin: 20px 0 15px;
                                width: 90px;
                                height: 51px;
                            }
                        }
                    }:hover{
                        background:#40BBA6 ;
                        .cardbottom{
                            background:#239380 ;
                        }
                        .line{
                            background: #fff;
                        }
                        .cardtop{
                            .tit{
                                color: #fff;
                            }
                        }
                    }
            }
        }
        
    }
}
</style>