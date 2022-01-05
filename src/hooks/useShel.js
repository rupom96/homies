import { useEffect, useState } from 'react';

const useShel = () => {
    const [shel, setShel] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/properties/shel')
            .then(res => res.json())
            .then(data => setShel(data))


    }, [])


    return [shel];
};

export default useShel;
