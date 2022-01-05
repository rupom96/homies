import { useEffect, useState } from 'react';

const useUser = () => {
    const [mongoUser, setMongoUser] = useState([]);


    useEffect(() => {
        fetch('https://limitless-shore-01631.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setMongoUser(data))


    }, [])
    console.log(mongoUser);
    return [mongoUser, setMongoUser];

};

export default useUser;
