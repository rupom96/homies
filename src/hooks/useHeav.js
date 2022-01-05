import { useEffect, useState } from 'react';

const useHeav = () => {
    const [heav, setHeav] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/properties/heaven')
            .then(res => res.json())
            .then(data => setHeav(data))


    }, [])


    return [heav];
};

export default useHeav;
