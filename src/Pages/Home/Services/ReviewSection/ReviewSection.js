import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const ReviewSection = () => {
    const { _id, title, price, img } = useLoaderData()
    const { user } = useContext(AuthContext)


    const review = {
        reviewId: _id,
        reviewName: title,
    }

    if (!user) {
        return (
            <div>
                <h2 className='mt-5 mb-5 text-5xl text-center font-bold bg-orange-500 px-4 py-3 rounded-lg'>ReviewSection</h2>
                <Link to='/login'>
                    <button className="btn btn-outline btn-secondary">Please Login to Add a review</button>
                </Link>
            </div>
        )
    }
    else {
        return (

            <div>
                <h2 className='mt-5 mb-5 text-5xl text-center font-bold bg-orange-500 px-4 py-3 rounded-lg'>ReviewSection</h2>
                <form>
                    <input type="email" name='email' defaultValue={user?.email} placeholder="type your email" className="input input-bordered input-secondary w-full max-w-xs" />
                    <br />
                    <input type="text" name='firstName' placeholder="type your first name" className="input input-bordered input-secondary w-full max-w-xs" />
                    <br />
                    <input type="text" name='lastName' placeholder="type your last name" className="input input-bordered input-secondary w-full max-w-xs" />
                    <br />
                    <br />
                    <textarea className="textarea textarea-secondary" placeholder="write your review"></textarea>
                </form>

            </div>


        );
    }

};

export default ReviewSection;