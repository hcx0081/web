export default {
    namespaced: true,// 开启命名空间，才可以开启模块化
    // 用于响应组件中的动作
    actions: {
        incre(context, val) {
            context.commit('INCRE', val);
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
};