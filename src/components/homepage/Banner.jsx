import React from 'react';
import { IoAdd } from 'react-icons/io5';

const Banner = () => {
    return (
        <div className='container mx-auto py-20 text-center space-y-5'>
            <h1 className='text-4xl font-bold'>Friends to keep close in your life</h1>
            <p className='w-[90%] md:w-[80%] lg:w-[40%] text-gray-600 mx-auto'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                relationships that matter most.</p>
            <button className='flex items-center btn mx-auto font-bold bg-[#244d3fFF] text-white text-xl p-5'> <IoAdd /> Add a Friend</button>
        </div>
    );
};

export default Banner;