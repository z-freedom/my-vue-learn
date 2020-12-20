import Vuex from 'vuex'
import Vue from 'vue'
import {incByCount} from "@/store/mutations-type";

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        counter: 0,
        info:{
            name:'jack',
            age:18
        }
    },
    mutations: {
        inc(state){
            state.counter++
        },
        desc(state){
            state.counter--
        },
        [incByCount](state,playload){
            console.log(playload)
            state.counter+=playload.count
        },
        update(state,name){
            state.info.name=name
        }
    },
    actions:{
        updateLater(context,name){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    context.commit('update',name)
                    resolve()
                },1000)
            })
        }
    },
    getters:{
        power(state){
            return state.counter*state.counter
        }
    }
});

export default store