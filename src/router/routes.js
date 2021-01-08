
const routes = [
  { path: '/login', name: 'login', component: () => import('pages/login.vue') },
  { path: '/loginENS', name: 'login', component: () => import('pages/loginENS.vue') },
  { path: '/loginSchoenstatt', name: 'login', component: () => import('pages/loginSchoenstatt.vue') },
  {
    path: '/', component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
      //system Routes
      ,{ path: 'RootPreferences', component: () => import('pages/RootPreferences/RootPreferences.vue') }
      ,{ path: 'RootNotifications', component: () => import('pages/RootNotifications/RootNotifications.vue') }
      ,{ path: 'mainReport', component: () => import('components/mainReport/reportComponent.vue') }
      //transactional Routes
      //SYSTEM
      ,{ path: 'RootSystem/Users', component: () => import('pages/RootSystem/Users/Users.vue') }
      ,{ path: 'RootSystem/UsersEdit', component: () => import('pages/RootSystem/Users/UsersEdit.vue') }
      ,{ path: 'RootSystem/Roles', component: () => import('pages/RootSystem/Roles/Roles.vue') }
      ,{ path: 'RootSystem/RolesEdit', component: () => import('pages/RootSystem/Roles/RolesEdit.vue') }
      ,{ path: 'RootSystem/Companies', component: () => import('pages/RootSystem/Companies/Companies.vue') }
      ,{ path: 'RootSystem/CompaniesEdit', component: () => import('pages/RootSystem/Companies/CompaniesEdit.vue') }
      ,{ path: 'RootSystem/Modules', component: () => import('pages/RootSystem/Modules/Modules.vue') }
      ,{ path: 'RootSystem/ModulesEdit', component: () => import('pages/RootSystem/Modules/ModulesEdit.vue') }
      ,{ path: 'RootSystem/Notifications', component: () => import('pages/RootSystem/Notifications/Notifications.vue') }
      ,{ path: 'RootSystem/NotificationsEdit', component: () => import('pages/RootSystem/Notifications/NotificationsEdit.vue') }
      ,{ path: 'RootSystem/TaxesMaster', component: () => import('pages/RootSystem/TaxesMaster/TaxesMaster.vue') }
      ,{ path: 'RootSystem/TaxesMasterEdit', component: () => import('pages/RootSystem/TaxesMaster/TaxesMasterEdit.vue') }
      //BITACORA
      ,{ path: 'RootBitacora/Bitaplaces', component: () => import('pages/RootBitacora/Bitaplaces/Bitaplaces.vue') }
      ,{ path: 'RootBitacora/BitaplacesEdit', component: () => import('pages/RootBitacora/Bitaplaces/BitaplacesEdit.vue') }
      ,{ path: 'RootBitacora/Bitacars', component: () => import('pages/RootBitacora/Bitacars/Bitacars.vue') }
      ,{ path: 'RootBitacora/BitacarsEdit', component: () => import('pages/RootBitacora/Bitacars/BitacarsEdit.vue') }
      ,{ path: 'RootBitacora/BitaRoutes', component: () => import('pages/RootBitacora/BitaRoutes/BitaRoutes.vue') }
      ,{ path: 'RootBitacora/BitaRoutesEdit', component: () => import('pages/RootBitacora/BitaRoutes/BitaRoutesEdit.vue') }
      ,{ path: 'RootBitacora/BitaRounds', component: () => import('pages/RootBitacora/BitaRounds/BitaRounds.vue') }
      ,{ path: 'RootBitacora/BitaRoundsEdit', component: () => import('pages/RootBitacora/BitaRounds/BitaRoundsEdit.vue') }
      ,{ path: 'RootBitacora/Bitaconsola', component: () => import('pages/RootBitacora/Bitaconsola/Bitaconsola.vue') }
      ,{ path: 'RootBitacora/BitaconsolaEdit', component: () => import('pages/RootBitacora/Bitaconsola/BitaconsolaEdit.vue') }
      ,{ path: 'RootBitacora/BitacoraPeople', component: () => import('pages/RootBitacora/UserBitacoraPeople/BitacoraPeople.vue') }
      ,{ path: 'RootBitacora/BitacoraEvents', component: () => import('pages/RootBitacora/UserBitacoraEvents/BitacoraEvents.vue') }
      ,{ path: 'RootBitacora/BitacoraCars', component: () => import('pages/RootBitacora/UserBitacoraCars/BitacoraCars.vue') }
      ,{ path: 'RootBitacora/BitacoraRounds', component: () => import('pages/RootBitacora/UserBitacoraRounds/BitacoraRounds.vue') }
      //ROOT_MASTER
      ,{ path: 'RootMaster/Partners', component: () => import('pages/RootMaster/Partners/Partners.vue') }
      ,{ path: 'RootMaster/PartnersEdit', component: () => import('pages/RootMaster/Partners/PartnersEdit.vue') }
      ,{ path: 'RootMaster/Items', component: () => import('pages/RootMaster/Items/Items.vue') }
      ,{ path: 'RootMaster/ItemsEdit', component: () => import('pages/RootMaster/Items/ItemsEdit.vue') }
      ,{ path: 'RootMaster/Warehouses', component: () => import('pages/RootMaster/Warehouses/Warehouses.vue') }
      ,{ path: 'RootMaster/WarehousesEdit', component: () => import('pages/RootMaster/Warehouses/WarehousesEdit.vue') }
      ,{ path: 'RootMaster/UoM', component: () => import('pages/RootMaster/UoM/UoM.vue') }
      ,{ path: 'RootMaster/UoMEdit', component: () => import('pages/RootMaster/UoM/UoMEdit.vue') }
      ,{ path: 'RootMaster/Brands', component: () => import('pages/RootMaster/Brands/Brands.vue') }
      ,{ path: 'RootMaster/BrandsEdit', component: () => import('pages/RootMaster/Brands/BrandsEdit.vue') }
      ,{ path: 'RootMaster/InvTypes', component: () => import('pages/RootMaster/InvTypes/InvTypes.vue') }
      ,{ path: 'RootMaster/InvTypesEdit', component: () => import('pages/RootMaster/InvTypes/InvTypesEdit.vue') }
      //ENS
      ,{ path: 'RootENS/Equipistas', component: () => import('pages/RootENS/Equipistas/Equipistas.vue') }
      ,{ path: 'RootENS/Equipista', component: () => import('pages/RootENS/Equipista/Equipista.vue') }
      //FINANZAS
      ,{ path: 'RootAccounting/ChartAccount', component: () => import('pages/RootAccounting/ChartAccount/ChartAccount.vue') }
      ,{ path: 'RootAccounting/ChartAccountEdit', component: () => import('pages/RootAccounting/ChartAccount/ChartAccountEdit.vue') }
      ,{ path: 'RootAccounting/Taxes', component: () => import('pages/RootAccounting/Taxes/Taxes.vue') }
      ,{ path: 'RootAccounting/TaxesEdit', component: () => import('pages/RootAccounting/Taxes/TaxesEdit.vue') }
      ,{ path: 'RootAccounting/AccPeriods', component: () => import('pages/RootAccounting/AccPeriods/AccPeriods.vue') }
      ,{ path: 'RootAccounting/AccPeriodsEdit', component: () => import('pages/RootAccounting/AccPeriods/AccPeriodsEdit.vue') }
      ,{ path: 'RootAccounting/AccMoves', component: () => import('pages/RootAccounting/AccMoves/AccMoves.vue') }
      ,{ path: 'RootAccounting/AccMovesEdit', component: () => import('pages/RootAccounting/AccMoves/AccMovesEdit.vue') }
      ,{ path: 'RootAccounting/invMasterGroups', component: () => import('pages/RootAccounting/invMasterGroups/invMasterGroups.vue') }
      ,{ path: 'RootAccounting/invMasterGroupsEdit', component: () => import('pages/RootAccounting/invMasterGroups/invMasterGroupsEdit.vue') }
      ,{ path: 'RootAccounting/partnerMasterGroups', component: () => import('pages/RootAccounting/partnerMasterGroups/partnerMasterGroups.vue') }
      ,{ path: 'RootAccounting/partnerMasterGroupsEdit', component: () => import('pages/RootAccounting/partnerMasterGroups/partnerMasterGroupsEdit.vue') }
      ,{ path: 'RootAccounting/accPaymentMethods', component: () => import('pages/RootAccounting/accPaymentMethods/accPaymentMethods.vue') }
      ,{ path: 'RootAccounting/accPaymentMethodsEdit', component: () => import('pages/RootAccounting/accPaymentMethods/accPaymentMethodsEdit.vue') }
      ,{ path: 'RootAccounting/Payterms', component: () => import('pages/RootAccounting/Payterms/Payterms.vue') }
      ,{ path: 'RootAccounting/PaytermsEdit', component: () => import('pages/RootAccounting/Payterms/PaytermsEdit.vue') }
      ,{ path: 'RootAccounting/Locations', component: () => import('pages/RootAccounting/Locations/Locations.vue') }
      ,{ path: 'RootAccounting/LocationsEdit', component: () => import('pages/RootAccounting/Locations/LocationsEdit.vue') }
      //COMPRAS
      ,{ path: 'RootPurchase/mktPR', component: () => import('pages/RootPurchase/mktPR/mktPR.vue') }
      ,{ path: 'RootPurchase/mktPREdit', component: () => import('pages/RootPurchase/mktPR/mktPREdit.vue') }
      ,{ path: 'RootPurchase/mktPO', component: () => import('pages/RootPurchase/mktPO/mktPO.vue') }
      ,{ path: 'RootPurchase/mktPOEdit', component: () => import('pages/RootPurchase/mktPO/mktPOEdit.vue') }
      ,{ path: 'RootPurchase/mktPORet', component: () => import('pages/RootPurchase/mktPORet/mktPORet.vue') }
      ,{ path: 'RootPurchase/mktPORetEdit', component: () => import('pages/RootPurchase/mktPORet/mktPORetEdit.vue') }
      ,{ path: 'RootPurchase/accAP', component: () => import('pages/RootPurchase/accAP/accAP.vue') }
      ,{ path: 'RootPurchase/accAPEdit', component: () => import('pages/RootPurchase/accAP/accAPEdit.vue') }
      ,{ path: 'RootPurchase/accRet', component: () => import('pages/RootPurchase/accRet/accRet.vue') }
      ,{ path: 'RootPurchase/accRetEdit', component: () => import('pages/RootPurchase/accRet/accRetEdit.vue') }
      //BANK
      ,{ path: 'RootBank/accVoucherOut', component: () => import('pages/RootBank/accVoucherOut/accVoucherOut.vue') }
      ,{ path: 'RootBank/accVoucherOutEdit', component: () => import('pages/RootBank/accVoucherOut/accVoucherOutEdit.vue') }
      ,{ path: 'RootBank/accVoucherIn', component: () => import('pages/RootBank/accVoucherIn/accVoucherIn.vue') }
      ,{ path: 'RootBank/accVoucherInEdit', component: () => import('pages/RootBank/accVoucherIn/accVoucherInEdit.vue') }
      //INVENTORY
      ,{ path: 'RootInventory/invQuery', component: () => import('pages/RootInventory/invQuery/invQuery.vue') }
      ,{ path: 'RootInventory/invQueryEdit', component: () => import('pages/RootInventory/invQuery/invQueryEdit.vue') }
      ,{ path: 'RootInventory/invIncoming', component: () => import('pages/RootInventory/invIncoming/invIncoming.vue') }
      ,{ path: 'RootInventory/invIncomingEdit', component: () => import('pages/RootInventory/invIncoming/invIncomingEdit.vue') }
      ,{ path: 'RootInventory/invOutgoing', component: () => import('pages/RootInventory/invOutgoing/invOutgoing.vue') }
      ,{ path: 'RootInventory/invOutgoingEdit', component: () => import('pages/RootInventory/invOutgoing/invOutgoingEdit.vue') }
      //CASES_LEGAL
      ,{ path: 'RootCases/casClientes', component: () => import('pages/RootCases/casClientes/casClientes.vue') }
      ,{ path: 'RootCases/casClientesEdit', component: () => import('pages/RootCases/casClientes/casClientesEdit.vue') }
      ,{ path: 'RootCases/casCasos', component: () => import('pages/RootCases/casCasos/casCasos.vue') }
      ,{ path: 'RootCases/casCasosEdit', component: () => import('pages/RootCases/casCasos/casCasosEdit.vue') }
      ,{ path: 'RootCases/casTasks', component: () => import('pages/RootCases/casTasks/casTasks.vue') }
      ,{ path: 'RootCases/casTasksEdit', component: () => import('pages/RootCases/casTasks/casTasksEdit.vue') }
      ,{ path: 'RootCases/casCasesTypes', component: () => import('pages/RootCases/casCasesTypes/casCasesTypes.vue') }
      ,{ path: 'RootCases/casCasesTypesEdit', component: () => import('pages/RootCases/casCasesTypes/casCasesTypesEdit.vue') }
      ,{ path: 'RootCases/casTasksTypes', component: () => import('pages/RootCases/casTasksTypes/casTasksTypes.vue') }
      ,{ path: 'RootCases/casTasksTypesEdit', component: () => import('pages/RootCases/casTasksTypes/casTasksTypesEdit.vue') }
      ,{ path: 'RootCases/casLocations', component: () => import('pages/RootCases/casLocations/casLocations.vue') }
      ,{ path: 'RootCases/casLocationsEdit', component: () => import('pages/RootCases/casLocations/casLocationsEdit.vue') }
      ,{ path: 'RootCases/casContracts', component: () => import('pages/RootCases/casContracts/casContracts.vue') }
      ,{ path: 'RootCases/casContractsEdit', component: () => import('pages/RootCases/casContracts/casContractsEdit.vue') }
      ,{ path: 'RootCases/casInvoices', component: () => import('pages/RootCases/casInvoices/casInvoices.vue') }
      ,{ path: 'RootCases/casInvoicesEdit', component: () => import('pages/RootCases/casInvoices/casInvoicesEdit.vue') }
      //RRHH
      ,{ path: 'RootHHRR/Employees', component: () => import('pages/RootHHRR/Employees/Employees.vue') }
      //SCHOENSTATT
      ,{ path: 'RootSchoenstatt/SCHPersonas', component: () => import('pages/RootSchoenstatt/SCHPersonas/SCHPersonas.vue') }
      ,{ path: 'RootSchoenstatt/SCHPersonasEdit', component: () => import('pages/RootSchoenstatt/SCHPersonas/SCHPersonasEdit.vue') }
      ,{ path: 'RootSchoenstatt/SCHPersona', component: () => import('pages/RootSchoenstatt/SCHPersona/SCHPersona.vue') }
      ,{ path: 'RootSchoenstatt/SCHGroups', component: () => import('pages/RootSchoenstatt/SCHGroups/SCHGroups.vue') }
      ,{ path: 'RootSchoenstatt/SCHGroupsEdit', component: () => import('pages/RootSchoenstatt/SCHGroups/SCHGroupsEdit.vue') }
      ,{ path: 'RootSchoenstatt/SCHSectores', component: () => import('pages/RootSchoenstatt/SCHSectores/SCHSectores.vue') }
      ,{ path: 'RootSchoenstatt/SCHSectoresEdit', component: () => import('pages/RootSchoenstatt/SCHSectores/SCHSectoresEdit.vue') }
      ,{ path: 'RootSchoenstatt/SCHApostolados', component: () => import('pages/RootSchoenstatt/SCHApostolados/SCHApostolados.vue') }
      ,{ path: 'RootSchoenstatt/SCHApostoladosEdit', component: () => import('pages/RootSchoenstatt/SCHApostolados/SCHApostoladosEdit.vue') }
      ,{ path: 'RootSchoenstatt/SCHFormaciones', component: () => import('pages/RootSchoenstatt/SCHFormaciones/SCHFormaciones.vue') }
      ,{ path: 'RootSchoenstatt/SCHFormacionesEdit', component: () => import('pages/RootSchoenstatt/SCHFormaciones/SCHFormacionesEdit.vue') }
      //MFG
      ,{ path: 'RootMFG/mfgOrders', component: () => import('pages/RootMFG/mfgOrders/mfgOrders.vue') }
      ,{ path: 'RootMFG/mfgOrdersEdit', component: () => import('pages/RootMFG/mfgOrders/mfgOrdersEdit.vue') }
      ,{ path: 'RootMFG/mktMFG', component: () => import('pages/RootMFG/mktMFG/mktMFG.vue') }
      ,{ path: 'RootMFG/mktMFGEdit', component: () => import('pages/RootMFG/mktMFG/mktMFGEdit.vue') }
      ,{ path: 'RootMFG/mktMFGreturn', component: () => import('pages/RootMFG/mktMFGreturn/mktMFGreturn.vue') }
      ,{ path: 'RootMFG/mktMFGreturnEdit', component: () => import('pages/RootMFG/mktMFGreturn/mktMFGreturnEdit.vue') }
      ,{ path: 'RootMFG/mktPRD', component: () => import('pages/RootMFG/mktPRD/mktPRD.vue') }
      ,{ path: 'RootMFG/mktPRDEdit', component: () => import('pages/RootMFG/mktPRD/mktPRDEdit.vue') }
      ,{ path: 'RootMFG/mktPRDreturn', component: () => import('pages/RootMFG/mktPRDreturn/mktPRDreturn.vue') }
      ,{ path: 'RootMFG/mktPRDreturnEdit', component: () => import('pages/RootMFG/mktPRDreturn/mktPRDreturnEdit.vue') }
      ,{ path: 'RootMFG/mfgLocations', component: () => import('pages/RootMFG/mfgLocations/mfgLocations.vue') }
      ,{ path: 'RootMFG/mfgLocationsEdit', component: () => import('pages/RootMFG/mfgLocations/mfgLocationsEdit.vue') }
      ,{ path: 'RootMFG/mfgTypes', component: () => import('pages/RootMFG/mfgTypes/mfgTypes.vue') }
      ,{ path: 'RootMFG/mfgTypesEdit', component: () => import('pages/RootMFG/mfgTypes/mfgTypesEdit.vue') }
      ,{ path: 'RootMFG/mfgBOM', component: () => import('pages/RootMFG/mfgBOM/mfgBOM.vue') }
      ,{ path: 'RootMFG/mfgBOMEdit', component: () => import('pages/RootMFG/mfgBOM/mfgBOMEdit.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
