import React, { useState, useEffect } from 'react';
import SearchTable from "./search/searchTable";
import ExportTable from "./exportTable";

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

function App() {
  const [allCampaigns, setAllCampaigns] = useState([]);
  const getCampaigns = () => { return cpObject }

  useEffect(() => {
    const res = getCampaigns().map((campaign) => {
      campaign.isSearchActive = false;
      campaign.isSelectedInSearch = false;
      campaign.displayInSearch = true;
      campaign.displayInExport = false;

      return campaign
    });

    // return if campaign_id matches
    res.map((campaign) => {
      return selObject.map((selected) => {
        if (campaign.campaign_id === selected.campaign_id)
          campaign.isSelectedInSearch = true;
        return campaign
      })
    })

    setAllCampaigns(res);
    console.log('asdfadsfadfasfasdfas')
  }, [])

  return (
    <div className="App">
      <SearchTable
        allCampaigns={allCampaigns}
        setAllCampaigns={setAllCampaigns}
      />

    <ExportTable
        allCampaigns={allCampaigns}
        setAllCampaigns={setAllCampaigns}
      />
    </div>
  );
}

export default App;
