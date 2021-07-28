<template>
    <div class="container">
        <div class="center">
            <div class="top">
                <img src="../../assets/newimg/英文横logo@2x.png" alt="">
                <p class="con">准备材料</p>
                <span class="line"></span>
                <p class="con1">链审科技针对利用数字货币进行相关犯罪的案件，提供从区块链地址到实际控制人的全方面追踪。司法机构只需要提供涉案的数字货币信息，链审科技将利用大数据和独有的标签库，锁定涉案资金的去向，以及定位犯罪嫌疑人的真实身份。</p>
                <div class="middle">
                    <div class="step">
                        <div class="stepOne">
                            <span class="circleSpan">1</span>
                            <span class="lineSpan">------</span>
                            <p>嫌疑人数字货币收款地址</p>
                        </div>
                        <div class="stepOne">
                            <span class="lineSpan1">------</span>
                            <span class="circleSpan">2</span>
                            <span class="lineSpan">------</span>
                            <p>转账货币及金额</p>
                        </div>
                        <div class="stepOne">
                            <span class="circleSpan">3</span>
                            <span class="lineSpan1">------</span>
                            <p>转账时间</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import * as Api_comp from "@/api/complaint";
import agreement from "@/components/agreement/agreemenIndex";
export default {
  data() {
    return {
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
            height:750px;
            background: #fff;
            text-align: center;
            padding-top: 50px;
            img{
                width: 228px;
                height: 51px;
            }
            .con{
                font-size: 30px;
                font-weight: normal;
                color: #344257;
                letter-spacing:0px;
            }
            .con1{
                width:900px;
                font-size: 16px;
                font-weight: normal;
                color: #878888;
                line-height: 30px;
                margin: 10px auto;
            }
            .middle{
                width: 900px;
                margin: 50px auto;
                .step{
                    display: flex;
                    justify-content: space-between;
                    .stepOne{
                        width: 300px;
                        position: relative;
                        .circleSpan{
                            display: inline-block;
                            width: 50px;
                            height: 50px;
                            line-height: 50px;
                            text-align: center;
                            background: #FFFFFF;
                            border: 1px solid #3BB094;
                            border-radius: 50%;
                            font-size: 28px;
                            font-weight: normal;
                            color: #288E86;
                        }
                        .lineSpan{
                            letter-spacing: 10px;
                            color: #288E86;
                            font-weight: 700;
                            position: absolute;
                            top: 15px;
                            left: 200px;
                        }
                        .lineSpan1{
                            letter-spacing: 10px;
                            color: #288E86;
                            font-weight: 700;
                            position: absolute;
                            top: 15px;
                            left: 0px;
                        }
                        p{
                            font-size: 22px;
                            font-weight: 550;
                            color: #5A595A;
                            margin-top: 20px;
                        }
                    }

                }
            }
        }
        
    }
}
</style>