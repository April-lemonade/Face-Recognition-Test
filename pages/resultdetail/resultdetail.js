import * as echarts from '../../ec-canvas/echarts';
const app = getApp();

function initChart1(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    toolbox:{
      show: true,
      feature: {
          magicType: {type: ['line', 'bar']},
      }
    },
    legend: {
      data: ['拒识率', '误识率'],
      top: 40,
      left: 'center',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },

    xAxis: {
      name: '阈值',
      nameTextStyle: {
        padding: [0, 0, 0, -10] // 四个数字分别为上右下左与原位置距离
      },
      type: 'category',
      boundaryGap: false,
      data: ['0.60', '0.65', '0.70', '0.75', '0.80', '0.85', '0.90'],
      show: true
    },
    yAxis: {
      name: '拒识率/误识率',
      x: 'center',
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: '拒识率',
      type: 'line',
      smooth: true,
      data: [1.08, 0.31, 0.27, 0.29, 0.89, 1.18, 1.25],
      markLine: {
        symbol: "none",
        silent: true,
        label: {
          show: true,
          normal: {
            formatter: "ave:{c}%",
            position: "middle",
          },
        },
        data: [{
          type: "average", // type 类型， 可以是最大值max， 最小值min， 平均值
          name: "平均值",
        }, ],
      },
    }, {
      name: '误识率',
      type: 'line',
      smooth: true,
      data: [0.25, 0.42, 0.45, 0.77, 0.11, 1.25, 1.72],
      markLine: {
        symbol: "none",
        silent: true,
        label: {
          show: true,
          normal: {
            formatter: "ave:{c}%",
            position: "start",
          },
        },
        data: [{
          type: "average", // type 类型， 可以是最大值max， 最小值min， 平均值
          name: "平均值",
        }, ],
      }
    }]
  };
  chart.setOption(option);
  return chart;
}

function initChart2(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    toolbox:{
      show: true,
      feature: {
          magicType: {type: ['line', 'bar']},
      }
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      name: 'False Positive Rate',
      nameLocation: "center",
      nameTextStyle: {
        padding: [10, 0, 0, -10] // 四个数字分别为上右下左与原位置距离
      },
      type: 'category',
      boundaryGap: false,
      data: ['0', '0.2', '0.4', '0.6', '0.8', '1'],
      // show: false
    },
    yAxis: {
      name: 'True Positive Rate',
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      type: 'line',
      smooth: true,
      data: [0, 0.6, 0.78, 0.85, 0.95, 0.99],
      markLine: {
        name: "random chance",
        symbol: "none", //去掉箭头
        label: {
          show: true,
          position: "middle",
          color: "red",
          formatter: function (params) {
            return "randome chance";
          },
        },
        data: [
          [{
              coord: [0, 0],
            },
            {
              coord: ['1', 1],
            },
          ],
        ],
      },
      itemStyle: {
        normal: {
          color: '#289df5', // 折线条的颜色
          borderColor: '#289df5', // 拐点边框颜色
          areaStyle: {
            type: 'default',
            opacity: 0.1
          }
        }
      }
    }]
  };

  chart.setOption(option);
  return chart;
}

