import { useEffect, useState } from 'react';

const useSaleAstra = () => {
    const [astra, setAstra] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/orders/astra')
            .then(res => res.json())
            .then(data => setAstra(data))


    }, [])


    return [astra];
};

export default useSaleAstra;
