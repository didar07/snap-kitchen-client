import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const ReviewRow = ({ review }) => {
    const { user } = useContext(AuthContext)
    const { reviewName, customer, img, message } = review
    return (
        <tr>
            <th>
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
            <td><input type="text" value={message} /></td>
            <th>
                <button
                    className="btn btn-ghost btn-xs"></button>
            </th>
        </tr>
    );
};

export default ReviewRow;