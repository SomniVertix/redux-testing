const initialState = [];

const exportCampaigns = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EXPORT_CAMPAIGNS':
            return [...state, action.payload].flat(1)
        default:
            return state
    }
}

export default exportCampaigns;