import React from 'react';
import { Link } from 'react-router';

const FriendCard = ({friend}) => {
    // console.log(friend);
    return (
        <Link to={`/friendDetails/${friend.id}`}>
            <div className=''>
   <div className="card bg-base-100 shadow-sm m-4  ">
  <figure className="px-10 pt-10">
    <img
      src={friend.picture} alt={friend.name}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl font-bold"> {friend.name} </h2>

    <p className='text-gray-600'>{friend.days_since_contact}</p>

    <p className='bg-[#cbfadbFF]  px-2  rounded-full text-[#244d3F] '>{friend.category}</p>

    <div className="card-actions">
      <p className={`px-4 py-1 rounded-full text-white ${
         friend.status === "overdue" ? "bg-[#ef4444FF]" : 
         friend.status === "almost due" ? "bg-[#efad44FF]" : 
        "bg-[#244d3fFF]"
      }`}>{friend.status}</p>
    </div>
  </div>
</div>
        </div>
        </Link>
    );
};

export default FriendCard;