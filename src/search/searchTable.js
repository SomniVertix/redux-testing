import React from 'react';
import SearchToolbar from "./searchToolbar";

const SearchTable = (props) => {
    const { allCampaigns, setAllCampaigns } = props;

    return (
        <div>
            <SearchToolbar
                allCampaigns={allCampaigns}
                setAllCampaigns={setAllCampaigns}
            />
            {allCampaigns.map((item, i) => {
                if (item.displayInSearch === true){
                    return <div key={item.campaign_id}> Campaign: {item.campaign_id} </div>
                }
                else return <a href="/a" key={item.campaign_id}> </a>
            })}
        </div>
    );
}

export default SearchTable;
