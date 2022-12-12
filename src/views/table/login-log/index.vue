<template>
	<div class="app-container">
		<fixed-thead />
		<!-- <unfixed-thead /> -->
	</div>
</template>

<script>
import FixedThead from './components/FixedThead'
import UnfixedThead from './components/UnfixedThead'

export default {
	name: 'DynamicTable',
	components: { FixedThead, UnfixedThead }
}
</script>

<style scoped>
.app-main>.app-container {
	margin: 20px;
	margin-top: 80px;
	background-color: #FFFFFF;
}
</style>

