import Vue from 'vue'
import VueRouter from 'vue-router'
import { Loading, QSpinnerGears} from 'quasar'
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

  //TODO: Pendiente agregar metdata to router, y con eso ver si ruta requiere sesión activa 
  Router.beforeEach((to, from, next) => {
    Loading.show({ spinner: QSpinnerGears,})
    /*
    console.dir('Router change')
    console.dir('From')
    console.dir(from)
    console.dir('To')
    console.dir(to)
    */
    next()
  })
  Router.afterEach((to,from)=>{
    Loading.hide()
  })

  return Router
}
