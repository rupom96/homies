import { useEffect, useState } from 'react';

const useHyp = () => {
    const [hyp, setHyp] = useState([]);
    useEffect(() => {

        fetch('https://limitless-shore-01631.herokuapp.com/properties/hyperion')
            .then(res => res.json())
            .then(data => setHyp(data))


    }, [])


    return [hyp];
};

export default useHyp;
