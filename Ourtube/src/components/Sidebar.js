import React from 'react'
import { useSelector } from 'react-redux';
const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  if(isMenuOpen){
    return null;
  }

  return (
    <div className = "flex-none bg-red-300 rounded-lg ">
    <ul className="mx-2 my-2 ">
      <li>
      <span className= "hover:bg-red-400 rounded-lg cursor-pointer"><a href = "/" alt = "Home Button">Home</a></span>
      </li>
      <li>
      <span className= "hover:bg-red-400 rounded-lg cursor-pointer">Shorts</span>
      </li>
      <li>
      <span className= "hover:bg-red-400 rounded-lg cursor-pointer">Videos</span>
      </li>
      <li>
      <span className= "hover:bg-red-400 rounded-lg cursor-pointer">Live</span>
      </li>
      
    </ul>  
    <div className="mx-2 my-2">
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li><span className= "hover:bg-red-400 rounded-lg cursor-pointer">Music</span></li>
        <li><span className= "hover:bg-red-400 rounded-lg cursor-pointer">Sports</span></li>
        <li><span className= "hover:bg-red-400 rounded-lg cursor-pointer">Gaming</span></li>
        <li><span className= "hover:bg-red-400 rounded-lg cursor-pointer">Movies</span></li>
      </ul>
    </div>
    <div className="mx-2 my-2">
      <h1 className="font-bold">Watch Later</h1>
      <ul>
        <li><span className= "hover:bg-red-400 rounded-lg cursor-pointer">Music</span></li>
        <li><span className= "hover:bg-red-400 rounded-lg cursor-pointer">Sports</span></li>
        <li><span className= "hover:bg-red-400 rounded-lg cursor-pointer">Gaming</span></li>
        <li><span className= "hover:bg-red-400 rounded-lg cursor-pointer">Movies</span></li>
      </ul>
    </div>
    </div>
  )
}

export default Sidebar;
