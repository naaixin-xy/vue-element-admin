<template>
		<el-row :class="toolBar">
			<el-button type="primary" size="mini" @click='$bus.$emit("hello","add")' v-if="data.isShow[0]">增加</el-button>
			<el-button type="primary" size="mini" @click='$emit("toolbar","edit")'  v-if="data.isShow[1]">修改</el-button>
			<el-button type="primary" size="mini" @click='$emit("toolbar","confirm")'  v-if="data.isShow[2]">确认</el-button>
			<el-button type="primary" size="mini" @click='$emit("toolbar","detail")'  v-if="data.isShow[3]">查看</el-button>
			<el-button type="primary" size="mini" @click='$emit("toolbar","map")'  v-if="data.isShow[4]">地图</el-button>
			<el-button type="danger" size="mini"  @click='$emit("toolbar","delete")' v-if="data.isShow[5]">删除</el-button>

			<el-button-group>
				<el-button size="mini" @click='$emit("toolbar","pdf")' v-if="data.isShow[6]">PDF</el-button>
				<el-button size="mini" @click='$emit("toolbar","excel")' v-if="data.isShow[7]">EXCEL</el-button>
				<el-button size="mini" @click='$emit("toolbar","select")' v-if="data.isShow[8]">筛选</el-button>
				<el-button size="mini" @click='$emit("toolbar","delete")' v-if="data.isShow[9]">默认按钮</el-button>
				<el-button size="mini" @click='$emit("toolbar","delete")' v-if="data.isShow[10]">默认按钮</el-button>
			</el-button-group>
		</el-row>
</template>

<script>

export default {
	data() {
		return {
			toolBar: "tool-bar",			
		}
	},
	props:['data']
}
</script>

<style scoped>
.tool-bar {
	padding: 20px 0px 15px 0px;
	clear: both;
}

/* .toolBar .el-button .app-container {
	padding: 10px 10px 10px 10px;
} */

.el-button-group {
	float: right;
}
</style>

