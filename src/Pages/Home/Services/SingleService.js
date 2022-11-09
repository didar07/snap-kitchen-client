import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const SingleService = ({ snglService }) => {
    const { _id, img, title, description, price } = snglService
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-5 mb-5">
            <figure>

                <PhotoProvider
                    speed={() => 800}
                    easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
                >
                    <PhotoView src={img}>
                        <img src={img} style={{ objectFit: 'cover' }} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>price: $ {price}</p>
                <p>{
                    description.length > 100 ?
                        <p>{description.slice(0, 100) + '...'} </p>
                        :
                        <p>{description}</p>
                }</p>
                <div className="card-actions justify-end">
                    <Link to={`/servicedetails/${_id}`}>
                        <button className="btn btn-primary">view details</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default SingleService;