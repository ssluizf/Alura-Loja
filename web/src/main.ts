import { createApp } from "vue";
import App from "./App.vue";
import { store, key } from './store'
import router from "./router";
import "./style.css";

const app = createApp(App)

app.use(router)
app.use(store, key)

app.mount("#app")