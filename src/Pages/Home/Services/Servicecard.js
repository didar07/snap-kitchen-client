import React from 'react';
import { Link } from 'react-router-dom';

const Servicecard = ({ service }) => {
    const { _id, img, title, description, price } = service
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
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