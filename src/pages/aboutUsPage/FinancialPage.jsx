import React from "react";
import Financial from "../../components/Financial";
import MakeDonation from "../../components/MakeDonation/MakeDonation";
import HeroBanner from "../../components/HeroBanner";

const FinancialPage = () => {
    return (
        <div>
            <HeroBanner
                title={`Financials`}
                heroTextOne={`Zindagi Trust is a non-profit organisation striving to improve the quality of education available to the average Pakistani`}
            ></HeroBanner>
            <Financial></Financial>
            <MakeDonation></MakeDonation>
        </div>
    );
};

export default FinancialPage;
