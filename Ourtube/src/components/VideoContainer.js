import React, { useEffect, useState } from "react";
import { popularVideosAPI, PopularVideosOfMyChannel } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { AdVideoCard } from "./MyVideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  const [addVideos, setAddVideos] = useState(null);
  const [randomAd, setRandomAd] = useState(null);

  useEffect(() => {
    getVideos();
    getPopularVideosOfMyChannel();
  }, []);

  const getVideos = async () => {
    const data = await fetch(popularVideosAPI);
    const json = await data.json();
    setVideos(json.items);
  };

  const getPopularVideosOfMyChannel = async () => {
    const data = await fetch(PopularVideosOfMyChannel);
    const json = await data.json();
    console.log(json); // Log the fetched data
    setAddVideos(json.items);
    setRandomAd(getRandomAdVideo(json.items)); // Set the random ad video
  };

  useEffect(() => {
    console.log(addVideos); // Log the addVideos state to see updates
  }, [addVideos]);

  const getRandomAdVideo = (videos) => {
    if (!videos || videos.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * videos.length);
    return videos[randomIndex];
  };

  if (addVideos == null || videos == null) return null;

  return (
    <div className="mx-2 flex flex-wrap justify-evenly my-2">
      {randomAd && 
      <Link key={randomAd.id} to={"/watch?v=" + randomAd.id.videoId}>
          <AdVideoCard key={randomAd.id.videoId} info={randomAd}></AdVideoCard>
      </Link>
}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video}></VideoCard>
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
