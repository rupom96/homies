import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAstra from '../../hooks/useAstra';
import useCham from '../../hooks/useCham';
import useHeav from '../../hooks/useHeav';
import useHyp from '../../hooks/useHyp';
import useNone from '../../hooks/useNone';
import useShel from '../../hooks/useShel';

const BrChart = (props) => {

    const prop = props.data;
    const [shel] = useShel();
    const [astra] = useAstra();
    const [cham] = useCham();
    const [hyp] = useHyp();
    const [heav] = useHeav();
    const [none] = useNone();

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
            <h1 className='mt-3'>Product Bar chart</h1>
            <h5 className='pt-3 pb-3'>The ratio of total property and availability of each brand's property is shown through this bar diagram. Here 'uv' means total number of properties available and 'pv' means the individual amount of each brand's property.</h5>
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

export default BrChart;