function initChart3(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    toolbox:{
      show: true,
      feature: {
          magicType: {type: ['line', 'bar']},
      }
    },
    legend: {
      data: ['拒识率', '误识率'],
      top: 40,
      left: 'center',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      name: '年龄',
      nameTextStyle: {
        padding: [0, 0, 0, -10] // 四个数字分别为上右下左与原位置距离
      },
      type: 'category',
      boundaryGap: false,
      data: ['儿童', '少年', '青年', '中年', '老年'],
      // show: false
    },
    yAxis: {
      name: '拒识率/误识率',
      x: 'center',
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
        name: '拒识率',
        type: 'line',
        smooth: true,
        data: [0.9, 0.3, 0.25, 0.2, 0.9],
        markLine: {
          symbol: "none",
          silent: true,
          label: {
            show: true,
            normal: {
              formatter: "ave:{c}%",
              position: "middle",
            },
          },
          data: [{
            type: "average", // type 类型， 可以是最大值max， 最小值min， 平均值
            name: "平均值",
          }, ],
        },
      },
      {
        name: '误识率',
        type: 'line',
        smooth: true,
        data: [0.35, 0.55, 0.45, 0.78, 0.1],
        markLine: {
          symbol: "none",
          silent: true,
          label: {
            show: true,
            normal: {
              formatter: "ave:{c}%",
              position: "start",
            },
          },
          data: [{
            type: "average", // type 类型， 可以是最大值max， 最小值min， 平均值
            name: "平均值",
          }, ],
        },
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

function initChart4(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    toolbox:{
      show: true,
      feature: {
          magicType: {type: ['line', 'bar']},
      }
    },
    legend: {
      data: ['男性拒识率', '男性误识率','', '女性拒识率', '女性误识率'],
      right: 50,
      //left: 'center',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      name: '阈值',
      nameTextStyle: {
        padding: [0, 0, 0, -10] // 四个数字分别为上右下左与原位置距离
      },
      type: 'category',
      boundaryGap: false,
      data: ['0.60', '0.65', '0.70', '0.75', '0.80', '0.85', '0.90', '0.95'],
      // show: false
    },
    yAxis: {
      name: '拒识率/误识率',
      x: 'center',
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
        name: '男性拒识率',
        type: 'line',
        smooth: false,
        data: [0.1, 0.15, 0.09, 0.19, 0.9, 0.29, 0.25],
      },
      {
        name: '男性误识率',
        type: 'line',
        smooth: false,
        data: [0.315, 0.310, 0.30, 0.35, 1.2, 0.55, 0.50],
      },
      {
        name: '女性拒识率',
        type: 'line',
        smooth: false,
        data: [0.52, 0.59, 0.50, 0.52, 1.35, 0.87, 0.92],
      },
      {
        name: '女性误识率',
        type: 'line',
        smooth: false,
        data: [0.85, 0.89, 0.80, 0.87, 1.78, 1.2, 1.25],
      }
    ]
  };

  chart.setOption(option);
  return chart;
}

