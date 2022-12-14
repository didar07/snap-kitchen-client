import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Servicecard from './Servicecard';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://snap-kitchen-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <h2 className='text-center font-bold text-lg'>Our Services</h2>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <Servicecard
                        key={service._id}
                        service={service}
                    >

                    </Servicecard>)
                }
            </div>
            <div className='text-center mt-5 mb-5'>
                <Link to='/allservice'><button className="btn btn-outline btn-secondary">See All services</button></Link>
            </div>
        </div>
    );
};

export default Services;