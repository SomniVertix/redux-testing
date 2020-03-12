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
    // { campaign_id: 3, campaignName: 'third' },
    // { campaign_id: 5, campaignName: 'fifth' },
    // { campaign_id: 7, campaignName: 'seventh' },
];

const selectedCampaigns = [
    // { campaign_id: 1, campaignName: 'first' },
    { campaign_id: 3, campaignName: 'third' },
    { campaign_id: 5, campaignName: 'fifth' },
    { campaign_id: 7, campaignName: 'seventh' },
]

// Add to object
cpObject.map( (campaign) => {
    campaign.isSearchActive = false;
    campaign.searchDisplay = true;
    campaign.exportDisplay = false;

    return campaign
})

console.log(cpObject);