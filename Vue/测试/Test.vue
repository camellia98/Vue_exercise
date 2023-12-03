<template>
    <table>

    </table>
    <tbody>
        <div id="root">
            <div class="my-body">
                <div class="my-title">{{title}}</div>
                <input class="my-input" v-model="title" placeholder="开心"/><br><br>
                <button @click="clearText()" class="my-button">清空</button>
            </div>
        </div>
    </tbody>
    <tfoot>
        
    </tfoot>
   
</template>

<script>
     export default{
        data: {
            title: '',
        },
        beforeCreate() {
           alert('第二次测试')
        },
        methods: {
            clear() {
                this.title = ''
            },
            clearText(){
                this.title = ''
            }
        },
     }
</script>

<style>
 * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
        }
        .my-body {
            height: 100%;
            width: 100%;
            background-image: url(./1.jpg);
            text-align: center;
            margin: 0 auto;
            padding-top: 200px;
        }

        .my-input {
            height: 32px;
            width: 200px;
            opacity: 40%;
            border-radius: 10px;
            border: 1px solid gray;
        }

        .my-title {
            height: 50px;
            text-align: center;
            font-size: 48px;
            margin: 10px;
        }

        .my-button {
            height: 30px;
            width: 100px;
            opacity: 40%;
            border-radius: 10px;
            border: 1px solid gray;
            background-color: #fff;
        }
        .my-button:hover {
            background: rebeccapurple;
        }
        .my-button:active{
            background-color: #fff;
        }
</style>