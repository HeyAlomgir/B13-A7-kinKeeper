import React, { useContext } from 'react';
import { TimelineFried } from '../../context/TimelineFreind';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Status = () => {
 const {audio}=useContext(TimelineFried)
 const {text}=useContext(TimelineFried)
 const {vedeo}=useContext(TimelineFried)

 const data = [
  { name: 'Audio', value: audio.length, fill: '#0088FE' },
 
  { name: 'Text', value: text.length, fill: '#FFBB28' },
  { name: 'Vedio', value: vedeo.length, fill: '#FF8042' },
];


    return (
        <div className='container mx-auto '>

            <h1 className='text-4xl font-bold my-3 m-4'>FriendShip Analytics</h1>

            
          {(audio.length===0 && text.length===0 && vedeo.length === 0 )?
           <div className='text-center  py-5 space-y-5'>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">Your Timeline is Empty</h2>
             <p className="text-gray-500 mt-2 px-4">
            No audio calls, text messages, or videos have been added to your timeline yet to status.
        </p>

           </div>:
           ""}


       <div className='flex sm:flex-col md:flex-row justify-center py-5 shadow-2xl my-5 rounded-2xl bg-base-100 m-4'>

        <p className='text-gray-600 m-4 '>By Interaction Type</p>
         <PieChart className='' style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
     
      />
      
     <Legend/>
     <Tooltip/>
    </PieChart>
       </div>
        </div>
    );
};

export default Status;