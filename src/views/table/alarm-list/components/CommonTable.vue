<template>
	<div>
		<el-table :key="tableOption.key" :data="tableOption.data" ref="multipleTable" tooltip-effect="dark"
			@selection-change="handleSelectionChange" :size="tableOption.size" fit
			:height="tableOption.height" style="width: 100%">
			
			<el-table-column fixed  type="selection" width="50" />
			<el-table-column fixed  type="index" label="序号" width="50"/>
			<el-table-column fixed prop="NAME" label="姓名" width="80" />
			<el-table-column v-for="column in tableOption.columns" :key="column.prop" :label="column.label" sortable :width="column.width">
				<template slot-scope="scope">
					<span v-text="scope.row[column.prop]" v-if="column.prop != 'status'"></span>

					<el-popover trigger="hover" placement="top" v-else>
						<p>姓名: {{ scope.row.ID }}</p>
						<p>住址: {{ scope.row }}</p>
						<div slot="reference" class="name-wrapper">
							<el-tag type="success" size="mini">{{ scope.row.status}}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>

			<el-table-column fixed="right" prop="name" label="fruitName" width="220">
				<template slot-scope="scope">
					<RowTool :scope="scope"/>
				</template>
			</el-table-column>
		</el-table>
		<Pagination v-show="total > 0" layout="sizes, prev, pager, next, jumper, ->, total, slot" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit"
			@pagination="getList" />
		<div style="clear:both"></div>
		<slot name="dialog" >
			
		</slot>
	</div>
</template>

<script>
import RowTool from "./RowTool"
import { fetchList, fetchPv, createArticle, updateArticle } from '@/api/article'
import { parseTime } from '@/utils'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import CommonDialog from './CommonDialog' // secondary package based on el-pagination
export default {
	components:{RowTool, Pagination,CommonDialog},
	data() {
		return {
			list: null,
			total: 0,
			listLoading: true,
			listQuery: {
				page: 1,
				limit: 20,
				importance: undefined,
				title: undefined,
				type: undefined,
				sort: '+id'
			},
			tableData: [
				{
					NAME:'牛宏',
					ID: '1000869875',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					status:'在线',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					status:'在线',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},{
					NAME:'牛宏',
					ID: '1000869875',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					status:'在线',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},{
					NAME:'牛宏',
					ID: '1000869875',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					status:'在线',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},{
					NAME:'牛宏',
					ID: '1000869875',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					status:'在线',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},{
					NAME:'牛宏',
					ID: '1000869875',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					status:'在线',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},{
					NAME:'牛宏',
					ID: '1000869875',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					status:'在线',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},{
					NAME:'牛宏',
					ID: '1000869875',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					status:'在线',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},{
					NAME:'牛宏',
					ID: '1000869875',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					status:'在线',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},{
					NAME:'牛宏',
					ID: '1000869875',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					status:'在线',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
			],
			tableOption:{
				key:'001',
				data:[
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				},
				{
					NAME:'牛宏',
					ID: '1000869875',
					status: '在线',
					PRODUCT: '气体探测器',
					DEVICE: '气体探测器',
					省: '山东省',
					市: '临沂市',
					区: '河东区',
					企业: '临沂市安福电子有限公司',
					项目: '安福电子展厅'

				}
					],
				size:'mini',
				height:"calc(100vh - 363px)",
				columns:[
					{
						label:'NAME',
						prop:'NAME',
						width:'80',
						data:{},
						key:'name'
					},
					{
						label:'ID',
						prop:'ID',
						width:'120',
						data:{},
						key:'ID'
					},	
					{
						label:'状态',
						prop:'status',
						width:'120',
						data:{},
						key:'status'
					},	
					{
						label:'PRODUCT',
						prop:'PRODUCT',
						width:'120',
						data:{},
						key:'PRODUCT'
					},	
					{
						label:'DEVICE',
						prop:'DEVICE',
						width:'120',
						data:{},
						key:'DEVICE'
					},
					{
						label:'省',
						prop:'省',
						width:'120',
						data:{},
						key:'name01'
					},
					{
						label:'市',
						prop:'市',
						width:'120',
						data:{},
						key:'市'
					},
					{
						label:'区',
						prop:'区',
						width:'120',
						data:{},
						key:'区'
					},
					{
						label:'企业',
						prop:'企业',
						width:'200',
						data:{},
						key:'企业'
					},
					{
						label:'项目',
						prop:'项目',
						width:'120',
						data:{},
						key:'项目'
					}	

				]
			},
			mounted(){
				this.tableOption.data = this.tableData;
			},
			key: 1, // table key
			formTheadOptions: ['apple', 'banana', 'orange'],
			search:''
		}
	},
	watch: {
		checkboxVal(valArr) {
			this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0)
			this.key = this.key + 1// 为了保证table 每次都会重渲 In order to ensure the table will be re-rendered each time
		}
	},
	created() {
		this.getList()
	},
	methods: {
		getList() {
			this.listLoading = true
			fetchList(this.listQuery).then(response => {
				this.list = response.data.items
				this.total = response.data.total

				// Just to simulate the time of the request
				setTimeout(() => {
					this.listLoading = false
				}, 1.5 * 1000)
			})
		},
		toggleSelection(rows) {
			if (rows) {
				console.log(rows)
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			console.log(val)
			this.multipleSelection = val;
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
				// console.log(data);
				// if(data=="edit"){
				// 	this.handleUpdate(row);
				// }
				// if(data="detail"){
				// 	this.handleCreate();
				// }
			})
		},

}
</script>
<style>
	.el-link {
		margin: 0px 10px;
	}
</style>
<style scoped>

.el-table th.is-leaf,
.el-table td {
	border-bottom: 1px solid #F0F0F0;
}

.Pagination {
	white-space: nowrap;
	padding: 28px 0px 0px 0px;
	color: #303133;
	font-weight: bold;
	float: right;
}
.dialog-title{
	padding-bottom: 10px;
	border-bottom: 2px solid #F4F4F4;
}
.primary {
	color: #409EFF;
	font-size: 20px;
}
</style>

