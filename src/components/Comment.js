const Comment = ({ content, username }) => {

  return (
    <div>
      <h3>{username}</h3>
      <p>
        {content}
      </p>
    </div>
  )
}

export default Comment