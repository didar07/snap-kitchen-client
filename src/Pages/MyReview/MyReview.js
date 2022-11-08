import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>my review</h2>
        </div>
    );
};

export default MyReview;