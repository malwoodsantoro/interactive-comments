import styled from "styled-components";
import React, { useState } from 'react';

const StyledTextbox = styled.div`
  width: ${({ comment }) => !comment ? '30rem' : '36rem'};
  margin: ${({ comment}) => !comment && '10px;'};
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;

  @media (max-width: 480px) {
    width: ${({ comment }) => !comment ? '20rem' : '26rem'};
  }
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

const Textbox = ({ current, comment, addComment, addReply, commentId, replyId, replyingTo, isBottomBox }) => {

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = (e) => {
    if (isBottomBox) {
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
          <img src={require(`../images/avatars/image-${current}.webp`)} alt={'Photo of user ${$current}'} />
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