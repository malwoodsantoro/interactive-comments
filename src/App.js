import './App.css';
import Comments from './components/Posts';
import data from './data.json';
import React, { useState } from 'react';

function App() {

  const [comments, setComments] = useState(data.comments)
  const [currentUser, setCurrentUser] = useState(data.currentUser.username)

  const addToComments = (text) => {
    setComments([...comments, {
      "id": 1,
      "content": text,
      "createdAt": "1 sfsmonth ago",
      "score": 12,
      "user": {
        "image": {
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": currentUser
      },
      "replies": []
    }])
  }

  const addToReplies = (commentId, replyId, text, replyingTo) => {
    console.log('reply id' + replyingTo)
    const testObject = {
      "id": replyId + 1,
      "content": text,
      "createdAt": "Just now",
      "score": 0,
      "replyingTo": replyingTo,
      "user": {
        "image": {
          "png": "./images/avatars/image-ramsesmiron.png",
          "webp": "./images/avatars/image-ramsesmiron.webp"
        },
        "username": currentUser
      }
    }

    let updatedReplies = comments.map(item => {
      if (item.id == commentId) {
        return { ...item, replies: [...item.replies, testObject] }; 
      }
      return item;
    });
    setComments(updatedReplies)
  }

  const deletePost = (comment, commentId, replyId) => {

    let commentIndex = comments.findIndex(x => x.id === commentId);
    let replyIndex = comments[commentIndex].replies.findIndex(x => (x.id = replyId));

    if (!comment) {
      let updatedReplies = comments.map(item => {
        if (item.id == commentId) {
          return { ...item, replies: [...item.replies.splice(replyIndex, 1)] }; 
        }
        return item; 
      });
      setComments(updatedReplies)
    } else {
      let updatedComments = comments.filter(comment => !(comment.id === commentId));
      setComments(updatedComments)
    }
  }

  const editComment = (comment, editedContent, commentId, replyId) => {
    if (!comment) {
      const newComments = comments.map((comment) => {

        if (comment.id !== commentId) return comment;

        return {
          ...comment,
          replies: comment.replies.map((reply) => {

            if (reply.id !== replyId) return reply;

            return {
              ...reply,
              content: editedContent
            }
          })
        }
      })
      console.log(newComments)
      setComments(newComments)
    }
  }

  return (
    <div className="App">
      <Comments comments={comments} currentUser={currentUser} addComment={addToComments} addReply={addToReplies} deletePost={deletePost} editComment={editComment} />
    </div>
  );
}

export default App;
