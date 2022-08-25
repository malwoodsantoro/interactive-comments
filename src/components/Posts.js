import Post from "./Post"
import styled from "styled-components";
import Textbox from "./Textbox";
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
        comments.map(({ content, user, index, replies, createdAt, id: commentId, score }) => {
          return (
            <div className="posts">
              <Post key={index} username={user.username} score={score} content={content} createdAt={createdAt} isCurrentUser={(currentUser == user.username) ? true : false} current={currentUser} comment={true} commentId={commentId} addReply={addReply} deletePost={deletePost} editComment={editComment} addComment={addComment} />
              <StyledReplies>
                {replies.length > 0 && replies.map(({ index: replyIndex, user, content, createdAt, id: replyId, score, replyingTo }) => {
                  return (
                    <Post key={replyIndex} username={user.username} score={score} content={content} createdAt={createdAt} isCurrentUser={(currentUser == user.username) ? true : false} current={currentUser} comment={false} replyingTo={replyingTo} addReply={addReply} commentId={commentId} replyId={replyId} deletePost={deletePost} editComment={editComment} addComment={addComment} />
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