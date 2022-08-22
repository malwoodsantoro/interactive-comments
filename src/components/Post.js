import styled from "styled-components";
import React, { useState } from 'react';
import Textbox from "./Textbox";

const StyledComment = styled.div`
  width: ${({ comment }) => !comment ? '30rem' : '36rem'};
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

const Edit = styled.span`
`

const StyledContent = styled.div`
  color: #616469;
  display: flex;
  text-align: left;
`

const Header = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;

  
  > img {
    width: 2rem;
  }
`;

const User = styled.div`
  font-weight: bold;
  margin-left: 10px;
`;

const StyledCreatedAt = styled.div`
 padding-left: 10px;
 color: #616469;
`;

const ReplyTo = styled.span`
  color: hsl(238, 40%, 52%);
  font-weight: bold;
`;

const StyledReply = styled.div`
  margin-left: auto;
  color: hsl(238, 40%, 52%);
  font-weight: bold;
`;

const CounterButton = styled.button`
  padding: 0;
  border: none;
  background: none; 
  padding: 5px;
  color: hsl(238, 40%, 52%);
`

const Toggle = styled.div`
  background-color: hsl(223, 19%, 93%);
  padding: 10px;
  border-radius: 3px;
  margin-right: 10px;
  color: hsl(238, 40%, 52%);
  font-weight: bold;
`

const Post = ({ content, username, currentUser, current, score, createdAt, isReply, commentId, addReply, comment, replyId, deletePost, editComment, replyTo }) => {

  const [count, setCounts] = useState(score)
  const [open, setOpen] = useState(false)
  const [editedContent, setEditedContent] = useState(content)
  const [editMode, setEditMode] = useState(false)

  const replyToComment = () => {
    setOpen(!open)
  }

  const editContent = () => {
    setEditMode(true);
  }

  const handleEdit = (e) => {
    setEditedContent(e.target.value);
  }

  const handleUpdate = (e) => {
     editComment(comment, editedContent, commentId, replyId);
     setEditMode(false);
  }

  return (
    <div>
      <StyledComment comment={comment}>
        <ToggleandContent>
          <Toggle>
            <CounterButton onClick={() => setCounts(count + 1)}>
              +
            </CounterButton>
            <span>{count}</span>
            <CounterButton disabled={count <= 0 && true} onClick={() => setCounts(count - 1)}>
              -
            </CounterButton>
          </Toggle>
          <div>
            <Header>
              <div>{replyId}</div>
              <img src={require(`../images/avatars/image-${username}.webp`)} alt={'Photo of user ${$username}'} />
              <User>{username}</User>
              <StyledCreatedAt>{createdAt}</StyledCreatedAt>
              {!currentUser && <StyledReply onClick={replyToComment}>Reply</StyledReply>}
              {currentUser &&
                <DeleteandEdit>
                  <Delete onClick={() => deletePost(isReply, commentId, replyId)}>Delete</Delete>
                  <Edit onClick={() => editContent(comment, commentId, replyId)}>Edit</Edit>
                </DeleteandEdit>
              }
            </Header>
            <StyledContent>
              {editMode ?
                <span>
                  <textarea
                    type="text"
                    value={editedContent}
                    placeholder="Add a comment..."
                    onChange={handleEdit}
                  />
                  <button onClick={handleUpdate}>Update</button>
                </span>
                : !comment ? <span><ReplyTo>@{replyTo} </ReplyTo>{content}</span> : <span>{content}</span>}
            </StyledContent>
          </div>
        </ToggleandContent>
      </StyledComment>
      {open && <Textbox content={content} user={current} addReply={addReply} comment={comment} commentId={commentId} replyId={replyId} isReply={true} />}
    </div>
  )
}

export default Post