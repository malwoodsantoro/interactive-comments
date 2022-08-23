import styled from "styled-components";
import React, { useState } from 'react';
import Textbox from "./Textbox";
import { BsFillReplyFill } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

const StyledPost = styled.div`
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
  margin-right: 10px;
  color: hsl(358, 79%, 66%);
  font-weight: bold;
`

const StyledContent = styled.div`
  color: #616469;
  display: flex;
  text-align: left;
`

const EditMode = styled.span`
  display: flex;
  justify-content: space-around;
  flex-grow: 3;
`

const Header = styled.div`
  display: flex;
  padding: 10px;

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

const HeaderandContent = styled.span`
  flex-grow: 3;
`;
const StyledReply = styled.div`
  margin-left: auto;
  color: hsl(238, 40%, 52%);
  font-weight: bold;
`;

const StyledEdit = styled.span`
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
  display: flex;
  flex-direction: column;
  background-color: hsl(223, 19%, 93%);
  padding: 10px;
  border-radius: 3px;
  margin-right: 10px;
  color: hsl(238, 40%, 52%);
  font-weight: bold;
`

const Button = styled.button`
  background: hsl(238, 40%, 52%);
  border-radius: 3px;
  border: none;
  color: white;
  font-size: 1em;
  padding: 0.5em 1.5em;
  text-transform: uppercase;
`;

const Full = styled.div`
display: flex;
flex-direction: column;
`

const Post = ({ content, username, currentUser, current, score, createdAt, isReply, commentId, addReply, comment, replyId, deletePost, editComment, replyingTo, addComment }) => {

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
    <Full>
      <StyledPost comment={comment}>
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
          <HeaderandContent>
            <Header>
              <img src={require(`../images/avatars/image-${username}.webp`)} alt={'Photo of user ${$username}'} />
              <User>{username}</User>
              <StyledCreatedAt>{createdAt}</StyledCreatedAt>
              {!currentUser && <StyledReply onClick={replyToComment}><BsFillReplyFill /> Reply</StyledReply>}
              {currentUser &&
                <DeleteandEdit>
                  <Delete onClick={() => deletePost(comment, commentId, replyId)}><BsTrashFill />Delete</Delete>
                  <StyledEdit onClick={() => editContent(comment, commentId, replyId)}><BsPencil/> Edit</StyledEdit>
                </DeleteandEdit>
              }
            </Header>
            <StyledContent>
              {editMode ?
                <EditMode className="editttt">
                  <div>
                    <textarea
                      type="text"
                      value={editedContent}
                      placeholder="Add a comment..."
                      onChange={handleEdit}
                    />
                  </div>
                  <div>
                    <Button onClick={handleUpdate}>Update</Button>
                  </div>
                </EditMode>
                : !comment ? <span><ReplyTo>@{replyingTo} </ReplyTo>{content}</span> : <span>{content}</span>}
            </StyledContent>
          </HeaderandContent>
        </ToggleandContent>
      </StyledPost>
      {open && <Textbox content={content} user={current} addReply={addReply} comment={comment} commentId={commentId} replyId={replyId} replyingTo={username} addComment={addComment} />}
    </Full>
  )
}

export default Post