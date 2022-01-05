import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useSaleAstra from '../../hooks/hooksSales/useSaleAstra';
import useSaleCham from '../../hooks/hooksSales/useSaleCham';
import useSaleHeav from '../../hooks/hooksSales/useSaleHeav';
import useSaleHyp from '../../hooks/hooksSales/useSaleHyp';
import useSaleNone from '../../hooks/hooksSales/useSaleNone';
import useSaleShel from '../../hooks/hooksSales/useSaleShel';


const SBrChart = (props) => {

    const prop = props.data;
    const [shel] = useSaleShel();
    const [astra] = useSaleAstra();
    const [cham] = useSaleCham();
    const [hyp] = useSaleHyp();
    const [heav] = useSaleHeav();
    const [none] = useSaleNone();

    const data = [
        {
            name: 'Sheltech',
            pv: shel.length,
            uv: prop.length,

        },
        {
            name: 'Astra',
            pv: astra.length,
            uv: prop.length,

        },
        {
            name: 'Chamber',
            pv: cham.length,
            uv: prop.length,

        },
        {
            name: 'Hyperion',
            pv: hyp.length,
            uv: prop.length,

        },
        {
            name: 'Heaven',
            pv: heav.length,
            uv: prop.length,

        },
        {
            name: 'Non-branded',
            pv: none.length,
            uv: prop.length,

        },
    ];

    return (


        <div>
            <h1 className='mt-3'>Sales Bar chart</h1>
            <h5 className='pt-3 pb-3'>The ratio of total order and amount of order of each brand's property is shown through this bar diagram. Here 'uv' means total number of order and 'pv' means the individual amount of each brand's order. The highest value is the most popular brand.</h5>
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default SBrChart;