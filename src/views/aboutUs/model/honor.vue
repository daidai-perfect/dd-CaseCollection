<template>
    <div class="container">
        <div class="center">
            <div class="top">
                <h3 class="tit">HONORS</h3>
                <p class="con">荣誉资质</p>
                <span class="line"></span>
                <div class="content">
                    <div class="card">
                        <div class="cardtop">
                            <span class="spanLine"></span>
                            <h3>专利PATENT</h3>
                        </div>
                        <div class="cardbottom">
                            <div class="single">
                                <div class="kuang">
                                    <!-- <img src="../../../assets/newimg/背景@2x.png" alt=""> -->
                                </div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
                            <div class="single">
                                <div class="kuang"></div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
                            <div class="single">
                                <div class="kuang"></div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
                            <div class="single">
                                <div class="kuang"></div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardtop">
                            <span class="spanLine"></span>
                            <h3>成就ACHIEVEMENT</h3>
                        </div>
                        <div class="cardbottom">
                            <div class="single">
                                <div class="kuang"></div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
                            <div class="single">
                                <div class="kuang"></div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
                            <div class="single">
                                <div class="kuang"></div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
                            <div class="single">
                                <div class="kuang"></div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="cardtop">
                            <span class="spanLine"></span>
                            <h3>行业资质QUALIFICATIONS</h3>
                        </div>
                        <div class="cardbottom">
                            <div class="single">
                                <div class="kuang"></div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
                            <div class="single">
                                <div class="kuang"></div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
                            <div class="single">
                                <div class="kuang"></div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
                            <div class="single">
                                <div class="kuang"></div>
                                <div class="index">
                                    <p class="tittle">01</p>
                                    <span class="button">MORE</span>
                                </div>
                            </div>
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
            // height:750px;
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
                // display: flex;
                // justify-content: space-around;
                // align-items: center;
                .card{
                    margin-top: 50px;
                    &:nth-child(1){
                       margin-top: 0px; 
                    }
                    .cardtop{
                        text-align: left;
                        .spanLine{
                            display: inline-block;
                            width: 10px;
                            height: 26px;
                            background: #3BB094;
                            margin-right: 10px;
                        }
                        h3{
                            display: inline-block;
                            font-size: 30px;
                            font-weight: normal;
                            color: #344257;
                            letter-spacing: 6px;
                        }
                    }
                    .cardbottom{
                        display: flex;
                        justify-content: space-between;
                        .single{
                            &:hover{
                                .kuang{
                                    border: 20px solid #40BBA6;
                                    border-bottom: none;
                                    img{
                                    width: 220px;
                                    height: 266px;
                                }
                                }
                                .index{
                                    .button{
                                        background: #3EB8A4;
                                        color: #fff;
                                    }
                                }
                            }
                            .kuang{
                                width: 260px;
                                height: 276px;
                                background: rgba(#D5D5D5, 0.8);
                                border: 20px solid #D5D5D5;
                                border-top: 26px solid #D5D5D5;
                                border-bottom: none;
                                box-sizing: border-box;
                                img{
                                    width: 220px;
                                    height: 256px;
                                }
                            }
                            .index{
                                width: 260px;
                                height: 120px;
                                padding: 15px 0;
                                background: #fff;
                                display: flex;
                                flex-direction: column;
                                justify-content: space-around;
                                align-items: center;
                                border: 1px solid #EAEAEA;
                                box-shadow: 0px 18px 26px 1px rgba(21, 122, 109, 0.1);
                                .title{
                                    width: 21px;
                                    height: 16px;
                                    font-size: 20px;
                                    color: #24344B;
                                    font-weight: 550;
                                }
                                .button{
                                    display: inline-block;
                                    width: 90px;
                                    height: 38px;
                                    line-height: 38px;
                                    text-align: center;
                                    background: #fff;
                                    color: #A5A4A4;
                                    border: 1px solid #EAEAEA;
                                    border-radius: 20px;
                                    box-shadow: 0px 18px 26px 1px rgba(21, 122, 109, 0.1);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>