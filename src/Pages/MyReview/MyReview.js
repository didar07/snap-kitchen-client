import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
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
                        review.map(rvwRow => <MyReviewRow
                            key={rvwRow._id}
                            rvwRow={rvwRow}
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