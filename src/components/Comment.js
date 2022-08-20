import styled from "styled-components";
import React, {useState} from 'react';

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

const Comment = ({ content, username, currentUser, createdAt, isReply }) => {

  const [count, setCounts] = useState(4)

  return (
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
          {currentUser && <div>Current user</div>}
          <Header>
            <img src={require(`../images/avatars/image-${username}.webp`)} alt={'Photo of user ${$username}'} />
            <User>{username}</User>
            <StyledCreatedAt>{createdAt}</StyledCreatedAt>
            <StyledReply>Reply</StyledReply>
          </Header>
          <StyledContent>
            {content}
          </StyledContent>
        </div>
      </ToggleandContent>
    </StyledComment>
  )
}

export default Comment