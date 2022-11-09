import React, { useEffect, useState } from 'react';
import useTitle from '../../../hooks/useTitle';
import SingleService from './SingleService';

const AllService = () => {
    useTitle('Service')
    const [allService, setAllService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/allservice')
            .then(res => res.json())
            .then(data => setAllService(data))
    }, [])

    return (
        <div>
            <h1 className='text-center font-bold text-lg'>Our All services</h1>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    allService.map(snglService => <SingleService
                        key={snglService._id}
                        snglService={snglService}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default AllService;