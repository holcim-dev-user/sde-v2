import index from './index'
export const updateState = (state, value) => {
    state[value.key] = value.value
}

export const updateEditData = (state, value) => {
    state.editData[value.section][value.key] = value.value
}

export const updateEditDataLines = (state, value) => {
    state.editData.lines = value
}

export const updateEditDataAccountLines = (state, value) => {
    state.editData.accountLines = value
}

export const updateEditDataFiles = (state, value) => {
    state.editData.files = value
}

export const updateEditDataReconciliation = (state, value) => {
    state.editData.reconciliation = value
}

export const updateEditDataReconciliationLines = (state, value) => {
    state.editData.reconciliationLines = value
}

export const updateEditDataAccountHeader = (state, value) => {
    state.editData.accountHeader = value
}

export const updateEditData_lookup_accAP = (state, value) => {
    state.editData.lookup_accAP = value
}



export const updateEditDataaccAP = (state, value) => {
    state.editData.accAP = value
}


export const resetToDefaultState = (state) => {
    Object.keys(index.intialState).map(x=>{
        state[x] = index.intialState[x]
    })
}
