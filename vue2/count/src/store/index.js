import Vue from 'vue';
// 引入vuex
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    // 用于响应组件中的动作
    actions: {
        incre(context, val) {
            context.commit('INCRE', val);
        },
        increOdd(context, val) {
            if (context.state.sum % 2) {
                context.commit('INCRE', val);
            }
        },
        increWait(context, val) {
            setTimeout(() => {
                context.commit('INCRE', val);
            }, 1000);
        },
    },
    // 用于操作数据
    mutations: {
        INCRE(state, val) {
            state.sum += val;
        },
        DECRE(state, val) {
            state.sum -= val;
        },
    },
    // 用于存储数据
    state: {
        sum: 0,
    },
    // 类似于计算属性
    getters: {
        bigSum(state) {
            return state.sum * 10;
        }
    },
});