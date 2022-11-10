import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    useTitle('My review')
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user?.email])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?')
        if (proceed) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.success('deleted succefully')
                        const remaining = review.filter(rvw => rvw._id !== id)
                        setReview(remaining)
                    }
                })
        }
    }
    const navigate = useNavigate()

    const handleUpdate = id => {
        navigate(`/reviewupdate/${id}`)


        // fetch(`http://localhost:5000/myreviews/${id}`, {
        //     method: 'PATCH',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(review)
        // })
        //     .then(res => res.json())
        //     .then(data => setReview(data))
        //     .catch(err => console.error(err))
    }

    return (
        <div>
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
                        review.length === 0 ?
                            <h1 className='text-4xl font-bold justify-center items-center mb-60 mt-60'>No review were added</h1>
                            :

                            review.map(rvwRow => <MyReviewRow
                                key={rvwRow._id}
                                rvwRow={rvwRow}
                                handleUpdate={handleUpdate}
                                handleDelete={handleDelete}
                            ></MyReviewRow>)
                    }
                </tbody>
            </table>
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
            ></ToastContainer>
        </div>

    );
};

export default MyReview;