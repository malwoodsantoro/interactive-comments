import styled from "styled-components";
import React, { useState } from 'react';

const StyledTextbox = styled.div`
  width: ${({ comment }) => !comment ? '30rem' : '36rem'};
  margin-left: ${({ comment}) => !comment && '10px;'};
  background-color: #fff;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`

const CurrentUserImg = styled.div`

  > img {
    width: 2rem;
    padding-right: 10px;
  }
`

const ImgAndText = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;
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

const Textbox = ({ user, content, comment, addComment, addReply, isReply, commentId, replyId, replyingTo }) => {

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    if (comment) {
      addComment(text)
    } else {
      addReply(commentId, replyId, text, replyingTo)
    }
    setText("");
  }

  return (
    <StyledTextbox comment={comment}>
      <ImgAndText>
        <CurrentUserImg>
          <img src={require(`../images/avatars/image-juliusomo.webp`)} alt={'Photo of user ${$user}'} />
        </CurrentUserImg>
        <textarea
          type="text"
          value={text}
          placeholder="Add a comment..."
          onChange={handleChange}
        />
        <div>
          <Button onClick={handleSubmit}>Send</Button>
        </div>
      </ImgAndText>
    </StyledTextbox>
  )

}

export default Textbox