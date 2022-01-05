import { useEffect, useState } from 'react';

const useSaleNone = () => {
    const [none, setNone] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/orders/none')
            .then(res => res.json())
            .then(data => setNone(data))


    }, [])


    return [none];
};

export default useSaleNone;
