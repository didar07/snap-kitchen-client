import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const ReviewUpdate = () => {
    const router = useParams()
    const { id } = router

    const navigate = useNavigate()

    const [review, setReview] = useState([])
    console.log(id, review)
    useEffect(() => {
        fetch(`https://snap-kitchen-server.vercel.app/myreviews/${id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [id])

    const handleUpdateReview = event => {
        event.preventDefault()
        const review = {
            message: event.target.message.value
        }

        fetch(`https://snap-kitchen-server.vercel.app/myreviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                setReview(data)
                if (data.modifiedCount) {
                    navigate('/myreview')
                    toast.success('review updated successfully')
                }
            })

    }


    return (
        <div>
            <form onSubmit={handleUpdateReview}>

                <h1 className='text-center text-secondary text-4xl font-semibold mb-10 bg-slate-300 px-14 w-1/2 py-7 rounded-lg shadow-lg'>Pleade Update Your Review</h1>
                <input className='input input-bordered input-secondary input-lg w-full' type="text" name='message' defaultValue={review.message} required />


                <br />
                <th>
                    <button
                        className="ml-64 shadow-lg mb-40 mt-14 btn btn-secondary">update review</button>
                </th>

                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                >

                </ToastContainer>
            </form>

        </div>
    );
};

export default ReviewUpdate;