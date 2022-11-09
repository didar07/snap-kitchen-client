import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <p className='text-center'><small>social login</small></p>
            <p className='text-center mb-4'><button onClick={handleGoogleSignIn} className="btn btn-outline"> Google</button></p>
        </div>
    );
};

export default SocialLogin;