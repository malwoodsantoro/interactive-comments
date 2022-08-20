import Comment from "./Comment"
import styled from "styled-components";
import Textbox from "./Textbox";
import React, {useState} from 'react';

const StyledComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledReply = styled.div`
  display: flex;
  justify-content: right;
  border-left: thick solid hsl(223, 19%, 93%);
  margin-left: 40px;
`

const StyledReplies = styled.div`

`
const Comments = ({ comments, currentUser, addComment, addReply, deleteComment, editComment}) => {

  return (
    <StyledComments>
      {
        comments.map(({ content, user, index, replies, createdAt, id: commentId, score }) => {
          return (
            <div>
              <Comment key={index} username={user.username} score={score} content={content} createdAt={createdAt} currentUser={(currentUser == user.username) ? true : false} isReply={false} commentId={commentId} addReply={addReply} deleteComment={deleteComment} editComment={editComment}/>
              <StyledReplies>
              {replies.length > 0 && replies.map(({ index, user, content, createdAt, id: replyId, score  }) => {
                return (
                  <StyledReply>
                    <Comment key={index} username={user.username} score={score} content={content} createdAt={createdAt} currentUser={(currentUser == user.username) ? true : false} current={currentUser} isReply={true} addReply={addReply} commentId={commentId} replyId={replyId} deleteComment={deleteComment} editComment={editComment}/>
                  </StyledReply>
                )
              }
              )}
              </StyledReplies>
            </div>
          )
        })
      }
      <Textbox addComment={addComment} user={currentUser} isReply={false}/>
    </StyledComments>
  )
}

export default Comments