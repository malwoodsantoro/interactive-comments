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
      "createdAt": "Just now",
      "score": "0",
      "user": {
        "image": {
          "png": `./images/avatars/image-${currentUser}.png`,
          "webp": `./images/avatars/image-${currentUser}.webp`
        },
        "username": currentUser
      },
      "replies": []
    }])
  }

  const addReply = (commentId, replyId, text, replyingTo) => {
    const testObject = {
      "id": replyId + 1,
      "content": text,
      "createdAt": "Just now",
      "score": 0,
      "replyingTo": replyingTo,
      "user": {
        "image": {
          "png": `./images/avatars/image-${currentUser}.png`,
          "webp": `./images/avatars/image-${currentUser}.webp`
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
      setComments(newComments)
    }
  }

  return (
    <div className="App">
      <Comments comments={comments} currentUser={currentUser} addComment={addToComments} addReply={addReply} deletePost={deletePost} editComment={editComment} />
    </div>
  );
}

export default App;
