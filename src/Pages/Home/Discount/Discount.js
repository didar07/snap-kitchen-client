import React from 'react';

const Discount = () => {
    return (
        <div className='flex justify-between bg-red-300 mt-10 mb-10 rounded-lg p-7'>
            <div>
                <img className='rounded-lg' src="https://tse1.mm.bing.net/th?id=OIP.icRuOlWnWaoDB3ZAkwchdgHaE8&pid=Api&P=0" alt="" />
            </div>
            <div className='my-auto'>
                <h1 className='text-5xl font-bold'>Make order now and you get <br /> 10% discount</h1>
                <p className='mt-2 font-bold'>we handpick a thoughtful lineup of trusted brands and products. <br /> Then we deliver groceries and recipies to help you. <br /> eat - well and feel - great every day</p>
                <button className='mt-3 btn btn-outline btn-secondary'>Make order</button>
            </div>
        </div>
    );
};

export default Discount;