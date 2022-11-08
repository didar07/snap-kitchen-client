import React from 'react';

const ReviewRow = ({ review }) => {
    const { reviewName, customer, img, message } = review
    return (
        <tr>
            <th>
                <label>
                    <button className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{reviewName}</div>
                        <div className="text-sm opacity-50">{customer}</div>
                    </div>
                </div>
            </td>
            <td>

                <br />
                <span className="badge badge-ghost badge-sm"></span>
            </td>
            <td>{message}</td>
            <th>
                <button
                    className="btn btn-ghost btn-xs"></button>
            </th>
        </tr>
    );
};

export default ReviewRow;