<template>
    <div class="container">
        <div class="center">
            <div class="top">
                <img src="../../assets/newimg/英文横logo@2x.png" alt="">
                <p class="con">司法入口</p>
                <span class="line"></span>
                <p class="con1">链审科技针对利用数字货币进行相关犯罪的案件，提供从区块链地址到实际控制人的全方面追踪。司法机构只需要提供涉案的数字货币信息，链审科技将利用大数据和独有的标签库，锁定涉案资金的去向，以及定位犯罪嫌疑人的真实身份。</p>
                <ul class="content">
                    <li class="card">
                        <div class="left">
                            <img src="../../assets/newimg/icon_Inquire@2x.png" alt="">
                        </div>
                        <div class="right">
                            <div class="tit">报告查询</div>
                            <div class="con">追踪用户冲入的数字货币去向出具资金流向和嫌疑人身份报告</div>
                            <span @click="$router.push({name:'caseDetail',query: {identification:1}})">START</span>
                        </div>
                    </li>
                    <li class="card">
                        <div class="left">
                            <img src="../../assets/newimg/icon_judicial@2x.png" alt="">
                        </div>
                        <div class="right">
                            <div class="tit">司法协助</div>
                            <div class="con">由多名来自公安经侦、刑侦以及反洗钱监管部门的离任办案人员组成，拥有丰富的相关业务经验</div>
                            <span @click="$router.push({name:'caseDetail',query: {identification:2}})">START</span>
                        </div>
                    </li>
                    <li class="card">
                        <div class="left">
                            <img src="../../assets/newimg/icon_Application@2x.png" alt="">
                        </div>
                        <div class="right">
                            <div class="tit">机构申请</div>
                            <div class="con">申请成为机构用户享受更多增值服务</div>
                            <span @click="$router.push({name:'caseDetail',query: {identification:3}})">START</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>

<script>

export default {
  name: "case-index",
  components: {
  },
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
            .content{
                width: 1200px;
                margin: 30px auto 0;
                display: flex;
                flex-wrap: wrap;
                .card{
                    width: 50%;
                    height:280px;
                    display: flex;
                    &:nth-child(1){
                        .left{
                            img{
                                width: 86px;
                                height: 104px;
                            }
                        }
                    }
                    &:nth-child(2){
                        .left{
                            line-height: 335px;
                            img{
                                width: 113px;
                                height: 90px;
                            }
                        }
                    }
                    .left{
                        width: 250px;
                        height: 260px;
                        background:#D5D5D5;
                        line-height: 350px;
                        img{
                            width: 90px;
                            height: 90px;
                        }
                    }
                    .right{
                        width: 250px;
                        height: 260px;
                        background:#fff;
                        border: 1px solid #EAEAEA;
                        padding: 30px 30px;
                        text-align: left;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .tit{
                            font-size: 24px;
                            font-weight: normal;
                            color: #24344B;
                        }
                        .con{
                            width: 180px;
                            font-size: 16px;
                            font-weight: normal;
                            color: #656A72;
                            line-height: 30px;
                            letter-spacing: 0px;
                        }
                        span{
                            display: inline-block;
                            width: 119px;
                            height: 40px;
                            background:#3BB094 ;
                            box-shadow: 0px 11px 24px 0px rgba(59, 176, 148, 0.2);
                            border-radius: 25px;
                            color: #fff;
                            line-height: 40px;
                            text-align: center;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
        
    }
}
</style>