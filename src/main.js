import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('dateFilter', dateFilter)

firebase.initializeApp({
  apiKey: "AIzaSyCQLlxHkvIU17_oXgDEqzCeFEWx8rOS4PE",
  authDomain: "crm-vue-a5a0b.firebaseapp.com",
  databaseURL: "https://crm-vue-a5a0b.firebaseio.com",
  projectId: "crm-vue-a5a0b",
  storageBucket: "crm-vue-a5a0b.appspot.com",
  messagingSenderId: "762558995881",
  appId: "1:762558995881:web:24c362eb0cbf2c9c89f8b8"
})

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
