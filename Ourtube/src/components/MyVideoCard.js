import React from 'react'
const MyVideoCard = ({info}) => {
    const {snippet} = info;
    const {thumbnails,channelTitle} = snippet;
    const {title} = snippet;
    const {publishTime} = snippet
  return (
    <div className="mx-2 bg-red-300 w-80 rounded-lg cursor-pointer h-[23rem] my-4 ">
      
      <img className="w-80 rounded-lg" alt = "thumbnail" src = {thumbnails.medium.url}></img>
      <p className="font-bold text-xl mx-2 my-2">{title}</p>
      <p className= "mx-2 font-bold text-lg">Date Published: {formatDate(publishTime.substring(0,10))}</p>
      <p className= "mx-2 font-bold text-xl">{channelTitle}</p>
    </div>
  )
}
export const AdVideoCard = ({info}) =>{
  return( 
  <div className="title">
    <p className="text-xl"><span className="bg-red-500 rounded-lg">Advertisment</span></p>
    <MyVideoCard info = {info}/>
  </div>
  )
}

function formatDate(dateString) {
  const months = [
      "January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December"
  ];

  // Split the date string into parts
  const parts = dateString.split("-");
  const year = parts[0];
  const month = months[parseInt(parts[1], 10) - 1];
  const day = parseInt(parts[2], 10);

  // Determine the ordinal suffix for the day
  let suffix = "th";
  if (day % 10 === 1 && day !== 11) {
      suffix = "st";
  } else if (day % 10 === 2 && day !== 12) {
      suffix = "nd";
  } else if (day % 10 === 3 && day !== 13) {
      suffix = "rd";
  }

  // Return the formatted date
  return `${day}${suffix} ${month}, ${year}`;
}

export default MyVideoCard;
