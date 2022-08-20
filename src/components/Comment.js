import styled from "styled-components";
import React, { useState } from 'react';
import Textbox from "./Textbox";

const StyledComment = styled.div`
  width: ${({ isReply }) => isReply ? '30rem' : '36rem'};
  font-size: 16px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;
`;

const ToggleandContent = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
`

const DeleteandEdit = styled.div`
margin-left: auto;
`

const Delete = styled.span`
margin-right: 5px;
`

const Edit= styled.span`
`

const StyledContent = styled.div`
  color: #616469;
`

const Header = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const User = styled.div`
  font-weight: bold;
  margin-left: 10px;
`;

const StyledCreatedAt = styled.div`
 padding-left: 10px;
 color: #616469;
`;

const StyledReply = styled.div`
  margin-left: auto;
  color: hsl(238, 40%, 52%);
  font-weight: bold;
`;

const Comment = ({ content, username, currentUser, current, score, createdAt, isReply, commentId, addReply, comment, replyId, deleteComment, editComment }) => {

  const [count, setCounts] = useState(score)
  const [open, setOpen] = useState(false)

  const replyToComment = () => {
    setOpen(!open)
  }

  return (
    <div>
      <StyledComment isReply={isReply}>
        <ToggleandContent>
          <div>
            <button onClick={() => setCounts(count + 1)}>
              +
            </button>
            <span>{count}</span>
            <button disabled={count <= 0 && true} onClick={() => setCounts(count - 1)}>
              -
            </button>
          </div>
          <div>
            <Header>
              <img src={require(`../images/avatars/image-${username}.webp`)} alt={'Photo of user ${$username}'} />
              <User>{username}</User>
              <StyledCreatedAt>{createdAt}</StyledCreatedAt>
              {!currentUser && <StyledReply onClick={replyToComment}>Reply</StyledReply>}
              {currentUser &&
                <DeleteandEdit>
                  <Delete onClick={() => deleteComment(isReply, commentId, replyId)}>Delete</Delete>
                  <Edit onClick={editComment}>Edit</Edit>
                </DeleteandEdit>
              }
            </Header>
            <StyledContent>
              {content}
            </StyledContent>
          </div>
        </ToggleandContent>
      </StyledComment>
      {open && <Textbox user={current} addReply={addReply} comment={comment} commentId={commentId} replyId={replyId} isReply={true} />}
    </div>
  )
}

export default Comment