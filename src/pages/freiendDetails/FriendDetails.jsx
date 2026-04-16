import React, { useContext } from 'react';
import { useParams } from 'react-router';
import UseFriend from '../../hooks/UseFriend';
import { HiMiniBellSnooze } from 'react-icons/hi2';
import { FaArchive, FaEnvelopeOpenText, FaVideoSlash } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { FiPhoneCall } from 'react-icons/fi';
import { TimelineFried } from '../../context/TimelineFreind';
import { toast } from 'react-toastify';


const FriendDetails = () => {
    const {id}=useParams()
    // console.log(id);

    const  {friends,loding} = UseFriend();
    // console.log(friends);


const {audio,setAudio}=useContext(TimelineFried)
const {text,setText}=useContext(TimelineFried)
const {vedeo,setVedeo}=useContext(TimelineFried)

  if(loding){
        return <p>Fried not found</p>
    }


   

    const exceptedFriend = friends.find(friend => friend.id === parseInt(id));
    // console.log(exceptedFriend);


    



    const handleAudio=()=>{
      setAudio([...audio,exceptedFriend]);
     toast.success(`${exceptedFriend.name} added by Call`);
    }

    const handleText=()=>{
      setText([...text,exceptedFriend]);
      toast.success(`${exceptedFriend.name} added by Text`);
    }

    const handleVedeo=()=>{
      setVedeo([...vedeo,exceptedFriend]);
      toast.success(`${exceptedFriend.name} added by Vedeo Call`);
    }


  

    
    return (
        <div className='container mx-auto flex flex-col md:flex-row
         gap-5  '>
            <div className=''>
        <div className="card bg-base-100 shadow-sm m-4  ">
  <figure className="px-10 pt-10">
    <img
      src={exceptedFriend.picture} alt={exceptedFriend.name}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl font-bold"> {exceptedFriend.name} </h2>

   

    <div className="card-actions">
      <p className={`px-4 py-1 rounded-full text-white ${
        exceptedFriend.status === "overdue" ? "bg-[#ef4444FF]" : 
      exceptedFriend.status === "almost due" ? "bg-[#efad44FF]" : 
        "bg-[#244d3fFF]"
      }`}>{exceptedFriend.status}</p>
    </div>
    <p className='bg-[#cbfadbFF]  px-2  rounded-full text-[#244d3F] '>{exceptedFriend.category}</p>
    <p className='text-gray-600'>{exceptedFriend.bio}</p>
    <p className='text-gray-600'>Preferred : {exceptedFriend.preferred_contact} </p>

  </div>
     </div>

     <div className="card bg-base-100 shadow-sm m-4 w-96  ">
        <button className='flex items-center  gap-2 text-2xl py-5 mx-auto'> <HiMiniBellSnooze /> Snooxe 2 Weeks</button>
     </div>
     <div className="card bg-base-100 shadow-sm m-4 w-96 ">
        <button className='flex items-center  gap-2 text-2xl py-5 mx-auto'> <FaArchive /> Archive</button>
     </div>

     <div className="card bg-base-100 shadow-sm m-4 w-96  ">
        <button  className='flex items-center  gap-2 text-2xl py-5 mx-auto text-red-500'> <MdDelete /> Delete</button>
     </div>


            </div>




            <div className='w-full '>

                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center '>
                        <div className='card bg-base-100 shadow-sm m-4 py-5'>
                            <h1 className='text-2xl font-bold'>{exceptedFriend.days_since_contact}</h1>
                            <p className='text-gray-600'>Day Since Contact</p>
                        </div>
                        <div className='card bg-base-100 shadow-sm m-4 py-5'>
                            <h1  className='text-2xl font-bold'>{exceptedFriend.goal}</h1>
                            <p className='text-gray-600'> Goal (Days)</p>
                        </div>
                        <div className='card bg-base-100 shadow-sm m-4 py-5'>
                            <h1  className='text-2xl font-bold'>{exceptedFriend.next_due_date}</h1>
                            <p className='text-gray-600'>Next Due</p>
                        </div>
                    </div>


                  <div className='card bg-base-100 shadow-sm m-4 py-5'>

                    <div className='flex items-center justify-between m-4 '>
                        <h3 className='text-xl font-bold'>Relationship Goal</h3>
                        <button className='btn'>Edit</button>
                    </div>
                    <p className='text-gray-600 m-4'>Connect every <span className='font-bold text-black'>{exceptedFriend.goal} days</span></p>
                  </div>


                  <div  className='card bg-base-100 shadow-sm m-4  lg:py-5 '>
                    <h1  className=' m-4 text-2xl font-bold' >Quick Check-in</h1>

                    <div className='grid grid-cols-1 md:grid-cols-3  lg:gap-5 m-4  text-center  '>


                        <div  onClick={handleAudio} className='  card   shadow-sm m-4 bg-[#f8fafcFF] py-2  lg:py-12 rounded-2xl ' >
                                <FiPhoneCall className='mx-auto' />
                                <p>Call</p>
                        </div>

                        <div  onClick={handleText} className=' card   shadow-sm m-4 bg-[#f8fafcFF] py-2 lg:py-12 rounded-2xl' >
                                <FaEnvelopeOpenText className='mx-auto' />
                                <p>Text</p>
                        </div>

                        <div   onClick={handleVedeo} className=' card   shadow-sm m-4 bg-[#f8fafcFF] py-2 lg:py-12 rounded-2xl' >
                                <FaVideoSlash className='mx-auto' />
                                <p>Video</p>
                        </div>
                    </div>
                  </div>
                



            </div>
        </div>
    );
};

export default FriendDetails;