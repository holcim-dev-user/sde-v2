
const routes = [
  { path: '/login', name: 'login', component: () => import('pages/login.vue') },
  { path: '/forgotPassword', name: 'forgotPassword', component: () => import('pages/forgotPassword.vue') },
  {
    path: '/', component: () => import('layouts/MainLayout.vue'), meta:{ breadcrumb: [ {name: 'Inicio', icon: 'fas fa-home' } ] },
    children: [
      { path: '', component: () => import('pages/Index.vue') }
      //system Routes
      ,{ path: 'RootPreferences', component: () => import('pages/RootPreferences/RootPreferences.vue') }
      ,{ path: 'mainReport', component: () => import('components/mainReport/reportComponent.vue') }
      //RootSystem
      ,{ path: 'RootSystem/Users', component: () => import('pages/RootSystem/Users/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootSystem/Users/edit.vue') }
        ] 
      }
      ,{ path: 'RootSystem/Roles', component: () => import('pages/RootSystem/Roles/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootSystem/Roles/edit.vue') }
        ] 
      }
      ,{ path: 'RootSystem/Companies', component: () => import('pages/RootSystem/Companies/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootSystem/Companies/edit.vue') }
        ] 
      }
      ,{ path: 'RootSystem/Modules', component: () => import('pages/RootSystem/Modules/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootSystem/Modules/edit.vue') }
        ] 
      }
      //ROOT_MASTER
      ,{ path: 'RootMaster/Partners', component: () => import('pages/RootMaster/Partners/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootMaster/Partners/edit.vue') }
        ] 
      }
      ,{ path: 'RootMaster/Camiones', component: () => import('pages/RootMaster/Camiones/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootMaster/Camiones/edit.vue') }
        ] 
      }
      ,{ path: 'RootMaster/Choferes', component: () => import('pages/RootMaster/Choferes/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootMaster/Choferes/edit.vue') }
        ] 
      }
      ,{ path: 'RootMaster/Items', component: () => import('pages/RootMaster/Items/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootMaster/Items/edit.vue') }
        ] 
      }
      ,{ path: 'RootMaster/Warehouses', component: () => import('pages/RootMaster/Warehouses/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootMaster/Warehouses/edit.vue') }
        ] 
      }
      ,{ path: 'RootMaster/UoM', component: () => import('pages/RootMaster/UoM/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootMaster/UoM/edit.vue') }
        ] 
      }
      ,{ path: 'RootMaster/Brands', component: () => import('pages/RootMaster/Brands/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootMaster/Brands/edit.vue') }
        ] 
      }
      ,{ path: 'RootMaster/InvTypes', component: () => import('pages/RootMaster/InvTypes/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootMaster/InvTypes/edit.vue') }
        ] 
      }
      ,{ path: 'RootMaster/InvTypes', component: () => import('pages/RootMaster/InvTypes/main.vue')
        ,children: [
           { path: '/', component: () => import('../components/mainView/mainView.vue') }
          ,{ path: ':id', component: () => import('pages/RootMaster/InvTypes/edit.vue') }
        ] 
      }
    ]
  },
  { path: '/device', name: 'login', component: () => import('pages/RootDevice/device.vue') },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
