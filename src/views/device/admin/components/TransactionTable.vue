<template>

	<el-card class="box-card">
		<div class="clearfix">
			<span style="font-weight: 900; color:#606266;font-size:14px"><i class="el-icon-info primary"></i>  最新报警信息</span>
			<el-button style="float: right; padding: 3px 0" type="text"><i class="el-icon-circle-plus-outline"></i></el-button>
		</div>
		<el-divider/>
		<!-- <div slot="header" class="clearfix" style="background-color:#409EFF;">
			<span>卡片名称</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div> -->
		<div class="table-container">
			<el-table :data="list" size="small">
				<el-table-column label="Order_No" min-width="330px">
					<template slot-scope="scope">
						<el-tag type="primary" effect="dark" size="mini" style="font-size: 12px;width:20px;height:20px;padding:0px 3px;margin:0px;">
							警
						</el-tag>
						<!-- <i class="el-icon-caret-right success"> </i> -->
						{{ scope.row.order_no | orderNoFilter }}
					</template>
				</el-table-column>
				<el-table-column label="Price" width="300px" align="center">
					<template slot-scope="scope">
						¥{{ scope.row.price | toThousandFilter }}
					</template>
				</el-table-column>
				<el-table-column label="Status" width="100px" align="center" size="small">
					<template slot-scope="{row}">
						<el-tag :type="row.status | statusFilter">
							{{ row.status }}
						</el-tag>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</el-card>
</template>

<script>
import { transactionList } from '@/api/remote-search'

export default {
	filters: {
		statusFilter(status) {
			const statusMap = {
				success: 'success',
				pending: 'danger'
			}
			return statusMap[status]
		},
		orderNoFilter(str) {
			return str.substring(0, 30)
		}
	},
	data() {
		return {
			list: null
		}
	},
	created() {
		this.fetchData()
	},
	methods: {
		fetchData() {
			transactionList().then(response => {
				this.list = response.data.items.slice(0, 8)
			})
		}
	}
}
</script>

<style scoped>
.table-container {
	width: 100%;
	height: 100%;
	padding: 16px 0px 24px 0px;
	background-color: #FFFFFF;
}

.clearfix {
	clear: both;
	padding: 0px auto;
	margin: 0px auto;
}

.el-table>>>th.is-leaf,
.el-table>>>td {
	border-bottom: 1px dashed #E0E0E0;
}

.el-table>>>th.is-leaf {
	border-bottom: 4px solid #FCFCFC;
}

/* .el-divider{
	width:5px;
	color: #000;
} */
.font {
	font-size: 14px;
	font-weight: 900;
	color: #409EFF;
	margin-left: 10px;
}

.el-divider.el-divider--horizontal {
	display: block;
	height: 2px;
	width: 100%;
	background-color: #DCDFE6;
	position: relative;
	margin: 8px 0;
}

.success {
	color: #5CB87A;
	font-size: 16px;
}

.warning {
	color: #E6A23C
}

.error {
	color: #F56C6C
}

.info {
	color: #8896B3
}

.primary {
	color: #0AF4F4;
	font-size: 20px;
}
</style>
