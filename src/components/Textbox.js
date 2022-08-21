import styled from "styled-components";
import React, { useState } from 'react';

const StyledTextbox = styled.div`
  width: ${({ isReply }) => isReply ? '30rem' : '36rem'};
  margin-left: ${({ isReply }) => isReply && '10px;'};
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-top: 10px;
`

const CurrentUserImg = styled.div`
  margin: 20px;

  > img {
    width: 2rem;
  }
`

const ImgAndText = styled.div`
  display: flex;
  justify-content: space-between;
`

const Textbox = ({ user, content, comment, addComment, addReply, editComment, isReply, commentId, replyId, editMode }) => {

  const [text, setText] = useState("");
  const [edit, setEdit] = useState(content)

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleEdit = (e) => {
    console.log('handle edit')
    setEdit(e.target.value);
  }

  const handleSubmit = (e) => {
    if (!isReply) {
      addComment(text)
    } else {
      addReply(commentId, replyId, text)
    }
    setText("");
  }


    return (
      <StyledTextbox isReply={isReply}>
        <ImgAndText>
          <CurrentUserImg>
            <img src={require(`../images/avatars/image-juliusomo.webp`)} alt={'Photo of user ${$user}'} />
          </CurrentUserImg>
          {editMode ?
            <textarea
              type="text"
              value={edit}
              placeholder="Add a comment..."
              onChange={handleEdit}
            />
            :
            <textarea
              type="text"
              value={text}
              placeholder="Add a comment..."
              onChange={handleChange}
            />
          }
          <div>
            {editMode ?
              <button onClick={() => editComment(comment, commentId, replyId, text)}>Update</button>
              :
              <button onClick={handleSubmit}>Send</button>

            }
          </div>
        </ImgAndText>
      </StyledTextbox>
    )

  }

  export default Textbox