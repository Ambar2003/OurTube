import React, { useEffect, useState } from "react";
import {PopularVideosOfMyChannel } from "../utils/constants";
import MyVideoCard from "./MyVideoCard"
import { Link } from "react-router-dom";
const MyVideoContainer = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    getPopularVideosOfMyChannel();
  }, []);
  const getPopularVideosOfMyChannel = async () =>{
    const data = await fetch(PopularVideosOfMyChannel);
    const json = await data.json();
    // console.log(json);
    setVideos(json.items);    
  }
  if (videos == null) return;
  return (
    <div className="mx-2 flex flex-wrap justify-evenly my-2">
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id.videoId}>
          <MyVideoCard key={video.id.videoId} info={video}></MyVideoCard>
        </Link>
      ))}
    </div>
  );
};

export default MyVideoContainer;
