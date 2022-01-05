import React from 'react';
import useData from '../../hooks/useData';
import BrChart from './BrChart';
import LnChart from './LnChart';
import Piechart from './Piechart';

const Charts = () => {
    const [data] = useData();
    return (
        <div>
            <LnChart data={data} ></LnChart>
            <Piechart data={data}></Piechart>
            <BrChart data={data}></BrChart>
        </div>
    );
};

export default Charts;