<template>
    <div class="container">
        <div class="center">
            <div class="top">
                <h3 class="tit">TEAM CONTEXT</h3>
                <p class="con">团队背景</p>
                <span class="line"></span>
                <ul class="content">
                    <li class="card">
                        <div class="left">
                            <img src="../../../assets/newimg/icon_Elite@2x.png" alt="">
                        </div>
                        <div class="right">
                            <div class="tit">执法部门精英</div>
                            <div class="con">由多名来自公安经侦、刑侦以及反洗钱监管等部门的离任办案人员组成，拥有丰富的相关业务经验</div>
                            <!-- <span @click="$router.push({name:'caseDetail',query: {identification:1}})">START</span> -->
                            <span>START</span>
                        </div>
                    </li>
                    <li class="card">
                        <div class="left">
                            <img src="../../../assets/newimg/icon_ace@2x.png" alt="">
                        </div>
                        <div class="right">
                            <div class="tit">安防技术高手</div>
                            <div class="con">由国内安防领域顶级人才构成，多名成员隶属于国家网络安全“红客联盟”，多次在国内外安全竞赛中获取优异成绩，并曾在C S S / I S C 等著名安全会议上发表演讲。</div>
                            <!-- <span @click="$router.push({name:'caseDetail',query: {identification:2}})">START</span> -->
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
            padding-top: 80px;
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
                flex-wrap: wrap;
                .card{
                    width: 50%;
                    height:280px;
                    margin-top: 50px;
                    display: flex;
                    .left{
                        width: 280px;
                        height: 340px;
                        background:#D5D5D5;
                        line-height: 340px;
                        img{
                            width: 113px;
                            height: 111px;
                        }
                    }
                    .right{
                        width: 280px;
                        height: 340px;
                        background:#fff;
                        border: 1px solid #EAEAEA;
                        padding: 30px 20px;
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