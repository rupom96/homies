import { useEffect, useState } from 'react';

const useSaleHeav = () => {
    const [heav, setHeav] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/orders/heaven')
            .then(res => res.json())
            .then(data => setHeav(data))


    }, [])


    return [heav];
};

export default useSaleHeav;
