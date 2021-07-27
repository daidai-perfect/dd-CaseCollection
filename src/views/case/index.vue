<template>
    <div class="container">
        <div class="center">
            <div class="top">
                <img src="../../assets/newimg/英文横logo@2x.png" alt="">
                <p class="con">行业案例</p>
                <span class="line"></span>
                <p class="con1">链审科技针对利用数字货币进行相关犯罪的案件，提供从区块链地址到实际控制人的全方面追踪。司法机构只需要提供涉案的数字货币信息，链审科技将利用大数据和独有的标签库，锁定涉案资金的去向，以及定位犯罪嫌疑人的真实身份。</p>
                <ul class="content">
                    <li class="card">
                        <div class="left">
                            <img src="../../assets/newimg/icon_lock1@2x.png" alt="">
                        </div>
                        <div class="right">
                            <div class="tit">数字货币传销</div>
                            <div class="con">Plus Token</div>
                            <span>START</span>
                        </div>
                    </li>
                </ul>
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
            padding-top: 50px;
            img{
                width: 228px;
                height: 51px;
            }
            .con{
                font-size: 30px;
                font-weight: normal;
                color: #344257;
                letter-spacing:10px;
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
                margin: 50px auto 0;
                .card{
                    width: 50%;
                    height:380px;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;
                    .left{
                        width: 250px;
                        height: 300px;
                        background:#D5D5D5;
                        img{
                            width: 85px;
                            height: 113px;
                        }
                    }
                    .right{
                        .tit{
                            font-size: 24px;
                            font-weight: normal;
                            color: #24344B;
                        }
                        .con{
                            font-size: 16px;
                            font-weight: normal;
                            color: #656A72;
                            line-height: 30px;
                        }
                    }
                }
            }
        }
        
    }
}
</style>