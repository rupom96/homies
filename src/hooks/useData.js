import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/properties')
            .then(res => res.json())
            .then(data => setData(data))


    }, [])


    return [data];
};

export default useData;
