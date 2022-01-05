import { useEffect, useState } from 'react';

const useSaleCham = () => {
    const [cham, setCham] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/orders/chamber')
            .then(res => res.json())
            .then(data => setCham(data))


    }, [])


    return [cham];
};

export default useSaleCham;
