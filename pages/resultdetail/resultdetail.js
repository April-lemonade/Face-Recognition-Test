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
    title: {
      text: '图表1',
      left: 'center'
    },
    legend: {
      data: ['A'],
      top: 50,
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
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
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
      name: 'A',
      type: 'line',
      smooth: true,
      data: [18, 36, 65, 30, 78, 40, 33]
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
    title: {
      text: '图表2',
      left: 'center'
    },
    legend: {
      data: ['B'],
      top: 50,
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
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
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
      name: 'B',
      type: 'line',
      smooth: true,
      data: [12, 50, 51, 35, 70, 30, 20]
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
    title: {
      text: '图表3',
      left: 'center'
    },
    legend: {
      data: ['B'],
      top: 50,
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
      type: 'category',
      boundaryGap: false,
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      // show: false
    },
    yAxis: {
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
      name: 'C',
      type: 'line',
      smooth: true,
      data: [10, 30, 31, 50, 40, 20, 10]
    }]
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

  const model = {
    yCates: ['Saturday', 'Friday', 'Thursday',
      'Wednesday', 'Tuesday', 'Monday',
      'Sunday'],
    xCates: ['1', '2', '3', '4', '5'],
    data: [
      // [yCateIndex, xCateIndex, value]
      [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2],
      [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2],
      [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7],
      [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6],
      [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9],
      [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7],
      [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2]
    ]
  };

  const data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  const option = {
    title: {
      text: '图表1',
      top: '5%',
      left: 'center'
    },
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
      data: model.xCates
    },
    yAxis: {
      type: 'category',
      data: model.yCates
    },
    visualMap: {
      min: 1,
      max: 10,
      show: false,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      inRange: {
        color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
      }
    },
    series: [{
      name: 'Punch Card',
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
function initChart5(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  const model = {
    yCates: ['Saturday', 'Friday', 'Thursday',
      'Wednesday', 'Tuesday', 'Monday',
      'Sunday'],
    xCates: ['1', '2', '3', '4', '5'],
    data: [
      // [yCateIndex, xCateIndex, value]
      [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2],
      [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2],
      [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7],
      [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6],
      [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9],
      [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7],
      [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2]
    ]
  };

  const data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  const option = {
    title: {
      text: '图表2',
      top: '5%',
      left: 'center'
    },
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
      data: model.xCates
    },
    yAxis: {
      type: 'category',
      data: model.yCates
    },
    visualMap: {
      min: 1,
      max: 10,
      show: false,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      inRange: {
        color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
      }
    },
    series: [{
      name: 'Punch Card',
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
    yCates: ['Saturday', 'Friday', 'Thursday',
      'Wednesday', 'Tuesday', 'Monday',
      'Sunday'],
    xCates: ['1', '2', '3', '4', '5'],
    data: [
      // [yCateIndex, xCateIndex, value]
      [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2],
      [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2],
      [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7],
      [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6],
      [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9],
      [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7],
      [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2]
    ]
  };

  const data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  const option = {
    title: {
      text: '图表3',
      top: '5%',
      left: 'center'
    },
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
      data: model.xCates
    },
    yAxis: {
      type: 'category',
      data: model.yCates
    },
    visualMap: {
      min: 1,
      max: 10,
      show: false,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      inRange: {
        color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
      }
    },
    series: [{
      name: 'Punch Card',
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
    yCates: ['Saturday', 'Friday', 'Thursday',
      'Wednesday', 'Tuesday', 'Monday',
      'Sunday'],
    xCates: ['1', '2', '3', '4', '5'],
    data: [
      // [yCateIndex, xCateIndex, value]
      [0, 0, 5], [0, 1, 7], [0, 2, 3], [0, 3, 5], [0, 4, 2],
      [1, 0, 1], [1, 1, 2], [1, 2, 4], [1, 3, 8], [1, 4, 2],
      [2, 0, 2], [2, 1, 3], [2, 2, 8], [2, 3, 6], [2, 4, 7],
      [3, 0, 3], [3, 1, 7], [3, 2, 5], [3, 3, 1], [3, 4, 6],
      [4, 0, 3], [4, 1, 2], [4, 2, 7], [4, 3, 8], [4, 4, 9],
      [5, 0, 2], [5, 1, 2], [5, 2, 3], [5, 3, 4], [5, 4, 7],
      [6, 0, 6], [6, 1, 5], [6, 2, 3], [6, 3, 1], [6, 4, 2]
    ]
  };

  const data = model.data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  const option = {
    title: {
      text: '图表4',
      top: '5%',
      left: 'center'
    },
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
      data: model.xCates
    },
    yAxis: {
      type: 'category',
      data: model.yCates
    },
    visualMap: {
      min: 1,
      max: 10,
      show: false,
      calculable: true,
      orient: 'horizontal',
      left: 'center',
      bottom: 10,
      inRange: {
        color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
      }
    },
    series: [{
      name: 'Punch Card',
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
    ecHeat1: {
      onInit: initChart4
    },
    ecHeat2: {
      onInit: initChart5
    },
    ecHeat3: {
      onInit: initChart6
    },
    ecHeat4: {
      onInit: initChart7
    }
  },

  onReady() {
  }
});

