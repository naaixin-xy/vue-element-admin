
	
<template>
	<div>
		<el-link type="primary" plain size='mini' @click="$bus.$emit('rowtool','detail', scope.row)">详情</el-link>
		<el-link type="primary" plain size='mini' @click="$bus.$emit('rowtool', 'edit', scope.row)">编辑</el-link>
		<el-link type="warning" plain size='mini' @click="$bus.$emit('rowtool', 'delete', scope.row)">删除</el-link>
	</div>
</template>



<script>

export default {
	data() {
		return {

		}
	},
	props:['scope']
}
</script

<style scoped>

div .el-link {
	display:block;
	margin: 0px 10px;
}
</style>

