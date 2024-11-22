import { createApp } from 'vue' // 引入createApp用于创建应用
import App from './App.vue' // 引用App根组件
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
