<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
 ::-webkit-scrollbar{
    width: 7px;
    height: 7px;
    background-color: #FFFFFF;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0px rgba(33, 33, 33, 0.1);
    -webkit-box-shadow: inset 0 0 0px rgba(33, 33, 33, 0.1);
    border-radius: 2px;
    background-color: #FFFFFF;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb{
    border-radius: 2px;
    box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0.1);
    background-color: #F0F0F0;
  }
  .app-main[data-v-078753dd] {
    min-height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    overflow: hidden;
	  background: #F0F0F0;
}


.el-table th.is-leaf, .el-table td {border-bottom: 1px solid #F4F4F4;}
.el-table th.is-leaf{
    border-bottom: 4px solid #F4F4F4;
}
</style>
