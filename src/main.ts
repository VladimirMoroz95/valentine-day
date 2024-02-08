import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VButton from './components/vButton.vue';

const app = createApp(App);

app.component('v-button', VButton);
app.mount('#app')
