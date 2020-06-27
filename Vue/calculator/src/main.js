import Vue from 'vue'
import App from './App'


// versão construida


// render o componente App dentro da dive #app
new Vue({
    render: h => h(App),
}).$mount("#app")

// é o mesmo que este

// new Vue({
//     el: '#app',
//     render(createElement){ // renderizando um elemento
//         return createElement(App)
//     }
// })