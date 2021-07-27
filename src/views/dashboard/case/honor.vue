<template>
    <div class="container">
        <div class="center">
            <div class="top">
                <h3 class="tit">CHARACTERISTIC</h3>
                <p class="con">案件特点</p>
                <span class="line"></span>
                <div class="content">
                    <div class="card">
                        <div class="cardtop">
                            <img src="../../../assets/newimg/_map@2x.png" alt="">
                        </div>
                        <div class="cardbottom">
                            <span class="line"></span>
                            <div class="tit">匿名账户体系111111</div>
                            <div class="con">数字货币不仅是一串计算机代码，它利用区块链技术，在没有任何政府或机构管理的情况下具备价值存储、转移等功能，将个人财富完全匿名</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardtop">
                            <img src="../../../assets/newimg/icon_flow@2x.png" alt="">
                        </div>
                        <div class="cardbottom">
                            <span class="line"></span>
                            <div class="tit">资金流向复杂</div>
                            <div class="con">数字货币的价值已被全球部分国家认可，不法分子可以利用比特币、泰达币等数字货币在全球范围内隐匿、转移违法所得。</div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardtop">
                            <img src="../../../assets/newimg/Setup@2x.png" alt="">
                        </div>
                        <div class="cardbottom">
                            <span class="line"></span>
                            <div class="tit">办案难度增大</div>
                            <div class="con">数字货币已经成为一种新型高科技犯罪手段，去中心化和匿名化等特点导致此类案件侦破难，追赃更难。</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom"></div>
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
            padding-top: 50px;
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
            .line{
                display: inline-block;
                width: 48px;
                height: 1px;
                background:#39AD9D ;
                margin-top: 25px;
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
                    .cardtop{
                        width: 370px;
                        height: 250px;
                        background: #D5D5D5;
                        line-height: 320px;
                        img{
                            width: 90px;
                            height: 86px;
                        }
                    }
                    .cardbottom{
                        width: 370px;
                        height: 237px;
                        background: #FFFFFF;
                        box-shadow: 0px 18px 26px 1px rgba(21, 122, 109, 0.1);
                        .line{
                            height: 1.5px;
                            margin:25px 0 15px;
                        }
                        .tit{
                            font-size: 20px;
                            font-weight: normal;
                            color: #24344B;
                            letter-spacing:5px;
                        }
                        .con{
                            width: 290px;
                            margin: 20px auto 0;
                            font-size: 13px;
                            font-weight: normal;
                            color: #656A72;
                            line-height: 30px;
                            letter-spacing:0px;
                            text-align: center;
                        }
                    }
                    &:nth-child(2){
                        .cardtop{
                            line-height: 280px;
                            img{
                                width: 90px;
                                height: 51px;
                            }
                        }
                    }
                }
            }
        }
        .bottom{
            width: 100%;
            height:90px;
            background: #EEEEEE;
        }
    }
}
</style>