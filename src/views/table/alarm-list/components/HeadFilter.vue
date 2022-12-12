<template>
	<div class="filter-container">

		<el-form ref="form" :model="form" label-width="80px" class="hidden-md-and-down ">
			<el-form-item label="省" v-if="data.isShow[0]">
				<el-select v-model="form.province" size="mini" placeholder="请选择活动区域">
					<el-option label="上海" value="shanghai"></el-option>
					<el-option label="北京" value="beijing"></el-option>
					<el-option label="山东" value="shandong"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="市" v-if="data.isShow[1]">
				<el-select v-model="form.city" size="mini" placeholder="请选择活动区域">
					<el-option label="济南" value="jinan"></el-option>
					<el-option label="临沂" value="linyi"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="区" v-if="data.isShow[2]">
				<el-select v-model="form.county" size="mini" placeholder="请选择活动区域">
					<el-option label="河东区" value="hedong"></el-option>
					<el-option label="兰山区" value="lanshan"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="项目" v-if="data.isShow[3]">
				<el-select size="mini" v-model="form.project" placeholder="请选择活动区域">
					<el-option label="项目一" value="project01"></el-option>
					<el-option label="项目二" value="project02"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="日期" class="hidden-lg-and-down" v-if="data.isShow[4]">
				<el-date-picker size="mini" v-model="form.datetimeRange" type="datetimerange" range-separator="至"
					start-placeholder="开始日期" end-placeholder="结束日期">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="  " v-if="data.isShow[5]">
				<el-button type="primary" @click="onSubmit" size="mini">查询</el-button>
			</el-form-item>
		</el-form>
	</div>

</template>

<script>
export default {
	data() {
		return {
			form: {
				province: 'shandong',
				city: 'jinan',
				county: 'hedong',
				project: 'project01',
				datetimeRange: [new Date(2022, 10, 10, 10, 10), new Date(2022, 10, 11, 10, 10)],
				startDate: this.startDate,
				stopDate: this.stopDate
				//datatimeRange: [new Date(2022, 10, 10, 10, 10), new Date(2022, 10, 11, 10, 10)]
			},
			adc:5,

		}
	},
	props:['data'],
	compute:{
		startDate:{
			get(){return this.form.datetimeRange[0]},
			set(value){
				console.log("compute:"+value)
				this.form.datetimeRange[0]=value
			}
		},
		stopDate:{
			get(){return this.form.datetimeRange[1]},
			set(value){this.form.datetimeRange[1]=value}
		}
	},
	watch: {
		form:{
			immediate:true,
			deep:true,
			handler(newValue,oldValue){
				console.log(JSON.stringify(newValue));
				this.form.startDate=newValue.datetimeRange[0];
				this.form.stopDate=newValue.datetimeRange[1];
			}		
		},
		adc(newValue,oldValue){
			console.log(JSON.stringify(newValue));
		},
		data:{
			immediate:true,
			deep:true,
			handler(newValue,oldValue){
				console.log("data:"+JSON.stringify(newValue));
				///若从父组件传递filters的值，需要打开注释。若从本组件直接从服务器取值则需要注释掉
				//this.form=newValue.filters;
			}		
		}
	},
	methods: {
		onSubmit() {
/* 			this.adc=this.form.datetimeRange;
			alert(JSON.stringify(this.form));
			this.startDate=new Date(2022, 10, 10, 10, 10) */
			//this.form1=this.form;
			this.$bus.$emit('filterdata',this.form);
		}
	}
}
</script>

<style scoped>
.filter-container {
	padding-top: 25px;
	padding-bottom: 70px;
	width: 100%;
	margin-top: -110px;
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
/* 背景色改为#0AF4F4 */
/* 
.el-select >>> input{ border:1px  solid #0AF4F4; color:#0AF4F4; background-color:rgba(10, 244, 244, 0.05); }
.el-select >>> input:hover{ border:1px  solid #0AF4F4; background-color:rgba(10, 244, 244, 0.2); }
.el-select >>> input:active{ border:1px  solid #0AF4F4; background-color:rgba(10, 244, 244, 0.2); }
.el-select>>> .el-input .el-select__caret{ color:#0AF4F4; }
.el-date-picker>>> input{ border:1px  solid #0AF4F4; color:#0AF4F4; background-color:rgba(10, 244, 244, 0.05); }
.el-date-picker>>> input:hover{ border:1px  solid #0AF4F4; background-color:rgba(10, 244, 244, 0.2); }


.el-date-editor.el-range-editor.el-input__inner.el-date-editor--datetimerange>>>
{ border:1px  solid #0AF4F4; color:#0AF4F4; background-color:rgba(10, 244, 244, 0.05); }
.el-date-editor.el-range-editor.el-input__inner.el-date-editor--datetimerange.is-active>>>
{
	background-color:rgba(10, 244, 244, 0.2);
}
.el-date-editor.el-range-editor.el-input__inner.el-date-editor--datetimerange:hover>>>
{
	background-color:rgba(10, 244, 244, 0.2);
}

.el-date-editor.el-range-editor.el-input__inner.el-date-editor--datetimerange>>>input,
.el-date-editor.el-range-editor.el-input__inner.el-date-editor--datetimerange>>>i,
.el-date-editor.el-range-editor.el-input__inner.el-date-editor--datetimerange>>>.el-range-separator{
	color:#0AF4F4; background-color:transparent;
}
.el-form-item >>> .el-form-item__label{color:#0AF4F4;} */

/* el-select-dropdown el-popper */
</style>

