<template>
	<el-dialog :visible.sync="dialogFormVisible" top="8vh" width="70%">
		<div slot="title" class="dialog-title">
			<span><i class="el-icon-info primary"> </i> {{ textMap[dialogStatus] }}</span>
		</div>
		<TestForm></TestForm>
	</el-dialog>
</template>

<script>
import RowTool from "./RowTool"

import TestForm from "./TestForm"
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
const calendarTypeOptions = [
	{ key: 'CN', display_name: 'China' },
	{ key: 'US', display_name: 'USA' },
	{ key: 'JP', display_name: 'Japan' },
	{ key: 'EU', display_name: 'Eurozone' }
]
export default {
	components: { RowTool, Pagination, TestForm },
	data() {
		return {
			dialogFormVisible: false,
			dialogStatus: 'update',
			textMap: {
				update: '编辑',
				create: '新增'
			}
		}
	},
	watch: {

	},
	created() {

	},
	methods: {
		handleCreate() {
			this.dialogStatus = 'create'
			this.dialogFormVisible = true
		},
		createData() {

		},
		handleUpdate(row) {
			this.dialogStatus = 'update'
			this.dialogFormVisible = true
		},
		updateData() {
		}
	},
	mounted() {
		this.$bus.$on('rowtool', (data, row) => {
			console.log(data);
			if (data == "edit") {
				this.handleUpdate(row);
			}
			if (data == "detail") {
				this.handleCreate();
			}
		})
	},

}
</script>
<style scoped>
.dialog-title {
	padding-bottom: 10px;
	border-bottom: 2px solid #F4F4F4;
}

.primary {
	color: #0AF4F4;
	font-size: 20px;
}
</style>

