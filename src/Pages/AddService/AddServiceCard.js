import React from 'react';

const AddServiceCard = ({ services }) => {
    const { title, img, price, description } = services
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-5 mb-5">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>price: $ {price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">

                </div>
            </div>
        </div>
    );
};

export default AddServiceCard;