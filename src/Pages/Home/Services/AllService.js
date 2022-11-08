import React, { useEffect, useState } from 'react';

const AllService = () => {

    const [allService, setAllService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allservice')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, [])

    return (
        <div>
            <h2>{allService.length}</h2>
        </div>
    );
};

export default AllService;