const initialState = [];

const exportCampaigns = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_EXPORT_CAMPAIGNS':
            return [...state, action.payload]
        default:
            return state
    }
}

export default exportCampaigns;