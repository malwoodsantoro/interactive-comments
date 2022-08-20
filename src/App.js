import './App.css';
import Comments from './components/Comments';
import data from './data.json';
import React, { useState } from 'react';

function App() {

  const [comments, setComments] = useState(data.comments)
  const [currentUser, setCurrentUser] = useState(data.currentUser.username)

  const addToComments = (text) => {
    setComments([...comments, {
      "id": 1,
      "content": text,
      "createdAt": "1 month ago",
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

  const addToReplies = (commentId, text) => {
    const testObject = {
      "id": 3,
      "content": text,
      "createdAt": "1 week ago",
      "score": 4,
      "replyingTo": "maxblagun",
      "user": {
        "image": {
          "png": "./images/avatars/image-ramsesmiron.png",
          "webp": "./images/avatars/image-ramsesmiron.webp"
        },
        "username": "ramsesmiron"
      }
    }

    let updatedReplies = comments.map(item => {
      if (item.id == commentId) {
        return { ...item, replies: [...item.replies, testObject] }; //gets everything that was already in item, and updates "done"
      }
      return item; // else return unmodified item 
    });
    setComments(updatedReplies)
  }

  const deleteComment = (isReply, commentId, replyId) => {

    let commentIndex = comments.findIndex(x => x.id === commentId);
    let replyIndex = comments[commentIndex].replies.findIndex(x => (x.id = replyId));

    if (isReply) {
      let updatedReplies = comments.map(item => {
        if (item.id == commentId) {
          return { ...item, replies: [...item.replies.splice(replyIndex, 1)] }; //gets everything that was already in item, and updates "done"
        }
        return item; // else return unmodified item 
      });
      setComments(updatedReplies)
    } else {
      alert('comment')
    }
  }

  const editComment = () => {
    alert('edit comment')
  }



  return (
    <div className="App">
      <Comments comments={comments} currentUser={currentUser} addComment={addToComments} addReply={addToReplies} deleteComment={deleteComment} editComment={editComment} />
    </div>
  );
}

export default App;
