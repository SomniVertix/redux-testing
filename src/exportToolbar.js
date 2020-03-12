import React from 'react';

const ExportToolbar = (props) => {
    const { allCampaigns, setAllCampaigns } = props;

    const clearFromExportList = () => {
        const exportedCampaigns = allCampaigns.map((campaign) => {
            // if (campaign.isSelectedInExport) {
                if (campaign.isSearchActive) {
                    campaign.displayInSearch = false;
                }
                campaign.displayInExport = false;
                campaign.isSelectedInSearch = false;
                campaign.isSelectedInExport = false;
            // }

            return campaign
        })
        setAllCampaigns(exportedCampaigns)
    }

    return (
        <div>
            <button onClick={clearFromExportList}>
                Clear From Export List
            </button>
        </div>
    );
}

export default ExportToolbar;