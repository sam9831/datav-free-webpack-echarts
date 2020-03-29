import ECharts from 'echarts'

const chartDom = document.getElementById('chart')
const chart = ECharts.init(chartDom)
chart.setOption({
  title: {
    text: '快速入门ECharts开发'
  },
  xAxis: {
    data: ['食品', '服饰', '数码', '箱包']
  },
  yAxis: {},
  series: {
    type: 'bar',
    data: [100, 120, 90, 150]
  }
})