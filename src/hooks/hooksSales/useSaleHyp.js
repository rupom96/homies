import { useEffect, useState } from 'react';

const useSaleHyp = () => {
    const [hyp, setHyp] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/orders/hyperion')
            .then(res => res.json())
            .then(data => setHyp(data))


    }, [])


    return [hyp];
};

export default useSaleHyp;
