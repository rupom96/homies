import React from 'react';
// import { Bar } from 'react-chartjs-2';
// // import { Bar } from 'react-chartjs-2'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useSaleAstra from '../../hooks/hooksSales/useSaleAstra';
import useSaleCham from '../../hooks/hooksSales/useSaleCham';
import useSaleHeav from '../../hooks/hooksSales/useSaleHeav';
import useSaleHyp from '../../hooks/hooksSales/useSaleHyp';
import useSaleNone from '../../hooks/hooksSales/useSaleNone';
import useSaleShel from '../../hooks/hooksSales/useSaleShel';

const SLnChart = (props) => {
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
        <div className='mt-5 '>
            <h1 className='mt-5'>Sales Line chart</h1>
            <h5 className='pt-3 pb-3'>The ratio of total order and amount of order of each brand's property is shown through this line diagram. Here 'uv' means total number of order and 'pv' means the individual amount of each brand's order. The highest value is the most popular brand</h5>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart
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
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    );
};

export default SLnChart;