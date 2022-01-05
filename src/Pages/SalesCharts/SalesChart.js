import React from 'react';
import useOrder from '../../hooks/useOrder';
import SBrChart from './SBrChart';
import SLnChart from './SLnChart';
import SPiechart from './SPiechart';


const SalesChart = () => {
    const [order] = useOrder();
    return (
        <div>
            <SLnChart data={order} ></SLnChart>
            <SPiechart data={order}></SPiechart>
            <SBrChart data={order}></SBrChart>
        </div>
    );
};

export default SalesChart;