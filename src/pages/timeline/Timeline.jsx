import React, { useContext, useState } from 'react';
import { TimelineFried } from '../../context/TimelineFreind';
import { LuPhoneCall } from 'react-icons/lu';
import { FaRegCommentDots } from 'react-icons/fa';
import { FcNoVideo } from 'react-icons/fc';

const Timeline = () => {

       const {audio,text,vedeo}=useContext(TimelineFried);
    

       const [selected,setSelcted]=useState("all");



    return (
      
        <div className='container mx-auto '>

          <div className='py-4'>
                <h1 className='text-black text-3xl font-bold'>TimeLine</h1>
            </div>



      {/* filter Dropdown */}
            <select onChange={(e)=>setSelcted(e.target.value)} className='p-2 border rounded'>
              <option value="all">Filter TimeLine</option>
              <option value="call">Call</option>
              <option value="text">Text</option>
              <option value="video">Videos</option>
            </select>

          {(audio.length===0 && text.length===0 && vedeo.length === 0 )?
           <div className='text-center py-45 space-y-5'>
            <h2 className="text-4xl font-bold text-gray-800">Your Timeline is Empty</h2>
             <p className="text-gray-500 mt-2 px-4">
            No audio calls, text messages, or videos have been added to your timeline yet.
        </p>

           </div>:
           ""}

            
            

            {/* Audio */}

            
            {(selected === "call" || selected === "all" ) && (
              
              
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
              
            )}



                {/* Text */}
              
              {(selected === "text" || selected==="all") && (
            
              
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
              
              
              )}


              {/* Vedeo */}

            {(selected==="video" || selected ==="all") && (
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
            )}
                 
           
              
             





        </div>
        
    );
};

export default Timeline;