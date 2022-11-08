import React, { useContext, useEffect, useState } from 'react';
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
                        ></MyReviewRow>)
                    }
                </tbody>
            </table>

        </div>

    );
};

export default MyReview;