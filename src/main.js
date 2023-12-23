import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css"
import "admin-lte/dist/css/adminlte.min.css?v=3.2.0";

import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js";
import "admin-lte/dist/js/adminlte.min.js?v=3.2.0";

/* ------------ Global Components -------------- */
import AppNavBar from "./components/partials/AppNavBar";
import AppSideBar from "./components/partials/AppSideBar";
import AppFooter from "./components/partials/AppFooter";
import ControlSideBar from "./components/partials/ControlSideBar";
import AppSideBarOverLay from "./components/partials/AppSideBarOverLay"

const app = createApp(App);
app.component('AppNavBar', AppNavBar)
app.component('AppSideBar', AppSideBar)
app.component('AppFooter', AppFooter)
app.component('ControlSideBar', ControlSideBar)
app.component('AppSideBarOverLay', AppSideBarOverLay)

app.use(router)
app.mount("#app");
