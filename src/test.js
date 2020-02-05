var array1 = [
    { campaign_id: 1, campaignName: 'first' },
    { campaign_id: 2, campaignName: 'second' },
    { campaign_id: 3, campaignName: 'third' },
    { campaign_id: 4, campaignName: 'fourth' },
    { campaign_id: 5, campaignName: 'fifth' },
    { campaign_id: 6, campaignName: 'sixth' },
    { campaign_id: 7, campaignName: 'seventh' },
];
var array2 = [
    { campaign_id: 1, campaignName: 'first' },
    { campaign_id: 3, campaignName: 'third' },
    { campaign_id: 5, campaignName: 'fifth' },
    { campaign_id: 7, campaignName: 'seventh' },
];

array1 = array1.filter(function(item) {
  return !array2.includes(item); 
})
console.log(array1); // [ 'a', 'c', 'e' ]
console.log(array2); // [ 'b', 'd', 'f' ]