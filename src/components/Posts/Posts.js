import Post from "../Post/Post"
import styled from "styled-components";
import Textbox from "../Textbox";
import React, { useState } from 'react';

const StyledPosts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledReplies = styled.div`
  border-left: thick solid hsl(223, 19%, 93%);
  float: right;
  margin-left: 40px;
  padding-left: 40px;
`

const Posts = ({ comments, currentUser, addComment, addReply, deletePost, editComment }) => {

  return (
    <StyledPosts>
      {
        comments.map(({ content, user, replies, createdAt, id: commentId, score }, index) => {
          return (
            <div key={index} className="posts">
              <Post key={index} username={user.username} score={score} content={content} createdAt={createdAt} isCurrentUser={(currentUser == user.username) ? true : false} current={currentUser} comment={true} commentId={commentId} addReply={addReply} deletePost={deletePost} editComment={editComment} addComment={addComment} />
              <StyledReplies>
                {replies.length > 0 && replies.map(({ user, content, createdAt, id: replyId, score, replyingTo }, index) => {
                  return (
                    <Post key={index} username={user.username} score={score} content={content} createdAt={createdAt} isCurrentUser={(currentUser == user.username) ? true : false} current={currentUser} comment={false} replyingTo={replyingTo} addReply={addReply} commentId={commentId} replyId={replyId} deletePost={deletePost} editComment={editComment} addComment={addComment} />
                    )
                  }
                )}
              </StyledReplies>
            </div>
          )
        })
      }
      <Textbox addComment={addComment} current={currentUser} comment={true} isBottomBox={true} />
    </StyledPosts>
  )
}

export default Posts