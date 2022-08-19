import Comment from "./Comment"

const Comments = ({ comments }) => {

  return (
    <div>
      {
        comments.map(({ content, user, index, replies }) => {
          //Create comment component
          return (
            <div>
              <Comment key={index} username={user.username} content={content} />
              {replies.length > 0 ? (<div> replies </div>) : (<div>none</div>)}
            </div>
          )
        })
      }
    </div>
  )
}

export default Comments