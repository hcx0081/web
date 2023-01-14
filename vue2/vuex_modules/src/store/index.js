import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import countModule from './countModule';
import personModule from './personModule';

export default new Vuex.Store({
    // 模块化
    modules: {
        countModule,
        personModule
    }
});