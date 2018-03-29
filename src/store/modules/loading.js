
export const state = {
    showLoading:false
}

export const actions = {
    showloader:({ commit }) => {
        commit( types.SHOW_LOADING )
    },
    hideloader:({ commit }) => {
        commit( types.HIDE_LOADING )
    },
}

export const mutations = {
    showLoading:state => state.showLoading = true,
    hideLoading:state => state.showLoading = false,
}

const getters ={
   showLoading:state => state.showLoading,
}

export default {
    state,
    actions,
    mutations,
    getters,
}



