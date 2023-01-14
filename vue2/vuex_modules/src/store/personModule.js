export default {
    namespaced: true,// 开启命名空间，才可以开启模块化
    // 用于操作数据
    mutations: {
        ADD(state, val) {
            state.personList.unshift(val);
        },
    },
    // 用于存储数据
    state: {
        personList: [{ id: '001', name: 'zs' }]
    },
    // 类似于计算属性
    getters: {
        firstPerson(state) {
            return state.personList[0].name;
        }
    },
};