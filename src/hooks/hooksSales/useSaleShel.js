import { useEffect, useState } from 'react';

const useSaleShel = () => {
    const [shel, setShel] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/orders/shel')
            .then(res => res.json())
            .then(data => setShel(data))


    }, [])


    return [shel];
};

export default useSaleShel;
