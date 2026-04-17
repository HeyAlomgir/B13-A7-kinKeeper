import React from 'react';
import UseFriend from '../../hooks/UseFriend';
import FriendCard from '../UI/FriendCard';
import { HashLoader, PacmanLoader } from 'react-spinners';
import FriendDetails from '../../pages/freiendDetails/FriendDetails';

const Frends = () => {

    const  {friends,loding} = UseFriend();

    // console.log(friends);
    return (
        <div className='container mx-auto py-10 my-5 '>

            <div className='grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-4 text-center gap-20 m-4'>
                <div className=' shadow-2xl py-5 rounded-2xl'>
                    <h4 className='text-xl font-bold'>{friends.length}</h4>
                     <p className='text-gray-500 font-semibold'>Total Friends</p>
                </div>
                <div className=' shadow-2xl py-5 rounded-2xl'>
                    <h4 className='text-xl font-bold'>10</h4>
                     <p className='text-gray-500 font-semibold'>On Track</p>
                </div>
                <div className=' shadow-2xl py-5 rounded-2xl'>
                    <h4 className='text-xl font-bold'>10</h4>
                     <p className='text-gray-500 font-semibold'>Need Attention</p>
                </div>
                <div className=' shadow-2xl py-5 rounded-2xl'>
                    <h4 className='text-xl font-bold'>10</h4>
                     <p className='text-gray-500 font-semibold'>Interactions This Month</p>
                </div>
            </div>



            <div className='py-10'>
                <h1 className='text-4xl font-bold my-10'>Your Friends</h1>


            <div>

            </div>
                {loding ? 
                <div className='flex justify-center items-center'><PacmanLoader color="#facc15" /></div> :



                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 '>
                    {friends.map ((friend,index) => {
                        return <div key={index}>
                            <FriendCard friend={friend} ></FriendCard>
                           
                        </div>
                    })}
                </div> }
            </div>
            
        </div>
    );
};

export default Frends;