import React, { useEffect, useState, useRef } from "react";
import { userIcon, Hamburger, YouTubeSearchAPI } from "../utils/constants";
import ourTube from "../utils/OurTube.png";
import channelLogo from "../utils/ChannelLogo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const[searchSuggestion,setSearchSuggestions] = useState([]);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const searchcache = useSelector((store) => store.search);
  const toggleHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if(searchcache[searchQuery]){
        setSearchSuggestions(searchcache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleSuggestion = (suggestions) =>{
    setSearchQuery(suggestions);
    setIsFocused(false);
  }
  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YouTubeSearchAPI + searchQuery);
    const json = await data.json();
    setSearchSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]:json[1],
      })
    );
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex">
        <img
          src={Hamburger}
          alt="options"
          className="mx-3 h-24 my-9 md:h-20 md:my-0 md:mx-0 md:w-16 cursor-pointer"
          onClick={toggleHandler}
        ></img>
        <a href="/">
          <img
            src={ourTube}
            alt="logo"
            className="my-10 h-24 md:my-1 md:h-16 cursor-pointer mx-4"
          ></img>
        </a>
      </div>
      <div className="my-16 mx-[7rem] md:my-4 md:mx-80 relative">
        <div className="flex md:flex-none">
          <input
            type="text"
            className="p-2 w-[10rem] md:w-[30rem] rounded-l-full bg-red-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}

            ref={inputRef}
          />
          <button className="bg-red-500 rounded-lg p-2 text-xl hover:bg-red-600 rounded-r-full">
            🔍
          </button>
        </div>
        {isFocused && (
          <div
            className="fixed bg-red-200 rounded-lg mx-1 px-3 py-2 md:w-[30rem] cursor-pointer border border-gray-100 w-[10rem]"
            ref={suggestionsRef}
          >
            <ul>
              {searchSuggestion.map((s)=>(
                <li key = {s} className="py-2 shadow-sm hover:bg-red-500 md:w-[29rem] w-[9rem]" onClick={()=>handleSuggestion(s)}>🔍{s}</li>
              )
              )}
            </ul>
          </div>
        )}
      </div>
      <div className="flex">
      <a href = "/myVideos">
        <img
          className="my-10 h-24 md:my-0 md:h-16 cursor-pointer mx-4 "
          alt="channel logo"
          src={channelLogo}
        ></img>
        </a>
        <img
          className="md:block hidden my-10 h-24 md:my-0 md:h-16 cursor-pointer mx-4 "
          alt="user icon"
          src={userIcon}
        ></img>
      </div>
    </div>
  );
};

export default Header;
