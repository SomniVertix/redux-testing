/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const SearchToolbar = (props) => {
    const fullSearchcampaigns = useSelector(state => state.searchCampaigns);
    const dispatch = useDispatch();
    const { setSelectedCampaigns, selectedCampaigns } = props;

    const exportCampaigns = () => {
        // copy selected to exported campaigns
        dispatch({ type: 'SET_EXPORT_CAMPAIGNS', payload: selectedCampaigns});

        // filter selected from campaigns
        const filteredSearchCampaigns = fullSearchcampaigns.filter(campaign => {
            return !selectedCampaigns.some(selected => {
                return campaign.campaign_id === selected.campaign_id
            })
        })
        // setCampaigns(newCampaigns) 
        console.log("NC:", filteredSearchCampaigns)
        console.log("SC:", selectedCampaigns)

        // dispatch to searchCampaigns
        dispatch({ type: 'SET_SEARCH_CAMPAIGNS', payload: filteredSearchCampaigns});

        // set selected to empty array
        setSelectedCampaigns([]);
    }

    return (
        <div>
            <button onClick={exportCampaigns}>
                Export Campaigns Button
            </button>
        </div>
    );
}

export default SearchToolbar;
