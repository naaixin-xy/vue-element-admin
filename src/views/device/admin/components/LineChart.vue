<template>
	<div :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
	mixins: [resize],
	props: {
		className: {
			type: String,
			default: 'chart'
		},
		width: {
			type: String,
			default: '100%'
		},
		height: {
			type: String,
			default: '600px'
		},
		autoResize: {
			type: Boolean,
			default: true
		},
		chartData: {
			type: Object,
			required: true
		}
	},
	data() {
		return {
			chart: null
		}
	},
	watch: {
		chartData: {
			deep: true,
			handler(val) {
				this.setOptions(val)
			}
		}
	},
	mounted() {
		this.$nextTick(() => {
			this.initChart()
		})
	},
	beforeDestroy() {
		if (!this.chart) {
			return
		}
		this.chart.dispose()
		this.chart = null
	},
	methods: {
		initChart() {
			this.chart = echarts.init(this.$el, 'macarons')
			this.setOptions(this.chartData)
		},
		setOptions({ expectedData, actualData } = {}) {
			this.chart.setOption({
				color: [
					"#67C23A",
					"orange",
					"green",
					"skyblue"
				],
				title: {
					show: true,
					text: "最近1000条数据记录",
					textStyle: {
						//文字颜色
						color: '#606266',
						//字体风格,'normal','italic','oblique'
						fontStyle: 'normal',
						//字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
						fontWeight: 'normal',
						//字体系列
						fontFamily: 'sans-serif',
						//字体大小
						fontSize: 16
					}
				},
				xAxis: {
					//data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					data: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000],
					boundaryGap: false,
					splitLine: {
						show: true,
					},
					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: '#0AF4F4',//更改坐标轴颜色
						},
						textStyle: {
							color: '0AF4F4',  //更改坐标轴文字颜色
							fontSize: 12      //更改坐标轴文字大小
						}
					}
				},
				grid: {
					left: 10,
					right: 10,
					bottom: 30,
					top: 60,
					containLabel: true
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'cross'
					},
					padding: [5, 10]
				},
				yAxis: {
					//data: [100, 500, 1000, 2000, 5000, 10000],

					type: "value",
					// min: 0, //y轴的最小值
					// max: 100000, //y轴最大值
					splitNumber: 10,
					//interval: 1000,//值之间的间隔

					axisTick: {
						show: false
					},
					axisLine: {
						lineStyle: {
							color: '#0AF4F4',//更改坐标轴颜色
						},
						textStyle: {
							color: '0AF4F4',  //更改坐标轴文字颜色
							fontSize: 12      //更改坐标轴文字大小
						}
					}
				},
				dataZoom: [
					{
						type: 'inside', //无滑动条内置缩放   type: 'slider', //缩放滑动条
						show: true, //开启
						//yAxisIndex: [0], //Y轴滑动
						xAxisIndex: [0],//X轴滑动
						//start: 1, //初始化时，滑动条宽度开始标度
						//end: 50, //初始化时，滑动条宽度结束标度
					},
				],
				legend: {
					data: ['expected', 'actual']
				},
				series: [{
					name: 'expected', itemStyle: {
						normal: {
							//color: '#0AF4F4',
							lineStyle: {
								//color: '#0AF4F4',
								width: 2
							}
						}
					},
					smooth: true,
					type: 'line',
					data: expectedData,
					animationDuration: 2800,
					animationEasing: 'cubicInOut'
				},
				{
					name: 'actual',
					smooth: true,
					type: 'line',
					itemStyle: {
						normal: {
							//color: '#0AF4F4',
							lineStyle: {
								//color: '#0AF4F4',
								width: 2
							}
							// lineStyle: {
							//   color: '#83888f'
							// }
						}
					},
					data: actualData,
					animationDuration: 2800,
					animationEasing: 'quadraticOut'
				}]
			})
		}
	}
}
</script>
