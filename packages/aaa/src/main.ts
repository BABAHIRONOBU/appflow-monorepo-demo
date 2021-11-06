import { createApp } from 'vue'
import { hello } from '@baba/bbb';
import App from './App.vue'

hello();

createApp(App).mount('#app')
