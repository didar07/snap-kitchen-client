import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import useTitle from '../../hooks/useTitle';
import AddServiceCard from './AddServiceCard';

const AddService = () => {
    useTitle('Add Service')

    const [newServices, setNewServices] = useState([])


    useEffect(() => {
        fetch('https://snap-kitchen-server.vercel.app/allservice')
            .then(res => res.json())
            .then(data => setNewServices(data))
    }, [])

    const handleService = event => {
        event.preventDefault()
        const form = event.target
        const serviceName = form.serviceName.value
        const servicePhoto = form.servicePhoto.value
        const servicePrice = form.servicePrice.value
        const serviceDescription = form.serviceDescription.value

        const service = {
            title: serviceName,
            img: servicePhoto,
            price: servicePrice,
            description: serviceDescription
        }

        fetch('https://snap-kitchen-server.vercel.app/allservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    toast.success('service added succefully')
                }
            })
            .catch(err => console.error(err))
    }


    return (
        <div>
            <h1 className='text-4xl font-semibold text-center'>You can Add here New
                services</h1>

            <form onSubmit={handleService}>
                <h1 className='font-bold text-2xl'>service name</h1>
                <input type="text" name='serviceName' placeholder="type your service name" className="input input-bordered input-secondary w-1/2" required />
                <br />
                <br />
                <h1 className='font-bold text-2xl'>service photo</h1>
                <input type="text" name='servicePhoto' placeholder="enter your service photo url" className="input input-bordered input-secondary w-1/2" />
                <br />
                <br />
                <h1 className='font-bold text-2xl'>service price</h1>
                <input type="number" name='servicePrice' placeholder="type your service price" className="input input-bordered input-secondary w-1/2" required />
                <br />
                <br />
                <h1 className='font-bold text-2xl'>service details</h1>
                <input type="text" name='serviceDescription' placeholder="enter your service description" className="mb-10 input input-bordered input-secondary w-1/2" />
                <br />

                <input className='btn btn-outline btn-secondary mt-4 mb-9' type="submit" value="Add your service" />
            </form>

            <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light">
            </ToastContainer>
        </div>
    );
};

export default AddService;