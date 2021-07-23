<template>
  <div class="contier">
    <el-card class="dia_card">
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
    </el-card>
    <div id="diagramMap-vic"></div>
  </div>
</template>

<script>
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
      symbolSize: 45,
      focusNodeAdjacency: true,
      roam: true,
      categories: [
        {
          name: "1",
          itemStyle: {
            normal: {
              color: "#009800"
            }
          }
        },
        {
          name: "2",
          itemStyle: {
            normal: {
              color: "#4592FF"
            }
          }
        },
        {
          name: "3",
          itemStyle: {
            normal: {
              color: "#3592F"
            }
          }
        }
      ],
      label: {
        normal: {
          show: true,
          position: 'bottom',
          textStyle: {
            fontSize: 12
          }
        }
      },
      force: {
        repulsion: 1000
      },
      edgeSymbolSize: [1, 5],
      edgeSymbol: ['none', 'arrow'],
      edgeLabel: {
        normal: {
          show: true,
          textStyle: {
            fontSize: 10
          },
          formatter: "{c}"
        }
      },
      data: [
        {
          name: "节点0",
          draggable: true
        },
        {
          name: "节点1",
          category: 1,
          draggable: true
        },
        {
          name: "节点2",
          category: 1,
          draggable: true
        },
        {
          name: "节点3",
          category: 1,
          draggable: true
        },
        {
          name: "节点4",
          category: 1,
          draggable: true
        },
        {
          name: "节点5",
          category: 1,
          draggable: true
        },
        {
          name: "节点6",
          category: 1,
          draggable: true
        },
        {
          name: "节点7",
          category: 1,
          draggable: true
        },
        {
          name: "节点8",
          category: 1,
          draggable: true
        },
        {
          name: "节点9",
          category: 1,
          draggable: true
        },
        {
          name: "节点10",
          category: 1,
          draggable: true
        },
        {
          name: "节点11",
          category: 1,
          draggable: true
        },
        {
          name: "节点12",
          category: 1,
          draggable: true
        }
      ],
      links: [
        {
          source: 0,
          target: 1,
          category: 0,
          value: "0-1"
        },
        {
          source: 0,
          target: 2,
          value: "0-2"
        },
        {
          source: 0,
          target: 3,
          value: "0-3"
        },
        {
          source: 0,
          target: 4,
          value: "0-4"
        },
        {
          source: 1,
          target: 2,
          value: "1-2"
        },
        {
          source: 0,
          target: 5,
          value: "0-5"
        },
        {
          source: 4,
          target: 5,
          value: "4-5"
        },
        {
          source: 2,
          target: 8,
          value: "2-8"
        },
        {
          source: 0,
          target: 12,
          value: "0-12"
        },
        {
          source: 6,
          target: 11,
          value: "6-11"
        },
        {
          source: 6,
          target: 3,
          value: "6-3"
        },
        {
          source: 7,
          target: 5,
          value: "7-5"
        },
        {
          source: 9,
          target: 10,
          value: "9-10"
        },
        {
          source: 3,
          target: 10,
          value: "3-10"
        },
        {
          source: 2,
          target: 11,
          value: "2-11"
        }
      ],
      lineStyle: {
        normal: {
          opacity: 0.9,
          width: 1,
          curveness:0.3
        }
      }
    }
  ]
};
export default {
  data() {
    return {
      option,
      form: {}
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      console.log(this.option);
      let myChart;
      if (myChart != null && myChart != "" && myChart != undefined) {
        myChart.dispose();
      }
      myChart = this.$echarts.init(document.getElementById("diagramMap-vic"));
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
::v-deep .address .el-form-item__content {
  line-height: 0 !important;
}
::v-deep .address > .el-form-item__label {
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
::v-deep .el-form-item {
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
::v-deep .el-card__header {
  background: none !important;
  border: none;
}
.contier {
  height: 100%;
  width: 100%;
  position: relative;
}
#diagramMap-vic {
  height: 100%;
  width: 100%;
}
</style>