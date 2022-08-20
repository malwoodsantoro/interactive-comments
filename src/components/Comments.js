import Comment from "./Comment"
import styled from "styled-components";
import Textbox from "./Textbox";

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

const Comments = ({ comments, currentUser }) => {

  return (
    <StyledComments>
      {
        comments.map(({ content, user, index, replies, createdAt }) => {
          return (
            <div>
              <Comment key={index} username={user.username} content={content} createdAt={createdAt} isReply={false} />
              <StyledReplies>
              {replies.length > 0 && replies.map(({ index, user, content, createdAt }) => {
                return (
                  <StyledReply>
                    <Comment key={index} username={user.username} content={content} createdAt={createdAt} currentUser={(currentUser == user.username) ? true : false} isReply={true} />
                  </StyledReply>
                )
              }
              )}
              </StyledReplies>
            </div>
          )
        })
      }
      <Textbox currentUser={currentUser}/>
    </StyledComments>
  )
}

export default Comments