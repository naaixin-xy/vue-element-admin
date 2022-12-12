<template>
	<div class="app-container">
		<div class="filter-container">

			<el-form ref="form" :model="form" label-width="80px" class="hidden-md-and-down ">
				<!-- <el-form-item label="活动名称">
					<el-input v-model="form.name"></el-input>
				</el-form-item> -->
				<el-form-item label="省">
					<el-select v-model="form.region" size="mini" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="市">
					<el-select v-model="form.region" size="mini" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="区">
					<el-select v-model="form.region" size="mini" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="项目">
					<el-select size="mini" v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<!-- <el-form-item label="活动区域">
					<el-select v-model="form.region" placeholder="请选择活动区域">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item> -->
				<el-form-item label="日期" class="hidden-lg-and-down">
					<el-date-picker size="mini" v-model="form.value1" type="datetimerange" range-separator="至"
						start-placeholder="开始日期" end-placeholder="结束日期">
					</el-date-picker>
				</el-form-item>
				<el-form-item label="  ">
					<el-button type="primary" size="mini">查询</el-button>
				</el-form-item>
			</el-form>
			<!-- <el-checkbox-group v-model="checkboxVal">
				<el-checkbox label="apple">
					apple
				</el-checkbox>
				<el-checkbox label="banana">
					banana
				</el-checkbox>
				<el-checkbox label="orange">
					orange
				</el-checkbox>
			</el-checkbox-group> -->
		</div>
		<el-row :class="toolBar">
			<el-button size="mini">默认按钮</el-button>
			<el-button type="primary" size="mini">主要按钮</el-button>
			<el-button type="success" size="mini">成功按钮</el-button>
			<el-button type="info" size="mini">信息按钮</el-button>
			<el-button type="warning" size="mini">警告按钮</el-button>
			<el-button type="danger" size="mini">危险按钮</el-button>

			<el-button-group>
				<el-button size="mini" icon="el-icon-arrow-left">上一页</el-button>
				<el-button size="mini">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
				<el-button size="mini">默认按钮</el-button>
				<el-button size="mini">默认按钮</el-button>
				<el-button size="mini">默认按钮</el-button>
			</el-button-group>

		</el-row>


		<el-table :key="key" :data="tableData" ref="multipleTable" tooltip-effect="dark"
			@selection-change="handleSelectionChange" size="medium" fit highlight-current-row
			height="calc(100vh - 370px)" style="width: 100%">
			
			<el-table-column fixed  type="selection" width="55" />
			<el-table-column fixed  type="index" label="序号" width="50"/>
			<el-table-column fixed prop="name" label="fruitName" width="100" />
			<el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit" sortable width="140">
				<template slot-scope="scope">
					{{ scope.row[fruit] }}
				</template>
			</el-table-column>
			<el-table-column label="姓名" width="180">
				<template slot-scope="scope">
					<el-popover trigger="hover" placement="top">
						<p>姓名: {{ scope.row.name }}</p>
						<p>住址: {{ scope.row.address }}</p>
						<div slot="reference" class="name-wrapper">
							<el-tag type="success" size="mini">{{ scope.row.name }}</el-tag>
						</div>
					</el-popover>
				</template>
			</el-table-column>

			<el-table-column fixed="right" prop="name" label="fruitName" width="220">
				<template slot="header" slot-scope="scope">
					<el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
				</template>
				<template slot-scope="scope">
					<!-- <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">详情</el-button>
					<el-button size="mini" type="warning" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button> -->

					<el-link type="primary">详情</el-link>
					<el-link type="warning">编辑</el-link>
					<el-link type="danger">删除</el-link>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination background layout="sizes, prev, pager, next, jumper, ->, total, slot" :total="1000">
		</el-pagination>
		<div style="clear:both"></div>
	</div>
</template>

<script>
const defaultFormThead = ['apple', 'banana', 'apple', 'apple', 'apple', 'apple', 'apple', 'apple']

export default {
	data() {
		return {
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			toolBar: "tool-bar",
			tableData: [
				{
					name: 'fruit-1',
					apple: 'apple-10',
					banana: 'banana-10',
					orange: 'orange-10'
				},
				{
					name: 'fruit-2',
					apple: 'apple-20',
					banana: 'banana-20',
					orange: 'orange-20'
				},
				{
					name: 'fruit-2',
					apple: 'apple-20',
					banana: 'banana-20',
					orange: 'orange-20'
				},
				{
					name: 'fruit-2',
					apple: 'apple-20',
					banana: 'banana-20',
					orange: 'orange-20'
				},
				{
					name: 'fruit-2',
					apple: 'apple-20',
					banana: 'banana-20',
					orange: 'orange-20'
				},
				{
					name: 'fruit-2',
					apple: 'apple-20',
					banana: 'banana-20',
					orange: 'orange-20'
				},
				{
					name: 'fruit-2',
					apple: 'apple-20',
					banana: 'banana-20',
					orange: 'orange-20'
				},
				{
					name: 'fruit-2',
					apple: 'apple-20',
					banana: 'banana-20',
					orange: 'orange-20'
				},
				{
					name: 'fruit-2',
					apple: 'apple-20',
					banana: 'banana-20',
					orange: 'orange-20'
				},
				{
					name: 'fruit-2',
					apple: 'apple-20',
					banana: 'banana-20',
					orange: 'orange-20'
				},
				{
					name: 'fruit-2',
					apple: 'apple-20',
					banana: 'banana-20',
					orange: 'orange-20'
				}
			],
			key: 1, // table key
			formTheadOptions: ['apple', 'banana', 'orange'],
			checkboxVal: defaultFormThead, // checkboxVal
			formThead: defaultFormThead // 默认表头 Default header
		}
	},
	watch: {
		checkboxVal(valArr) {
			this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0)
			this.key = this.key + 1// 为了保证table 每次都会重渲 In order to ensure the table will be re-rendered each time
		}
	},
	methods: {
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		}
	}

}
</script>

<style scoped>
.tool-bar {
	padding: 25px 0px;
	clear: both;
}

.toolBar .el-button .app-container {
	padding: 10px 10px 10px 10px;
}

.filter-container {
	padding-top: 15px;
	padding-bottom: 70px;
	width: 100%;
	margin-top: -110px;
}

.el-pagination {
	white-space: nowrap;
	padding: 20px 0px 0px 0px;
	color: #303133;
	font-weight: bold;
	float: right;
}

.el-form-item {
	float: left;
	width: 200px;
}

.el-form-item:nth-child(5) {
	width: 400px;
}

.el-form-item:nth-last-child(1) {
	float: right;
}

.el-checkbox-group {
	float: left;
}

.el-table th.is-leaf,
.el-table td {
	border-bottom: 1px solid #F0F0F0;
}

.el-link {
	margin: 0px 10px;
}

.el-button-group {
	float: right;
}
</style>

