import index from './index'
export const updateState = (state, value) => {
    state[value.key] = value.value
}

export const updateEditData = (state, value) => {
    state.editData[value.section][value.key] = value.value
}

export const updateEditDataLookupLots = (state, value) => {
    state.editData.lookup_lots = value
  }

export const updateEditDataLots = (state, value) => {
    state.editData.lots = value
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

export const resetToDefaultState = (state) => {
    Object.keys(index.intialState).map(x=>{
        state[x] = index.intialState[x]
    })
}
