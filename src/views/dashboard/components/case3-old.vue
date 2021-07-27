<template>
    <div class="case-container">
        <div class="main">
            <h1>数字货币洗钱-火币OTC</h1>

            <h3>案情摘要：</h3>
            <p>2020年5月18日广东警方破获一起首个利用“数字货币”为电信网络诈骗“洗钱”的团伙，抓获嫌疑人共12名，缴获电脑、手机、银行卡、U盾等涉案物品一批。犯罪分子在火币OTC等平台，使用他人实名账户实名注册，并成为火币OTC商户。当收到诈骗犯罪分子转入的需要“洗白”的钱款后，他们会将钱款转入微信或支付宝，购买平台提供的可以灵活取现的互联网+金融基金产品。接下来，他们会用这些资金，通过在火币OTC法币交易区挂单，买卖数字货币，并从中抽取一定比例的佣金。而诈骗分子正是利用数字货币的隐蔽性、以及可以支持境外交易等特点，将诈骗款项成功转移到境外的银行账户中，从而使警方难以追查。根据嫌疑人所述，警方调查核实初步发现，他们通过数字货币为诈骗团伙“洗钱”不到半年时间，就获利人民币30余万。</p>
        
            <h3>案件审理</h3>
            <p>目前该案涉及犯罪嫌疑人12名均被刑事拘留，案件正在审理过程中。</p>

            <h3>案件特点</h3>
            <p>1.通过数字货币交易平台，可以将“黑钱”和普通用户手中的钱就行交换，受害群众不知情且分布在全国
            <br />
            2.由于数字货币没有国界，因此可以通过数字货币将人民币“黑钱”换成境外账户的美元，从而逃避监管</p>
        
            <h3>案件处理：</h3>
            <p>根据区块链和网络公开资料，获得司法机关协助调查授权书后，申请火币OTC等多个数字货币交易平台，调取实名认证信息，并整理交易双向关联方：</p>

            <div class="img-box">
                <img src="@/assets/img/img3@3x.png"/>
            </div>

            <p>同时攻入对方数据管理后台，获得了对方全部人员身份信息，工资条，职务信息，居住信息等。</p>
        </div>
        <div class="img-box">
            <img src="@/assets/img/img4@3x.png"/>
        </div>

        <p class="paragraph">最终某安全公司和第三方具备资质的机构，共同出具了具有司法效力的鉴定报告，此报告在检察院和法院在审理时予以了采纳。</p>
    </div>
</template>
<script>
export default {
    name: 'case-3'
}
</script>
<style lang="scss" scoped>
.case-container{
    width: 100%;
    background: #eee;
    .main{
        width: 1200px;
        margin: 0 auto;
        .img-box{
            img{
                width: 500px;
            height: 400px;
            }
        }
    }
    .img-box{
        width: 500px;
            height: 400px;
            margin: 0 auto;
            img{
                width: 500px;
            height: 400px;
            }
        }
}
.paragraph{
    margin-bottom: 30px;
}
</style>