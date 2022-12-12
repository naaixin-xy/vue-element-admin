<template>
	<div class="app-container">
		<HeadFilter :data="filterData"/>
		<TableToolbar ref="tableToolbar" :data="toolbarData"/>
		<CommonTable>
			<!-- <CommonDialog slot="dialog"></CommonDialog> -->
			<AlarmDialog slot="dialog"></AlarmDialog>
		</CommonTable>
	</div>
</template>

<script>
import HeadFilter from "./HeadFilter"
import TableToolbar from "./TableToolbar"
import CommonTable from "./CommonTable"
import CommonDialog from './CommonDialog' // secondary package based on el-pagination
import AlarmDialog from './AlarmDialog' 

const defaultFormThead = ['apple', 'banana',"orange"]

export default {
	data() {
		return {
			filterData:{
				isShow:[true, true, true, true, true, true],
				filters:{
					province:"",
					city:"",
					county:"",
					project:"",
					datetimeRange:[]
				}
			},
			toolbarData:{isShow:[true, true, true, true, true, true, true, true, true, false, false]}
			,
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
				
			],
			key: 1, // table key
			formTheadOptions: ['apple2', 'banana', 'orange'],
			checkboxVal: defaultFormThead, // checkboxVal
			formThead: defaultFormThead, // 默认表头 Default header
			search:'',
			operate:''
		}
	},
	watch: {
		checkboxVal(valArr) {
			this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0)
			this.key = this.key + 1// 为了保证table 每次都会重渲 In order to ensure the table will be re-rendered each time
		}
	},
	components:{HeadFilter, TableToolbar, CommonTable, CommonDialog, AlarmDialog},
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
		},
		onToolbar(event,operate){
			console.log(event, operate);
		}
	},
	mounted(){
		console.log(this);	
		this.$refs.tableToolbar.$on('toolbar',(value)=>{
			console.log(value)
			console.log(this)
		});
	}

}
</script>

<style scoped>
.app-container>.app-container{
	height:calc(100% -60px);
	padding:10px;
}
</style>

