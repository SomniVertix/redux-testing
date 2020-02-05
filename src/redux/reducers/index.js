import exportCampaigns from "./exportCampaigns";
import searchCampaigns from "./searchCampaigns";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    exportCampaigns: exportCampaigns,
    searchCampaigns: searchCampaigns
})

export default allReducers;