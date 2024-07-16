import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import { LiveChat } from "./LiveChat";
const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const videoKey = searchParams.get("v");
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
    <div className="flex w-full ">
      <iframe
        width="1400"
        height="800"
        src={"https://www.youtube.com/embed/" + videoKey + "?autoplay=1"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    <div className="">
      <LiveChat></LiveChat>
    </div>
    </div>
    <div>
      <CommentsContainer/>
    </div>
    </div>
  );
};

export default WatchPage;
