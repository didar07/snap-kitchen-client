import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ReviewUpdate = () => {
    const router = useParams()
    const { id } = router

    const navigate = useNavigate()

    const [review, setReview] = useState([])
    console.log(id, review)
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews/${id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [id])

    const handleUpdateReview = event => {
        event.preventDefault()
        const review = {
            message: event.target.message.value
        }

        fetch(`http://localhost:5000/myreviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                setReview(data)
                if (data.modifiedCount > 0) {
                    navigate('/myreview')
                }
            })

    }


    return (
        <div>
            <form onSubmit={handleUpdateReview}>

                <td><input type="text" name='message' defaultValue={review?.message} /></td>
                <br />
                <th>
                    <button
                        className="mb-40 btn btn-ghost btn-xs">update review</button>
                </th>

            </form>
        </div>
    );
};

export default ReviewUpdate;