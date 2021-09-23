import Vue from 'vue'
import Vuex from 'vuex'
//import { store } from 'quasar/wrappers'

import main from './main'
import Brands from './Brands' //Brands
import Companies from './Companies' //
import Camiones from './Camiones' //
import Employees from './Employees' //Employees
import Items from './Items'
import Modules from './Modules' //Roles Companies
import Notifications from './Notifications' //Notifications
import Partners from './Partners'
import Roles from './Roles' //Roles Module
import UoM from './UoM' //UoM
import Users from './Users' //Users Module
import Warehouses from './Warehouses' //Warehouses

Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      main
      ,Brands
      ,Camiones
      ,Companies
      ,Employees
      ,Items
      ,Partners
      ,Roles
      ,Users
      ,Modules
      ,Notifications
      ,Warehouses
      ,UoM
      },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })
  return Store
}