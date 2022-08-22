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

  const deletePost = (isReply, commentId, replyId) => {

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
      let updatedComments = comments.filter(comment => !(comment.id === commentId));
      setComments(updatedComments)
    }
  }

  const editComment = (comment, editedContent, commentId, replyId) => {
    console.log(editedContent)
    if (!comment) {
      const newComments = comments.map((comment) => {
        // if the index is not the one we want return the while grup as is
        if (comment.id !== commentId) return comment;
        // otherwise create a new one by spreading the existing
        return {
          ...comment,
          // and override the prop which is changed
          replies: comment.replies.map((reply) => {
            // again if the component is not the one we want to update
            // return it as is
            if (reply.id !== replyId) return reply;
            // otherwise create a new one by spreading the existing
            // and adding/modifying the props we want
            return {
              ...reply,
              content: editedContent
            }
          })
        }
      })
      console.log(newComments)
      setComments(newComments)
      // let updatedReploo = comments.map(comment => {
      //   if (comment.id == commentId) {
      //     comment.replies.map(reply => {
      //       if (reply.id == replyId) {
      //         return {...comment, : 'cool'}
      //       } else {
      //         return reply
      //       }
      //     })
      //   } else {
      //   console.log('comment' + JSON.stringify(comment))
      //   return comment
      //   }
      //   // return item; // else return unmodified item 
      // })
      // console.log(updatedReploo)
      // setComments(updatedReploo)

      // else {
      //   let updatedComments = comments.filter(comment => !(comment.id === commentId));
      //   setComments(updatedComments)
      // }
    }
  }

  return (
    <div className="App">
      <Comments comments={comments} currentUser={currentUser} addComment={addToComments} addReply={addToReplies} deletePost={deletePost} editComment={editComment} />
    </div>
  );
}

export default App;
