<template>	
		<el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" top="8vh"  width="80%">
			<div slot="title" class="dialog-title">
				<span><i class="el-icon-info primary"> </i> {{textMap[dialogStatus]}}</span>
			</div>
			<el-form ref="dataForm" :rules="rules" :model="temp" label-position="left" label-width="70px"
				style="width: 400px; margin-left:50px;" size="mini">
				<el-form-item label="Type" prop="type">
					<el-select v-model="temp.type" class="filter-item" placeholder="Please select">
						<el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name"
							:value="item.key" />
					</el-select>
				</el-form-item>
				<el-form-item label="Date" prop="timestamp">
					<el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date" />
				</el-form-item>
				<el-form-item label="Title" prop="title">
					<el-input v-model="temp.title" />
				</el-form-item>
				<el-form-item label="Status">
					<el-select v-model="temp.status" class="filter-item" placeholder="Please select">
						<el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
					</el-select>
				</el-form-item>
				<el-form-item label="Imp">
					<el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3"
						style="margin-top:8px;" />
				</el-form-item>
				<el-form-item label="Remark">
					<el-input v-model="temp.remark" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
						placeholder="Please input" />
				</el-form-item>
				<el-form-item label="Type" prop="type">
					<el-select v-model="temp.type" class="filter-item" placeholder="Please select">
						<el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name"
							:value="item.key" />
					</el-select>
				</el-form-item>
				<el-form-item label="Date" prop="timestamp">
					<el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date" />
				</el-form-item>
				<el-form-item label="Title" prop="title">
					<el-input v-model="temp.title" />
				</el-form-item>
				<el-form-item label="Status">
					<el-select v-model="temp.status" class="filter-item" placeholder="Please select">
						<el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
					</el-select>
				</el-form-item>
				<el-form-item label="Imp">
					<el-rate v-model="temp.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max="3"
						style="margin-top:8px;" />
				</el-form-item>
				<el-form-item label="Remark">
					<el-input v-model="temp.remark" :autosize="{ minRows: 2, maxRows: 4 }" type="textarea"
						placeholder="Please input" />
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false" size="mini">
					Cancel
				</el-button>
				<el-button type="primary"  size="mini" @click="dialogStatus === 'create' ? createData() : updateData()">
					Confirm
				</el-button>
			</div>
		</el-dialog>
</template>

<script>
import RowTool from "./RowTool"
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
	components:{RowTool, Pagination},
	data() {
		return {
			dialogFormVisible: false,
			dialogStatus: '',
			textMap: {
				update: '编辑',
				create: '新增'
			},
			temp: {
				id: undefined,
				importance: 1,
				remark: '',
				timestamp: new Date(),
				title: '',
				type: '',
				status: 'published'
			}
		}
	},
	watch: {
		
	},
	created() {

	},
	methods: {
		resetTemp() {
			this.temp = {
				id: undefined,
				importance: 1,
				remark: '',
				timestamp: new Date(),
				title: '',
				status: 'published',
				type: ''
			}
		},
		handleCreate() {
			this.resetTemp()
			this.dialogStatus = 'create'
			this.dialogFormVisible = true
			this.$nextTick(() => {
				this.$refs['dataForm'].clearValidate()
			})
		},
		createData() {
			this.$refs['dataForm'].validate((valid) => {
				if (valid) {
					this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
					this.temp.author = 'vue-element-admin'
					createArticle(this.temp).then(() => {
						this.list.unshift(this.temp)
						this.dialogFormVisible = false
						this.$notify({
							title: 'Success',
							message: 'Created Successfully',
							type: 'success',
							duration: 2000
						})
					})
				}
			})
		},
		handleUpdate(row) {
			this.temp = Object.assign({}, row) // copy obj
			this.temp.timestamp = new Date(this.temp.timestamp)
			this.dialogStatus = 'update'
			this.dialogFormVisible = true
			this.$nextTick(() => {
				this.$refs['dataForm'].clearValidate()
			})
		},
		updateData() {
			this.$refs['dataForm'].validate((valid) => {
				if (valid) {
					const tempData = Object.assign({}, this.temp)
					tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
					updateArticle(tempData).then(() => {
						const index = this.list.findIndex(v => v.id === this.temp.id)
						this.list.splice(index, 1, this.temp)
						this.dialogFormVisible = false
						this.$notify({
							title: 'Success',
							message: 'Update Successfully',
							type: 'success',
							duration: 2000
						})
					})
				}
			})
		}
	},
	mounted() {
			// console.log('School',this)
			this.$bus.$on('hello',(data)=>{
				console.log(this);
				console.log('我是School组件，收到了数据',data)
			})
			this.$bus.$on('filterdata',(data)=>{
				console.log(data);
			})
			this.$bus.$on('rowtool',(data,row)=>{
				console.log(data);
				if(data=="edit"){
					this.handleUpdate(row);
				}
				if(data=="detail"){
					this.handleCreate();
				}
			})
		},

}
</script>
<style scoped>
.dialog-title{
	padding-bottom: 10px;
	border-bottom: 2px solid #F4F4F4;
}
.primary {
	color: #409EFF;
	font-size: 20px;
}
</style>

