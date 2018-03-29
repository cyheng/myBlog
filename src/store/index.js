import Vue from "vue"
import Vuex from "vuex"
import loading from "./modules/loading"
import home from "./modules/home"

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
        loading,
        home,
    },
})
