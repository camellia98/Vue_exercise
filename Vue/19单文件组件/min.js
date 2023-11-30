// 第一步引入
import App from './App.vue'

// 第二步创建vue实例
new vue ({
    el:'#root',
    template:`
        <App></App>
    `,
    comments:{
        App
    }
    // npm run serve
    // 如果想写数据也可以写data(){}
})