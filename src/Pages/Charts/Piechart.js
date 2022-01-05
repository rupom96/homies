import React from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import useAstra from '../../hooks/useAstra';
import useCham from '../../hooks/useCham';
import useHeav from '../../hooks/useHeav';
import useHyp from '../../hooks/useHyp';
import useNone from '../../hooks/useNone';
import useShel from '../../hooks/useShel';


const Piechart = (props) => {

    const data = props.data;

    console.log(data);
    console.log(data.length);

    const [shel] = useShel();
    console.log(shel.length);
    const [astra] = useAstra();
    console.log(astra.length);
    const [cham] = useCham();
    console.log(cham.length);
    const [hyp] = useHyp();
    console.log(hyp.length);
    const [heav] = useHeav();
    console.log(heav.length);
    const [none] = useNone();
    console.log(none.length);

    const calcShel = (shel.length / data.length) * 100;
    const calcAstra = (astra.length / data.length) * 100;
    const calcCham = (cham.length / data.length) * 100;
    const calcHyp = (hyp.length / data.length) * 100;
    const calcHeav = (heav.length / data.length) * 100;
    const calcNone = (none.length / data.length) * 100;

    const data01 = [
        { name: 'Sheltech', value: calcShel },
        { name: 'Astra', value: calcAstra },
        { name: 'Chamber', value: calcCham },
        { name: 'Hyperion', value: calcHyp },
        { name: 'Heaven', value: calcHeav },
        { name: 'Non-branded', value: calcNone },
    ];

    const data02 = [
        { name: 'Group A', value: 2400 },
        { name: 'Group B', value: 4567 },
        { name: 'Group C', value: 1398 },
        { name: 'Group D', value: 9800 },
        { name: 'Group E', value: 3908 },
        { name: 'Group F', value: 4800 },
    ];

    return (
        <div>
            <h1 className='mt-5 pt-3'>Product Pie chart</h1>
            <h5 className='pt-3 pb-3'>The ratio percentage of total property and availability of each brand's property is shown through this line diagram. By hovering each section in the pie chart, the total percentage of each brand's property can be known.</h5>
            <ResponsiveContainer width="100%" aspect={3}>
                <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    {/* <Pie dataKey="value" data={data02} cx={500} cy={200} innerRadius={40} outerRadius={80} fill="#82ca9d" /> */}
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Piechart;