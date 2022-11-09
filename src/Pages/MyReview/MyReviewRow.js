import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const MyReviewRow = ({ rvwRow, handleDelete, review }) => {
    const { user } = useContext(AuthContext)
    const { _id, reviewName, customer, img, message } = rvwRow

    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} title='delete this review' className='btn btn-outline btn-ghost'>X</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {
                                img ?
                                    <img src={img} alt="" />
                                    :
                                    <img src="https://tse4.mm.bing.net/th?id=OIP.DZLWFqYqIG4l_yJaqOuJXgHaHa&pid=Api&P=0" alt="" />
                            }

                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{reviewName}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                {customer}
                <br />
                <span className="badge badge-ghost badge-sm"></span>
            </td>
            <td>{message}</td>
            <th>
                <button
                    className="btn btn-ghost btn-xs">update</button>
            </th>
        </tr>


    );

};

export default MyReviewRow;