import React from "react";
import { userIcon } from "../utils/constants";
const Comment = ({ commentData }) => {
//   console.log(commentData);
  return (
    <div className="flex bg-red-200 rounded-lg shadow-lg my-5">
      <img className="h-14 w-14" src={userIcon} alt="user"></img>
      <div className="px-3">
        <p className="font-bold text-xl">{commentData.name}</p>
        <p className="text-xl">{commentData.text}</p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key = {index}>
    <Comment commentData={comment}></Comment>
        {Array.isArray(comment.replies) && comment.replies.length>0 && (<div className="pl-5 border border-l-black ml-5">
            <CommentList comments = {comment.replies}></CommentList>
        </div>
    )}
    </div>
  ));
};
const commentData = [
    {
      name: "Ambar Ahmad",
      text: "I am Ambar Ahmad",
      replies: [
        {
          name: "Akshay",
          text: "Pleased to meet you",
          replies: [
            {
              name: "Ambar Ahmad",
              text: "How old are you?",
              replies: [
                {
                  name: "Akshay",
                  text: "I am 30 years old",
                  replies: [
                    {
                      name: "Ambar Ahmad",
                      text: "I am 21 years old",
                      replies: [] // This should be an empty array if there are no further replies
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      name: "Aman",
      text: "I am Aman",
      replies: [
        {
          name: "Ambar Ahmad",
          text: "Pleased to meet you",
          replies: [] // This should be an empty array if there are no further replies
        }
      ]
    },
    {
      name: "Arushi",
      text: "I am Arushi",
      replies: [] // This should be an empty array if there are no further replies
    }
  ];
  
const CommentsConatiner = () => {
  return (
    <div className="my-5 mx-5">
        <h1 className = "font-bold text-2xl text-red-500">Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsConatiner;
