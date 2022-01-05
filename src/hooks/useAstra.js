import { useEffect, useState } from 'react';

const useAstra = () => {
    const [astra, setAstra] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/properties/astra')
            .then(res => res.json())
            .then(data => setAstra(data))


    }, [])


    return [astra];
};

export default useAstra;
