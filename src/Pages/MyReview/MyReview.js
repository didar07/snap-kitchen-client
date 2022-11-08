import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [review, setReview] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user.email}`)
    }, [user?.email])
    return (
        <div>

        </div>
    );
};

export default MyReview;