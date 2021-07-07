import React from 'react';

import Charts from './Charts';

const CoinOverviewPage = ({match, coinData}) => {
    return(
        <div>
            <Charts coinData={coinData} />
        </div>
    )
};

export default CoinOverviewPage;