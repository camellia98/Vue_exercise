<template>
  <!-- 方便方式一个<V就可以快速显示Vue -->
    <!-- 第三步 使用 -->
    <div>
        <Tsest></Tsest>
    </div>
</template>

<script>
    // 第一步 引入
    import  Test from './Test.vue'   //import引入
    export default {
        name:"APP",//App汇总所有有的组件

        //第二步 注册组件
        components:{
           Test
        }
    }
</script>

<style>

</style>