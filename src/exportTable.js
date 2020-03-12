import React from 'react';
import ExportToolbar from "./exportToolbar";

const ExportTable = (props) => {
    const { allCampaigns, setAllCampaigns } = props;
    
    return (
        <div>
            <ExportToolbar
                allCampaigns={allCampaigns}
                setAllCampaigns={setAllCampaigns}
            />
            {allCampaigns.map((item, i) => {
                if (item.displayInExport === true){
                    return <div key={item.campaign_id}> Campaign: {item.campaign_id} </div>
                }
                else return <a href="/a" key={item.campaign_id}> </a>
            })}
        </div>
    );
}

export default ExportTable;
