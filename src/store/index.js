import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        counter: 0
    },
    mutations: {
        inc(state){
            state.counter++
        },
        desc(state){
            state.counter--
        }
    },
    actions:{

    },

});

export default store