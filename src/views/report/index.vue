<template>
  <div class="browser">
    <div class="app-cont">
      <div class="address_info">
        <span>报告预览</span>
        <div class="operationButton">
          <img src="@/assets/downFile.png" />
          <img src="@/assets/share.png" />
          <img src="@/assets/email.png" />
        </div>
      </div>
      <!-- 卡片 -->
      <el-card class="title_card">
        <div slot="header" class="title_head">
          <span>数字货币项目地址分析报告</span>
          <div class="title_tag">
            <p>报告唯一标识：1101009873320197</p>
            <p>机构用户</p>
            <p>2020年11月12日</p>
          </div>
        </div>
        <!-- 概要 -->
        <el-card class="outline_card">
          <div slot="header" class="currency_title">
            <span>概要</span>
          </div>
          <el-row :gutter="12">
            <el-col :span="12">
              <div class="blockInfo">
                <div class="balance">
                  <span class="block_title">当前地址：</span>
                  <span class="block_detail">123123123</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="12">
              <div class="blockInfo">
                <div class="balance">
                  <span class="block_title">当前余额：</span>
                  <span class="block_detail">123123123</span>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="blockInfo">
                <div class="balance">
                  <span class="block_title">最大一笔交易金额：</span>
                  <span class="block_detail">123123123</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="12">
              <div class="blockInfo">
                <div class="balance">
                  <span class="block_title">首次交易时间：</span>
                  <span class="block_detail">123123123</span>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="blockInfo">
                <div class="balance">
                  <span class="block_title">累计接收金额：</span>
                  <span class="block_detail">123123123</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="12">
              <div class="blockInfo">
                <div class="balance">
                  <span class="block_title">交易次数：</span>
                  <span class="block_detail">123123123</span>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="blockInfo">
                <div class="balance">
                  <span class="block_title">累计发送金额：</span>
                  <span class="block_detail">123123123</span>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row :gutter="12">
            <el-col :span="24">
              <div class="balance">
                <span class="block_title">摘要：</span>
                <p class="abstract">
                  XX地址属于向XX项目中心化地址/参与地址。该项目累计获得XX充值，目前项目余额XX，
                  数字资产后续累计转移XX次，XX个最终进入XX交易所，有XX个高度怀疑为实际控制人地址，有XX个中度怀疑为实际控制人地址。
                </p>
              </div>
            </el-col>
          </el-row>
        </el-card>
        <!-- 资产转移路线 -->
        <el-card class="assets_card">
          <div slot="header" class="currency_title">
            <span>资产转移路线</span>
          </div>
          <p class="block_title">地址中的资产按照以下地址路径进行了转移</p>
          <div class="assets_thumbnail"></div>
          <p class="block_title">转账列表如下</p>
          <el-table
            class="assetsTableData"
            :data="assetsTableData"
            stripe
            style="width:100%;"
            :header-cell-style="{background:'#F5F5F5'}"
          >
            <el-table-column prop="address" label="转出地址"></el-table-column>
            <el-table-column prop="money" label="累计金额"></el-table-column>
            <el-table-column prop="count" label="转账次数"></el-table-column>
            <el-table-column prop="lastAddress" label="最终汇集地址"></el-table-column>
            <el-table-column prop="lastType" label="最终汇集地址类型"></el-table-column>
            <el-table-column prop="lastMoney" label="最终汇集地址金额"></el-table-column>
          </el-table>
        </el-card>
        <!-- 项目信息 -->
        <el-card class="assets_card">
          <div slot="header" class="currency_title">
            <span>项目信息</span>
          </div>
          <div class="project_cont">
            <p class="project_title">综合判断：</p>
            <span>1、受害人地址：输入的地址XX是参与了XX项目，项目目前媒体披露的信息如下</span>
            <span>2、骗子地址：这个是XX项目，项目目前媒体披露的信息如下</span>
            <span>3、没有标签：未记录的项目</span>
          </div>
          <div class="project_cont">
            <p class="project_title">项目资产分析：</p>
            <span>资产最终汇集地址前十大</span>
            <span>项目中心地址数据</span>
            <span>累计充值，累计冲入地址数量，累计出金，资金目前存留</span>
          </div>
        </el-card>
        <!-- 可能的实控人分析 -->
        <el-card class="assets_card">
          <div slot="header" class="currency_title">
            <span>可能的实控人分析</span>
          </div>
          <div class="project_cont">
            <p class="project_title">1、直接进入中心化交易所</p>
            <span>此类型可以通过联系交易所查询该地址对应的实名信息，进而获知对方的实际身份。</span>
            <el-table
              class="assetsTableData"
              :data="analysisTableData"
              stripe
              style="width:100%;"
              :header-cell-style="{background:'#F5F5F5'}"
            >
              <el-table-column prop="name" label="中心化交易所名称"></el-table-column>
              <el-table-column prop="num" label="数量"></el-table-column>
              <el-table-column prop="time" label="时间"></el-table-column>
              <el-table-column prop="address" label="嫌疑人地址"></el-table-column>
            </el-table>
            <span>此类型可以通过联系交易所查询该地址对应的实名信息，进而获知对方的实际身份。</span>
            <ul class="ul_cont">
              <li>账户实名信息</li>
              <li>联系方式</li>
              <li>账户登录IP历史</li>
              <li>账户登录设备</li>
              <li>账户交易记录</li>
              <li>账户充提币记录</li>
              <li>同IP或者MAC登录的其他账户</li>
            </ul>
            <span>如果是特殊邮箱后缀同邮箱尾号创建的账户，交易所认为的可能和该项目相关联的可疑账户，拥有上述信息之后，可联系链审科技进行进一步追踪。</span>
            <div class="project_cont">
              <p class="project_title">2、累计充值信息</p>
              <span>以下地址，某天之内密集收到XX笔小额转账（笔数超过20笔），累计金额XX。高度怀疑为该项目嫌疑人的实控地址。</span>
            </div>
            <div class="project_cont">
              <p class="project_title">3、跑路信息</p>
              <span>以下地址，是该项目于XX暂停充提币之后，仍有资产转移的地址。高度怀疑为该项目嫌疑人的实控地址。</span>
            </div>
            <div class="project_cont">
              <p class="project_title">4、项目中心地址创建信息（第一笔钱）</p>
              <span>
                以下地址，是该项目中心地址创建时用于开设账户的地址，该地址的资金来源如下图：
                其中XX地址为中心化交易所地址，高度怀疑为该项目嫌疑人的实控地址。
              </span>
            </div>
            <!-- 创建信息 -->
            <div class="project_cont">
              <p class="project_title">5、创建信息</p>
              <span>上述高度怀疑地址由第三方钱包服务商创建的信息如下：</span>
              <el-table
                class="assetsTableData"
                :data="createTableData"
                stripe
                style="width:100%;"
                :header-cell-style="{background:'#F5F5F5'}"
              >
                <el-table-column prop="address" label="高度怀疑地址"></el-table-column>
                <el-table-column prop="num" label="设计数量"></el-table-column>
                <el-table-column prop="time" label="创建时间"></el-table-column>
                <el-table-column prop="createPerson" label="创建第三方服务商"></el-table-column>
              </el-table>
              <span>可以联系该钱包第三方服务商提供以下信息</span>
              <ul class="ul_cont">
                <li>登录设备、IP、MAC等信息</li>
                <li>同设备登录的其他钱包地址信息</li>
                <li>其他改地址有关的一切信息</li>
              </ul>
            </div>
            <!-- 空投信息 -->
            <div class="project_cont">
              <p class="project_title">6、空投信息</p>
              <span>以下地址，向项目中心地址进行了无关转账</span>
              <el-table
                class="assetsTableData"
                :data="airdropTableData"
                stripe
                style="width:100%;"
                :header-cell-style="{background:'#F5F5F5'}"
              >
                <el-table-column prop="adress" label="地址"></el-table-column>
                <el-table-column prop="type" label="转账币种"></el-table-column>
                <el-table-column prop="num" label="数量"></el-table-column>
                <el-table-column prop="status" label="是否正常"></el-table-column>
              </el-table>
            </div>
            <!-- 混币器信息 -->
            <div class="project_cont">
              <p class="project_title">7、混币器信息</p>
              <span>以下地址，从项目中心获得资产以后将数字货币转入国内外知名混币器，因此具备中度嫌疑：</span>
              <el-table
                class="assetsTableData"
                :data="mixerTableData"
                stripe
                style="width:100%;"
                :header-cell-style="{background:'#F5F5F5'}"
              >
                <el-table-column prop="adress" label="地址"></el-table-column>
                <el-table-column prop="num" label="转入混币器数量"></el-table-column>
                <el-table-column prop="money" label="同一地址其他可追踪的在转账"></el-table-column>
                <el-table-column prop="last" label="最终方式"></el-table-column>
              </el-table>
            </div>
            <!-- 查询信息 -->
            <div class="project_cont">
              <p class="project_title">8、查询信息</p>
              <span>以下用户，登录链审网站，尝试并搜索相关项目信息。</span>
              <el-table
                class="assetsTableData"
                :data="searchTableData"
                stripe
                style="width:100%;"
                :header-cell-style="{background:'#F5F5F5'}"
              >
                <el-table-column prop="phone" label="手机号"></el-table-column>
                <el-table-column prop="ip" label="IP"></el-table-column>
                <el-table-column prop="mac" label="Mac"></el-table-column>
                <el-table-column prop="type" label="操作类型"></el-table-column>
                <el-table-column prop="address" label="查询地址"></el-table-column>
              </el-table>
            </div>
            <!-- 关联信息 -->
            <div class="project_cont">
              <p class="project_title">9、关联信息</p>
              <span>该项目关联项目包括以下，操盘手可能为同一项目方。</span>
            </div>
            <!-- 举报信息 -->
            <div class="project_cont">
              <p class="project_title">10、举报信息</p>
              <span>以下用户，针对同一项目进行了举报，对应描述的内容和提供的图片如下</span>
            </div>
            <!-- 总结 -->
            <div class="project_cont">
              <p class="project_title">总结</p>
              <span>以下地址实际持有项目最终资产，查询方式请查看附录1</span>
              <el-table
                class="assetsTableData"
                :data="summaryTableData"
                stripe
                style="width:100%;"
                :header-cell-style="{background:'#F5F5F5'}"
              >
                <el-table-column prop="adress" label="地址"></el-table-column>
                <el-table-column prop="type" label="怀疑等级"></el-table-column>
                <el-table-column prop="num" label="怀疑原因"></el-table-column>
                <el-table-column prop="status" label="累计金额"></el-table-column>
                <el-table-column prop="status" label="目前余额"></el-table-column>
                <el-table-column prop="status" label="进一步追踪方式"></el-table-column>
              </el-table>
            </div>
            <!-- 附录 -->
            <div class="project_cont">
              <p class="project_title">附录1</p>
              <a class="catalog" href="#">火币查询方法和需要文件</a>
              <div class="searchButtonCont">
                <el-button type="primary" class="searchButton">一键授权代查</el-button>
              </div>
            </div>
          </div>
          <!-- <div class="project_cont">
            <p class="project_title">项目资产分析：</p>
            <span>资产最终汇集地址前十大</span>
            <span>项目中心地址数据</span>
            <span>累计充值，累计冲入地址数量，累计出金，资金目前存留</span>
          </div>-->
        </el-card>
      </el-card>
    </div>
  </div>
