import React from 'react';

const DiscoverSection = () => {
    return (
        <div className='flex justify-between bg-yellow-200 mt-10 mb-10 rounded-lg p-7'>
            <div className='my-auto'>
                <h1 className='text-5xl font-bold'>Fresh & tasty foods</h1>
                <h2 className='text-3xl font-bold'>Relax Please, we've got you covered  <br />every day of the week.</h2>
                <button className='bg-red-400 px-4 text-3xl font-bold rounded-lg mt-3 py-4'>Discover Menu</button>
            </div>
            <div>
                <img src="https://tse4.mm.bing.net/th?id=OIP.DQaBkE2OCO1QfqVKbRPxygHaE8&pid=Api&P=0" alt="" />
            </div>
        </div>
    );
};

export default DiscoverSection;