function initChart5(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  const model = {
    xCates: ['儿童', '少年', '青年',
      '中年', '老年'
    ],
    yCates: ['俄罗斯', '波兰', '墨西哥', '尼日利亚', '牙买加', '印度', '伊朗', '中国', '泰国'],

    data: [
      // [yCateIndex, xCateIndex, value]
      [0, 0, -4.01],
      [1, 0, -5],
      [2, 0, -6],
      [3, 0, -8.02],
      [4, 0, 0.01],
      [5, 0, -7],
      [6, 0, -12],
      [7, 0, -14],
      [8, 0, -4],
      [0, 1, 10],
      [1, 1, -12],
      [2, 1, 8],
      [3, 1, 9],
      [4, 1, -6],
      [5, 1, -1],
      [6, 1, -5],
      [7, 1, -1],
      [8, 1, -10],
      [0, 2, -4],
      [1, 2, -14],
      [2, 2, 9],
      [3, 2, 14],
      [4, 2, 4],
      [5, 2, -3],
      [6, 2, 0.3],
      [7, 2, 15],
      [8, 2, -8],
      [0, 3, 4],
      [1, 3, 4],
      [2, 3, 4],
      [3, 3, 4],
      [4, 3, 4],
      [5, 3, 4],
      [6, 3, 4],
      [7, 3, 4],
      [8, 3, 4],
      [0, 4, 10],
      [1, 4, 10],
      [2, 4, 10],
      [3, 4, 10],
      [4, 4, 10],
      [5, 4, 10],
      [6, 4, 10],
      [7, 4, 10],
      [8, 4, 10],
    ]
  };

  const data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  const option = {
    tooltip: {
      position: 'top'
    },
    animation: false,
    grid: {
      bottom: 60,
      top: 40,
      left: 80
    },
    xAxis: {
      type: 'category',
      data: model.xCates,
      axisLabel: {
        interval: 0,
        formatter: function (value) {
          return value.split("").join("\n");
        }
      }
    },
    yAxis: {
      type: 'category',
      data: model.yCates
    },
    visualMap: {
      min: 1,
      max: 10,
      show: true,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      top: -5,
      inRange: {
        color: ["rgb(162,172,196)",
        "rgb(226,182,179)",
        "rgb(208,105,105)",],
      }
    },
    series: [{
      type: 'heatmap',
      data: data,
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  chart.setOption(option);
  return chart;
}

function initChart6(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  const model = {
    xCates: ['儿童', '少年', '青年',
      '中年', '老年'
    ],
    yCates: ['俄罗斯', '波兰', '墨西哥', '尼日利亚', '牙买加', '印度', '伊朗', '中国', '泰国'],

    data: [
      // [yCateIndex, xCateIndex, value]
      [0, 0, -4.01],
      [1, 0, -5],
      [2, 0, -6],
      [3, 0, -8.02],
      [4, 0, 0.01],
      [5, 0, -7],
      [6, 0, -12],
      [7, 0, -14],
      [8, 0, -4],
      [0, 1, 10],
      [1, 1, -12],
      [2, 1, 8],
      [3, 1, 9],
      [4, 1, -6],
      [5, 1, -1],
      [6, 1, -5],
      [7, 1, -1],
      [8, 1, -10],
      [0, 2, -4],
      [1, 2, -14],
      [2, 2, 9],
      [3, 2, 14],
      [4, 2, 4],
      [5, 2, -3],
      [6, 2, 0.3],
      [7, 2, 15],
      [8, 2, -8],
      [0, 3, 4],
      [1, 3, 4],
      [2, 3, 4],
      [3, 3, 4],
      [4, 3, 4],
      [5, 3, 4],
      [6, 3, 4],
      [7, 3, 4],
      [8, 3, 4],
      [0, 4, 10],
      [1, 4, 10],
      [2, 4, 10],
      [3, 4, 10],
      [4, 4, 10],
      [5, 4, 10],
      [6, 4, 10],
      [7, 4, 10],
      [8, 4, 10],
    ]
  };

  const data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  const option = {
    tooltip: {
      position: 'top'
    },
    animation: false,
    grid: {
      bottom: 60,
      top: 40,
      left: 80
    },
    xAxis: {
      type: 'category',
      data: model.xCates,
      axisLabel: {
        interval: 0,
        formatter: function (value) {
          return value.split("").join("\n");
        }
      }
    },
    yAxis: {
      type: 'category',
      data: model.yCates
    },
    visualMap: {
      min: 1,
      max: 10,
      show: true,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      top: -5,
      inRange: {
        color: ["rgb(162,172,196)",
        "rgb(226,182,179)",
        "rgb(208,105,105)",],
      }
    },
    series: [{
      type: 'heatmap',
      data: data,
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  chart.setOption(option);
  return chart;
}

function initChart7(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  const model = {
    xCates: ['儿童', '少年', '青年',
      '中年', '老年'
    ],
    yCates: ['俄罗斯', '波兰', '墨西哥', '尼日利亚', '牙买加', '印度', '伊朗', '中国', '泰国'],

    data: [
      // [yCateIndex, xCateIndex, value]
      [0, 0, -4.01],
      [1, 0, -5],
      [2, 0, -6],
      [3, 0, -8.02],
      [4, 0, 0.01],
      [5, 0, -7],
      [6, 0, -12],
      [7, 0, -14],
      [8, 0, -4],
      [0, 1, 10],
      [1, 1, -12],
      [2, 1, 8],
      [3, 1, 9],
      [4, 1, -6],
      [5, 1, -1],
      [6, 1, -5],
      [7, 1, -1],
      [8, 1, -10],
      [0, 2, -4],
      [1, 2, -14],
      [2, 2, 9],
      [3, 2, 14],
      [4, 2, 4],
      [5, 2, -3],
      [6, 2, 0.3],
      [7, 2, 15],
      [8, 2, -8],
      [0, 3, 4],
      [1, 3, 4],
      [2, 3, 4],
      [3, 3, 4],
      [4, 3, 4],
      [5, 3, 4],
      [6, 3, 4],
      [7, 3, 4],
      [8, 3, 4],
      [0, 4, 10],
      [1, 4, 10],
      [2, 4, 10],
      [3, 4, 10],
      [4, 4, 10],
      [5, 4, 10],
      [6, 4, 10],
      [7, 4, 10],
      [8, 4, 10],
    ]
  };

  const data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  const option = {
    tooltip: {
      position: 'top'
    },
    animation: false,
    grid: {
      bottom: 60,
      top: 40,
      left: 80
    },
    xAxis: {
      type: 'category',
      data: model.xCates,
      axisLabel: {
        interval: 0,
        formatter: function (value) {
          return value.split("").join("\n");
        }
      }
    },
    yAxis: {
      type: 'category',
      data: model.yCates
    },
    visualMap: {
      min: 1,
      max: 10,
      show: true,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      top: -5,
      inRange: {
        color: ["rgb(162,172,196)",
        "rgb(226,182,179)",
        "rgb(208,105,105)",],
      }
    },
    series: [{
      type: 'heatmap',
      data: data,
      label: {
        normal: {
          show: true
        }
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  chart.setOption(option);
  return chart;
}
function initChart8(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    toolbox:{
      show: true,
      feature: {
          magicType: {type: ['line', 'bar']},
      }
    },
    legend: {
      data: ['拒识率', '误识率'],
      top: 40,
      left: 'center',
      z: 100
    },
    grid: {
      containLabel: true
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },

    xAxis: {
      name: '量级',
      nameTextStyle: {
        padding: [0, 0, 0, -10] // 四个数字分别为上右下左与原位置距离
      },
      type: 'category',
      boundaryGap: false,
      data: ['5e+03', '1e+04', '5e+04', '1e+05'],
      show: true
    },
    yAxis: {
      name: '拒识率/误识率',
      x: 'center',
      type: 'value',
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %'
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
      // show: false
    },
    series: [{
      name: '拒识率',
      type: 'line',
      smooth: true,
      data: [0.25, 0.89, 1.1, 1.25],
      markLine: {
        symbol: "none",
        silent: true,
        label: {
          show: true,
          normal: {
            formatter: "ave:{c}%",
            position: "middle",
          },
        },
        data: [{
          type: "average", // type 类型， 可以是最大值max， 最小值min， 平均值
          name: "平均值",
        }, ],
      },
    }, {
      name: '误识率',
      type: 'line',
      smooth: true,
      data: [0.32, 0.85, 1.15, 1.7],
      markLine: {
        symbol: "none",
        silent: true,
        label: {
          show: true,
          normal: {
            formatter: "ave:{c}%",
            position: "start",
          },
        },
        data: [{
          type: "average", // type 类型， 可以是最大值max， 最小值min， 平均值
          name: "平均值",
        }, ],
      }
    }]
  };
  chart.setOption(option);
  return chart;
}
Page({
  data: {
    ecLine1: {
      // 如果想要禁止触屏事件，以保证在图表区域内触摸移动仍能滚动页面，
      // 就将 disableTouch 设为 true
      // disableTouch: true,
      onInit: initChart1
    },
    ecLine2: {
      onInit: initChart2
    },
    ecLine3: {
      onInit: initChart3
    },
    ecLine4: {
      onInit: initChart4
    },
    ecHeat1: {
      onInit: initChart5
    },
    ecHeat2: {
      onInit: initChart6
    },
    ecHeat3: {
      onInit: initChart7
    },
    ecLine5: {
      onInit: initChart8
    }
  },
  onLoad() {
    wx.request({
      url: 'http://47.101.133.12:8077/graph/lineVO',
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {

      }
    })
  },
  onReady() {},
  download(e) {
    const ecComponent = this.selectComponent(e.currentTarget.dataset.id);

     // 先保存图片到临时的本地文件，然后存入系统相册
    ecComponent.canvasToTempFilePath({
      success: res => {
        console.log("tempFilePath:", res.tempFilePath)

        // 存入系统相册
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath || '',
          success: res => {
            console.log("success", res)
          },
          fail: res => {
            console.log("fail", res)
          }
        })
      },
      fail: res => console.log(res)
    });
  }
});