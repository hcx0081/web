export default {
    install(Vue, a) {
        Vue.prototype.sayHW = function () {
            console.log('hello world!');
        };
    }
};
// or
// export default function (Vue) {
//     Vue.prototype.sayHW = function () {
//         console.log('hello world!');
//     };
// }