import styled from "styled-components";
import React, { useState } from 'react';
import Textbox from "./Textbox";
import Counter from "./Counter";

import { BsFillReplyFill } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";

import Modal from './Modal'
import useModal from './useModal';

const StyledPost = styled.div`
  width: ${({ comment }) => !comment ? '30rem' : '36rem'};
  font-size: 16px;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  margin: 10px;

  @media (max-width: 480px) {
    width: ${({ comment }) => !comment ? '20rem' : '26rem'};
  }
`;

const ToggleandContent = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
  }
`

const DeleteandEdit = styled.div`
  margin-left: auto;
  color: hsl(238, 40%, 52%);
  font-weight: bold;
  display: flex;
  margin-left: -80px;
`

const Delete = styled.span`
  margin-right: 10px;
  color: hsl(358, 79%, 66%);
  font-weight: bold;
  display: flex;
  justify-content: center;
`

const StyledContent = styled.div`
  color: #616469;
  display: flex;
  text-align: left;
  margin-top: 20px;
`

const EditMode = styled.span`
  display: flex;
  justify-content: space-around;
  flex-grow: 1;
}
`

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

const UserandCreated = styled.div`
    display: flex;
    align-items: center;

    > img {
      width: 2rem;
    }

`

const HeaderandContent = styled.span`
@media (min-width: 481px) {
  flex-grow: 1;
}

  margin-right: auto;
}
`;

const StyledReply = styled.div`
  margin-left: auto;
  color: hsl(238, 40%, 52%);
  font-weight: bold;
  display: flex;
  margin-left: -40px;
`;

const StyledEdit = styled.span`
  color: hsl(238, 40%, 52%);
  font-weight: bold;
  display: flex;
`;

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

const Buttons = styled.div`
  @media (min-width: 481px) {
    order: 3;
    align-self: start;
  }

  @media (max-width: 480px) {
   align-self: flex-end;
   margin-top: 10px;
   margin-bottom: -20px;
  }
`


const Post = ({ content, username, isCurrentUser, current, score, createdAt, commentId, addReply, comment, replyId, deletePost, editComment, replyingTo, addComment }) => {

  const [open, setOpen] = useState(false)
  const [editedContent, setEditedContent] = useState(content)
  const [editMode, setEditMode] = useState(false)

  const { isShowing, toggle } = useModal();

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
          <Counter score={score} />
          <Buttons>
            {!isCurrentUser && <StyledReply onClick={replyToComment}><BsFillReplyFill /> Reply</StyledReply>}
            {isCurrentUser &&
              <DeleteandEdit>
                <Delete onClick={toggle}><BsTrashFill />Delete</Delete>
                <StyledEdit onClick={() => editContent(comment, commentId, replyId)}><BsPencil /> Edit</StyledEdit>
              </DeleteandEdit>
            }
          </Buttons>
          <HeaderandContent>
            <UserandCreated>
              <img src={require(`../images/avatars/image-${username}.webp`)} alt={'Photo of user ${$username}'} />
              <User>{username}</User>
              <StyledCreatedAt>{createdAt}</StyledCreatedAt>
            </UserandCreated>
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
      {open && <Textbox content={content} current={current} addReply={addReply} comment={comment} commentId={commentId} replyId={replyId} replyingTo={username} addComment={addComment} />}
      <Modal
        isShowing={isShowing}
        hide={toggle}
        yesAction={() => deletePost(comment, commentId, replyId)}
      />
    </Full>
  )
}

export default Post