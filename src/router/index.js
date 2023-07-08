import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'

import routes from './routes'

Vue.use(VueRouter)

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  })


  Router.beforeResolve(async (to, from, next) => {
    if (to.name == 'payment-transaction' && (to.query != null || to.query != "")) {
      let url = "http://localhost:9900/api/payment/transbank/commit"
      await axios({
          method:'GET',
          url: url,
          params: to.query,
          headers:{
              "Content-Type":"application/json",
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Credentials':true
          },
      }).then(async data => {
          // console.log("Data", data);
          let status = ""
          if( data.data.status == "AUTHORIZED"){
            status = "Success"
          }else{
            status = "Failed"
          }
          next({ name: "payment-result", params:{
            status: status,
            data: data.data
          } });
         
      }).catch(error => {
          console.log("error", error);
      })
      next();
    }else{
      next()
    }
  });

  return Router
}
