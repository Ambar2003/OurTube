import React from 'react'

const VideoCard = ({info}) => {
    const {snippet} = info;
    const {statistics} = info;
    const {thumbnails,localized,channelTitle} = snippet;
    const {viewCount} = statistics
    const {title} = localized;
    function simplifyNumber(num) {
      if (num >= 1000000) {
          return (num / 1000000).toFixed(1) + 'M';
      } else if (num >= 1000) {
          return (num / 1000).toFixed(1) + 'K';
      } else {
          return num.toString();
      }
  }
  return (
    <div className="mx-2 bg-red-300 w-80 rounded-lg cursor-pointer h-[23rem] my-4 ">
      
      <img className="w-80 rounded-lg" alt = "thumbnail" src = {thumbnails.medium.url}></img>
      <p className="font-bold text-xl mx-2 my-2">{title}</p>
      <p className= "mx-2 font-bold">{channelTitle}</p>
      <p className="mx-2 font-semibold">Views: {simplifyNumber(viewCount)}</p>
    </div>
  )
}
export default VideoCard;