</template>

<script>
// import * as Api_browser from "@/api/browser";
export default {
  data() {
    return {
      assetsTableData: [
        {
          address: "",
          money: "",
          count: "",
          lastAddress: "",
          lastType: "",
          lastMoney: ""
        }
      ],
      analysisTableData: [
        {
          name: "",
          num: "",
          time: "",
          address: ""
        }
      ],
      createTableData: [
        {
          address: "",
          num: "",
          time: "",
          createPerson: ""
        }
      ],
      airdropTableData: [
        {
          address: "",
          type: "",
          num: "",
          status: ""
        }
      ],
      mixerTableData: [
        {
          address: "",
          num: "",
          money: "",
          last: ""
        }
      ],
      searchTableData: [
        {
          phone: "",
          ip: "",
          mac: "",
          type: "",
          address: ""
        }
      ],
      summaryTableData: [
        {
          address: "",
          type: "",
          num: "",
          status: ""
        }
      ]
    };
  },
  mounted() {
    // document.documentElement.style.overflow = "hidden";
  },
  methods: {}
};
</script>

<style  scoped>
ul li,
ol,
li {
  list-style: disc;
}
.searchButtonCont {
  float: right;
  height: 40px;
  text-align: center;
}
.searchButton {
  width: 100%;
  height: 100%;
}
.catalog {
  display: block;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #0074f8;
  line-height: 16px;
}
.project_title {
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
  font-weight: 550;
  margin-bottom: 20px;
}
.project_cont span {
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #151c2c;
  line-height: 24px;
  display: block;
  margin-bottom: 10px;
}
.project_cont {
  margin-bottom: 20px;
}
.project_cont:first-child {
  margin-bottom: 30px;
}
.assetsTableData {
  margin-top: 20px;
  margin-bottom: 10px;
}
.assets_thumbnail {
  height: 544px;
}
/deep/ .outline_card > .el-card__body {
  padding-top: 0px;
  padding-bottom: 55px;
}
.assets_card {
  margin-bottom: 20px;
}
.outline_card {
  margin-bottom: 20px;
}
.abstract {
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 24px;
  margin-top: 10px;
}
/* .serchButton{
  background: blue;
} */
.blockInfo {
  border-bottom: 1px solid #eeeeee;
}
.balance {
  height: 56px;
  padding: 20px;
  padding-left: 0px;
  line-height: 0.833vw;
}
.block_title {
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
}
.ul_cont {
  font-family: PingFang-SC-Regular;
  font-size: 16px;
  color: #151c2c;
  line-height: 26px;
  padding-left: 25px;
}
.block_detail {
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  float: right;
  line-height: 16px;
  opacity: 0.8;
  vertical-align: middle;
}
/* .blockInfo:last-child {
  border: none;
} */
.currency_title {
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #151c2c;
  line-height: 16px;
}
.title_head {
  font-family: PingFang-SC-Bold;
  font-size: 20px;
  color: #151c2c;
  line-height: 20px;
}
.title_tag {
  float: right;
  position: relative;
  bottom: 3px;
}
.title_tag p {
  background: #0074f8;
  border-radius: 3px;
  font-family: PingFang-SC-Bold;
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  height: 30px;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}
.operationButton img {
  height: 22px;
  width: 22px;
  margin-left: 13px;
  margin-right: 13px;
  cursor: pointer;
}
/* .operationButton img:last-child {
  margin-right: 20px;
} */
/deep/ .el-card__header {
  background: #e5e9ef;
  font-family: PingFang-SC-Bold;
  font-size: 14px;
  color: #151c2c;
  line-height: 16px;
}
/deep/ .title_card > .el-card__header {
  background: white;
}
.title_card {
  margin-bottom: 20px;
}
.overview-card {
  width: 100%;
  height: 100%;
}
.overview_info {
  margin-top: 30px;
  width: 100%;
  /* height: 226px; */
  height: 25%;
}
.transactions_info {
  margin-top: 25px;
  width: 100%;
  /* height: 552px; */
  height: 60%;
  margin-bottom: 25px;
}
.address_info {
  margin-bottom: 20px;
}
.address_info span {
  font-family: PingFang-SC-Bold;
  font-size: 20px;
  color: #ffffff;
  vertical-align: middle;
}
.app-cont {
  width: 73%;
  margin: 0 auto;
  color: white;
  margin-top: 25px;
  height: 50%;
}
.browser {
  width: 100%;
  height: 100%;
  display: flex;
}
.address {
  padding-left: 18px;
}
.input-with-select {
  background: #ffffff;
  border: 1px solid #1a6dff;
  border-radius: 8px;
  width: 320px;
  height: 44px;
  float: right;
  position: relative;
  bottom: 8px;
}
/deep/ .el-input__inner {
  border: none;
  height: 100%;
  border-radius: 8px;
}
.operationButton {
  float: right;
  /* position: relative;
  top: 15px; */
}
</style>