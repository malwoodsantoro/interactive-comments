import Post from "./Post"
import styled from "styled-components";
import Textbox from "./Textbox";
import React, { useState } from 'react';

const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledReply = styled.div`
  border-left: thick solid hsl(223, 19%, 93%);
  float: right;
  margin-left: 40px;
`

const Posts = ({ comments, currentUser, addComment, addReply, deletePost, editComment }) => {

  return (
    <StyledComments>
      {
        comments.map(({ content, user, index, replies, createdAt, id: commentId, score }) => {
          return (
            <div className="posts">
              <Post key={index} username={user.username} score={score} content={content} createdAt={createdAt} currentUser={(currentUser == user.username) ? true : false} comment={true} commentId={commentId} addReply={addReply} deletePost={deletePost} editComment={editComment} />
              <StyledReply>
                {replies.length > 0 && replies.map(({ index, user, content, createdAt, id: replyId, score, replyingTo }) => {
                  return (
                    <Post key={index} username={user.username} score={score} content={content} createdAt={createdAt} currentUser={(currentUser == user.username) ? true : false} current={currentUser} comment={false} replyTo={replyingTo} addReply={addReply} commentId={commentId} replyId={replyId} deletePost={deletePost} editComment={editComment} />
                  )
                }
                )}
              </StyledReply>

            </div>
          )
        })
      }
      <Textbox addComment={addComment} user={currentUser} isReply={false} />
    </StyledComments>
  )
}

export default Posts