const initialState = [];

const searchCampaigns = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_CAMPAIGNS':
            console.log()
            return action.payload
        default:
            return state
    }
}

export default searchCampaigns;