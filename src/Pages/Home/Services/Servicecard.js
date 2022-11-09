/* eslint-disable no-undef */
import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import 'react-photo-view/dist/react-photo-view.css';

const Servicecard = ({ service }) => {

    const { _id, img, title, description, price } = service
    return (

        <div className="card w-96 bg-base-100 shadow-xl">

            <PhotoProvider
                speed={() => 800}
                easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
            >
                {/* <PhotoView src={img}>
                    <figure>
                        <img src={img} style={{ objectFit: 'cover' }} alt="Shoes" />
                    </figure>
                </PhotoView> */}


                <PhotoView src={img}>
                    <img src={img} style={{ objectFit: 'cover' }} alt="" />
                </PhotoView>

            </PhotoProvider>

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

export default Servicecard;