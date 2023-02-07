import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://cursovue-32ff2-default-rtdb.firebaseio.com/'

//global header
axios.defaults.headers.common['Authorization'] = 'helen123'

//posso definir que to método get eu só aceito do appjson
axios.defaults.headers.get['Accepts'] = 'application/json'

//crio um obj, pra chamar o axios, de forma global, pra dps eu apenas usar 'this.$http' nos componentes:
Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios

        Vue.prototype.$http.interceptors.request.use(config => {
            // eslint-disable-next-line no-console
            console.log(config.method)
    
            return config
        })

        Vue.prototype.$http.interceptors.request.use(res => {
            /*const array = []
            for (let chave in res.data){
                array.push({
                    id: chave, ...res.data[chave]
                })
            }

            //substituo:
            res.data = array*/

            //retorno res p continuar fluxo normal
            return res

        }, error => Promise.reject(error))
    }
})