import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';
import ReviewSection from '../ReviewSection/ReviewSection';

const ServiceDetails = () => {

    const { _id, title, description, price, img } = useLoaderData()

    return (

        <div className='flex justify-between'>
            <div>
                <h1 className='text-5xl text-center font-bold bg-orange-500 px-4 py-3 rounded-lg'>Service Section</h1>
                <h2 className='text-4xl mt-5 mb-6 font-bold'>{title}</h2>

                <div className="card w-96 bg-base-100 shadow-xl mb-6">
                    <figure><img src={img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>price: $ {price}</p>
                        <p>{description}</p>

                    </div>
                </div>
            </div>

            <ReviewSection
                service_id={_id}
            >

            </ReviewSection>
        </div>
    );
};

export default ServiceDetails;