import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import SearchToolbar from "./searchToolbar";

const cpObject = [
    { campaign_id: 1, campaignName: 'first' },
    { campaign_id: 2, campaignName: 'second' },
    { campaign_id: 3, campaignName: 'third' },
    { campaign_id: 4, campaignName: 'fourth' },
    { campaign_id: 5, campaignName: 'fifth' },
    { campaign_id: 6, campaignName: 'sixth' },
    { campaign_id: 7, campaignName: 'seventh' },
];

const selObject = [
    { campaign_id: 1, campaignName: 'first' },
    { campaign_id: 3, campaignName: 'third' },
    { campaign_id: 5, campaignName: 'fifth' },
    { campaign_id: 7, campaignName: 'seventh' },
];

const SearchTable = () => {
    const renderedSearchCampaigns = useSelector(state => state.SearchCampaigns)
    const [selectedCampaigns, setSelectedCampaigns] = useState([]);
    const [allCampaigns, setAllCampaigns] = useState([]);
    const dispatch = useDispatch();
    const getCampaigns = () => { return cpObject }

    useEffect(() => {
        const res = getCampaigns();
        dispatch({ type: 'SET_SEARCH_CAMPAIGNS', payload: res });
        setAllCampaigns(res);
        setSelectedCampaigns(selObject)
    }, [dispatch])

    return (
        <div>
            <SearchToolbar
                selectedCampaigns={selectedCampaigns}
                setSelectedCampaigns={setSelectedCampaigns}
            />
            {/* SHOW RENDERED */}
            {/* {renderedSearchCampaigns.map((item, i) => { return (<div> item </div>) })} */}
        </div>
    );
}

export default SearchTable;
