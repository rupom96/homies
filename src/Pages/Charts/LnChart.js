import React from 'react';
// import { Bar } from 'react-chartjs-2';
// // import { Bar } from 'react-chartjs-2'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import useAstra from '../../hooks/useAstra';
import useCham from '../../hooks/useCham';
import useHeav from '../../hooks/useHeav';
import useHyp from '../../hooks/useHyp';
import useNone from '../../hooks/useNone';
import useShel from '../../hooks/useShel';
const LnChart = (props) => {
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
        <div className='mt-5'>
            <h1 className='mt-5'>Product Line chart</h1>
            <h5 className='pt-3 pb-3'>The ratio of total property and availability of each brand's property is shown through this line diagram. Here 'uv' means total number of properties available and 'pv' means the individual amount of each brand's property.</h5>
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

export default LnChart;