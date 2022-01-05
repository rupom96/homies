import { useEffect, useState } from 'react';

const useNone = () => {
    const [none, setNone] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/properties/none')
            .then(res => res.json())
            .then(data => setNone(data))


    }, [])


    return [none];
};

export default useNone;
