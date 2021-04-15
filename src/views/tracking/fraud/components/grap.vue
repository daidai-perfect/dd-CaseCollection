<template>
  <div class="contier">
    <!-- <el-card class="dia_card">
      <div slot="header" class="grap_title">
        <span>摘要</span>
        <i class="el-icon-close" style="float: right; padding: 3px 0" />
      </div>
      <el-form :model="form" label-width="90px" label-position="top" class="address">
        <el-form-item label="当前地址">
          <a href="#">0xff8a045d2fab0ebb9157dcd80lkajsdfi…</a>
          <img src="@/assets/copy.png" />
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item label="当前金额：">132</el-form-item>
        <el-form-item label="首次交易时间：">132</el-form-item>
        <el-form-item label="交易次数：">132</el-form-item>
        <el-form-item label="最大一笔交易金额：">132</el-form-item>
        <el-form-item label="累计接受金额：">132</el-form-item>
        <el-form-item label="累计发送金额：">132</el-form-item>
      </el-form>
    </el-card>-->
    <div id="diagramMap-fraud"></div>
  </div>
</template>

<script>
import * as data from "../templates/data";
import * as Api_grap from "@/api/grap";
let option = {
  title: {
    text: ""
  },
  tooltip: {},
  animationDurationUpdate: 1500,
  animationEasingUpdate: "quinticInOut",
  label: {
    normal: {
      show: true,
      textStyle: {
        fontSize: 12
      }
    }
  },
  legend: {
    x: "center",
    show: false,
    data: ["1", "2", "3"]
  },
  series: [
    {
      type: "graph",
      layout: "force",
      // 这个可以单独给点设置
      symbolSize: 45,
      focusNodeAdjacency: true,
      roam: true,
      categories: [
        {
          name: "1",
          itemStyle: {
            normal: {
              color: "yellow"
            }
          }
        },
        {
          name: "2",
          itemStyle: {
            normal: {
              color: "yellow"
            }
          }
        },
        {
          name: "3",
          itemStyle: {
            normal: {
              color: "blue"
            }
          }
        }
      ],
      label: {
        normal: {
          show: true,
          position: "bottom",
          textStyle: {
            fontSize: 12
          },
          formatter: function(val) {
            console.log(val);
            if (val.data.isLogo) {
              return "Binance " + val.name.substring(0, 6) + "...";
            }
            return val.name.substring(0, 6) + "...";
          }
        }
      },
      force: {
        repulsion: 2500
      },
      edgeSymbolSize: [1, 10],
      edgeSymbol: ["none", "arrow"],
      edgeLabel: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 10
          },
          formatter: "{c}"
        }
      },
      data: [],
      links: []
    }
  ]
};
export default {
  props: {
    form: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      option
    };
  },
  methods: {
    fetchData() {
      var s = data.getImg();
      Api_grap.getGrapByAddress(this.form).then(res => {
        if (res.nodeList != []) {
          var data = [];
          var links = [];
          res.nodeList.forEach(item => {
            if (item.propertyList[3].key == "cc_num") {
              data.push({
                name: item.propertyList[4].value,
                category: 1,
                draggable: true,
                symbol: s,
                isLogo: true
              });
            } else if (this.form.address != item.propertyList[3].value) {
              data.push({
                name: item.propertyList[3].value,
                category: 2,
                draggable: true
              });
            } else {
              data.push({
                name: item.propertyList[3].value,
                category: 1,
                draggable: true
              });
            }
          });
          let count = 0;
          res.relList.forEach((item, index) => {
            count++;
            console.log(item);
            links.push({
              source: item.propertyList[1].value,
              target: item.propertyList[item.propertyList.length - 1].value,
              value: item.propertyList[9].value,
              id: item.id,
              lineStyle: {
                normal: {
                  opacity: 0.9,
                  width: 2,
                  curveness: 0.15 * count
                }
              }
            });
          });
          this.option.series[0].data = data;
          this.option.series[0].links = links;
          setTimeout(() => {
            this.getGrap();
          }, 500);
        } else {
          this.$messge.warning("暂无数据");
          return;
        }
      });
    },
    getGrap() {
      console.log(this.option);
      let myChart;
      if (myChart != null && myChart != "" && myChart != undefined) {
        myChart.dispose();
      }
      myChart = this.$echarts.init(document.getElementById("diagramMap-fraud"));
      // 绘制图表
      // myChart.clear();
      myChart.setOption(this.option);
      // 绘制图表
      let that = this;
      myChart.on("click", eConsole);
      function eConsole(e) {
        console.log("监听~", e);
      }
    }
  }
};
</script>

<style scoped>
.grap_title span {
  font-family: PingFang-SC-Bold;
  font-size: 20px;
  color: #151c2c;
  line-height: 20px;
}
/deep/ .address .el-form-item__content {
  line-height: 0 !important;
}
/deep/ .address > .el-form-item__label {
  padding: 0;
}
.address {
  padding-bottom: 10px;
}
.address a {
  vertical-align: middle;
}
.address img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  padding-left: 3px;
  cursor: pointer;
}
/deep/ .el-form-item {
  margin-bottom: 1px !important;
}
.dia_card {
  width: 31%;
  background: #e5e9ef;
  position: absolute;
  left: 20px;
  top: 20px;
  z-index: 99;
  /* left: ; */
  /* margin-top: 10px; */
}
/deep/ .el-card__header {
  background: none !important;
  border: none;
}
.contier {
  height: 100%;
  width: 100%;
  position: relative;
}
#diagramMap-fraud {
  height: 100%;
  width: 100%;
}
</style>