import { useDispatch, useSelector } from "react-redux";
import { LiveChatMessage } from "./LiveChatMessage";
import { useEffect, useState } from "react";
import { addMessage } from "./chatSlice";
import { generateRandomNames } from "../utils/nameGenerator";
import { getRandomChat } from "../utils/chatGenerator";
export const LiveChat = () => {
  const messages = useSelector((store) => store.chat.message);
  const dispatch = useDispatch();
  useEffect(() => {
    const i = setInterval(() => {
    //   console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomNames(),
          message: getRandomChat(),
        })
      );
    }, 1500);
    return () => clearInterval(i);
  }, []);
  const [chatLiveMessage, setChatLiveMessage] = useState("");
  return (
    <form onSubmit={
        (e)=> {
            e.preventDefault();
            dispatch(
                addMessage({
                    name:"Ambar Ahmad",
                    message:chatLiveMessage
                })
            )
            setChatLiveMessage("");
        }
    }>
    <>
      <div className="mx-2 border border-black w-[20rem] md:w-[30rem] h-[800px] bg-gray-100 rounded-lg">
        <h1 className="text-2xl mx-2 my-2">LiveChat</h1>
        <div className="overflow-y-auto max-h-[700px] md:max-h-[700px] flex flex-col-reverse ">
          {messages.map((message,index) => {
            return (
              <LiveChatMessage name={message.name} key = {index} message={message.message} />
            );
          })}
        </div>
      </div>
      <div className="w-[20rem] p-2 ml-2 border border-black md:w-[30rem]">
        <input
          type="text"
          className="mx-2 w-[5rem] md:w-[20rem] px-1 py-1 bg-red-300"
          value={chatLiveMessage}
          onChange={(e) => {
            setChatLiveMessage(e.target.value);
          }}
        ></input>
        <button className="bg-red-400 px-1 py-1 rounded-lg text-lg hover:bg-red-500">
          Send Message
        </button>
      </div>
    </>
    </form>
  );
};
