import { useEffect, useState } from 'react';

const useCham = () => {
    const [cham, setCham] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/properties/chamber')
            .then(res => res.json())
            .then(data => setCham(data))


    }, [])


    return [cham];
};

export default useCham;
