import React, { useContext } from 'react';
import { TimelineFried } from '../../context/TimelineFreind';
import { LuPhoneCall } from 'react-icons/lu';
import { FaRegCommentDots } from 'react-icons/fa';
import { FcNoVideo } from 'react-icons/fc';

const Timeline = () => {
       const {audio}=useContext(TimelineFried);
       const  {text}=useContext(TimelineFried);
       const   {vedeo}=useContext(TimelineFried);



    return (
        <div className='container mx-auto'>
            <div>
                <h1 className='text-black text-3xl font-bold'>TimeLine</h1>
            </div>

            {/* Audio */}
              {
                audio.map((call,ind)=>{
                    return (
                        <div key={ind} className='card bg-base-100 shadow rounded-2xl w-full py-5 my-5 '>

                      <div className='flex items-center gap-5 m-4'>
                          <div> <LuPhoneCall className='text-5xl' /></div>
                        <div>
                            <h3 className='font-bold text-xl'>Call <span className='text-gray-600'>with {call.name}</span></h3>
                            <p className='text-gray-600'>{new Date().toLocaleDateString()}</p>
                        </div>
                      </div>

          </div>
                    )
                })
              }

                {/* Text */}
              <div>
              {
                text.map((call,ind)=>{
                    return (
                        <div key={ind} className='card bg-base-100 shadow rounded-2xl w-full py-5 my-5 '>

                      <div className='flex items-center gap-5 m-4'>
                          <div> <FaRegCommentDots className='text-5xl' /></div>
                        <div>
                            <h3 className='font-bold text-xl'>Text <span className='text-gray-600'>with {call.name}</span></h3>
                            <p className='text-gray-600'>{new Date().toLocaleDateString()}</p>
                        </div>
                      </div>

          </div>
                    )
                })
              }
              </div>

              {/* Vedeo */}

             <div>
                 {
                vedeo.map((call,ind)=>{
                    return (
                        <div key={ind} className='card bg-base-100 shadow rounded-2xl w-full py-5 my-5 '>

                      <div className='flex items-center gap-5 m-4'>
                          <div> <FcNoVideo className='text-5xl' /></div>
                        <div>
                            <h3 className='font-bold text-xl'>Call <span className='text-gray-600'>with {call.name}</span></h3>
                            <p className='text-gray-600'>{new Date().toLocaleDateString()}</p>
                        </div>
                      </div>

          </div>
                    )
                })
              }
             </div>





        </div>
        
    );
};

export default Timeline;