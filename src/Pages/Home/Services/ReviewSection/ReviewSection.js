
import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ReviewRow from './ReviewRow';

const ReviewSection = ({ service_id }) => {
    const { _id, title } = useLoaderData()

    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    const [redirect, setRedirect] = useState(false)

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()


    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                const newReviews = [...data, reviews]
                setReviews(newReviews)
            })
    }, [reviews])

    const handleReview = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = user?.email || 'unregistered'
        const message = form.message.value


        const review = {
            service_id: service_id,
            reviewName: title,
            customer: name,
            img: user.photoURL,
            email,
            message

        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    form.reset()
                    toast.success('review added succefully')
                    // setReviews([...reviews, review])
                }
            })
            .catch(err => console.error(err))
    }


    if (!user) {
        return (
            <div>
                {
                    redirect && <Navigate to='/login' state={{ from: location }} replace></Navigate>
                }
                <h2 className='mt-5 mb-5 text-5xl text-center font-bold bg-orange-500 px-4 py-3 rounded-lg'>ReviewSection</h2>

                <div>
                    <h2 className='text-3xl'>Others customer Review</h2>

                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Service Name</th>
                                <th>Customer name</th>
                                <th>Message</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <ReviewRow
                                    key={review._id}
                                    review={review}
                                ></ReviewRow>)
                            }
                        </tbody>
                    </table>
                </div>


                <button onClick={() => setRedirect(true)} className="btn btn-outline btn-secondary mb-8">Please Login to Add a review</button>

            </div>
        )
    }
    else {
        return (

            <div>
                <h2 className='mt-5 mb-5 text-5xl text-center font-bold bg-orange-500 px-4 py-3 rounded-lg'>ReviewSection</h2>


                <div>
                    <h2 className='text-3xl'>Others customer Review</h2>

                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                </th>
                                <th>Service Name</th>
                                <th>Customer name</th>
                                <th>Message</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                reviews.map(review => <ReviewRow
                                    key={review._id}
                                    review={review}
                                ></ReviewRow>)
                            }
                        </tbody>
                    </table>
                </div>

                <h2 className='text-3xl font-bold mb-5'>Review for {title}</h2>
                <form onSubmit={handleReview}>
                    <input type="email" name='email' defaultValue={user?.email} placeholder="type your email" className="input input-bordered input-secondary w-full max-w-xs" />

                    <br />
                    <input type="text" name='name' placeholder="type your name" className="input input-bordered input-secondary w-full max-w-xs" />
                    <br />
                    <br />
                    <textarea className="textarea textarea-secondary" required name='message' placeholder="write your review"></textarea>
                    <br />
                    <input className='btn btn-outline btn-secondary mt-4 mb-9' type="submit" value="Add your review" />
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
    }

};

export default ReviewSection;