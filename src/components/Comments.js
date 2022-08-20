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

const Comments = ({ comments, currentUser, addComment, addReply}) => {


  return (
    <StyledComments>
      {
        comments.map(({ content, user, index, replies, createdAt, id: commentId }) => {
          return (
            <div>
              <Comment key={index} username={user.username} content={content} createdAt={createdAt} isReply={false} commentId={commentId} addReply={addReply} />
              <StyledReplies>
              {replies.length > 0 && replies.map(({ index, user, content, createdAt, id: replyId  }) => {
                return (
                  <StyledReply>
                    <Comment key={index} username={user.username} content={content} createdAt={createdAt} currentUser={(currentUser == user.username) ? true : false} current={currentUser} isReply={true} addReply={addReply} commentId={commentId} replyId={replyId} />
                  </StyledReply>
                )
              }
              )}
              </StyledReplies>
            </div>
          )
        })
      }
      <Textbox addComment={addComment} user={currentUser} isNewComment={true}/>
    </StyledComments>
  )
}

export default Comments