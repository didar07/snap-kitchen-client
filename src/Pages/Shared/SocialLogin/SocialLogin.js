import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { user, googleSignIn } = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
                const currentUser = {
                    user: user.email
                }
                fetch('https://snap-kitchen-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        localStorage.setItem('snap-token', data.token)
                        navigate(from, { replace: true })
                    })

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