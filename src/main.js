import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'


 AOS.init()
createApp(App).use(router)
  .use(vuetify)
  .mount('#app')
