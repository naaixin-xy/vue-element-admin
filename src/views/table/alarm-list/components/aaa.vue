<template>



    <div>



        <input type="button" 



               value="我是父组件中的按钮" 



               @click="show">



        <child v-show="isShow"/>



    </div>



</template>



<script>



    import child from "@/components/child"



    export default {



        data() {



            return {



                isShow:false



            }



        },



        components:{



            child



        },



        methods:{



            show(){



                this.isShow=true;



            }



        }



    }



</script>