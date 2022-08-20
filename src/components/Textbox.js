import styled from "styled-components";
import React, { useState } from 'react';

const StyledTextbox = styled.div`
  width: 36rem;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  margin-top: 10px;
`

const CurrentUserImg = styled.div`
  margin: 20px;
`

const ImgAndText = styled.div`
display: flex;
`

const Textbox = ({ currentUser }) => {

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  }

  return (
    <StyledTextbox>
      <ImgAndText>
        <CurrentUserImg>
          <img src={require(`../images/avatars/image-${currentUser}.webp`)} alt={'Photo of user ${$username}'} />
        </CurrentUserImg>
        <textarea
          cols="50" rows="3"
          type="text"
          value={text}
          placeholder="Add a comment..."
          onChange={handleChange}
        />

        <div>
          <button>Send</button>
        </div>
      </ImgAndText>
    </StyledTextbox>
  )

}

export default Textbox