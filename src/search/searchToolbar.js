import React from 'react';

const SearchToolbar = (props) => {
    const { allCampaigns, setAllCampaigns } = props;

    const exportCampaigns = () => {
        const exportedCampaigns = allCampaigns.map((campaign) => {
            if (campaign.isSelectedInSearch) {
                campaign.displayInSearch = false;
                campaign.displayInExport = true;
                campaign.isSelectedInSearch = false;
            }

            return campaign
        })
        setAllCampaigns(exportedCampaigns)
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
