import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Posts from './Posts'

describe('Posts', () => {
  test('It renders a list of posts with their username and content', () => {

    const comment1 =   {
      "id": 1,
      "content": "Incedible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      "createdAt": "1 month ago",
      "score": 12,
      "user": {
        "image": { 
          "png": "./images/avatars/image-amyrobson.png",
          "webp": "./images/avatars/image-amyrobson.webp"
        },
        "username": "amyrobson"
      },
      "replies": []
    }

    const comment2 = {
      "id": 2,
      "content": "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      "createdAt": "2 weeks ago",
      "score": 5,
      "user": {
        "image": { 
          "png": "./images/avatars/image-maxblagun.png",
          "webp": "./images/avatars/image-maxblagun.webp"
        },
        "username": "maxblagun"
      },
      "replies": [
        {
          "id": 3,
          "content": "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          "createdAt": "1 week ago",
          "score": 4,
          "replyingTo": "maxblagun",
          "user": {
            "image": { 
              "png": "./images/avatars/image-ramsesmiron.png",
              "webp": "./images/avatars/image-ramsesmiron.webp"
            },
            "username": "ramsesmiron"
          }
        }
      ]
    }

    const props = {
      comments: [ comment1, comment2 ], 
      currentUser: 'maxblagun'
    }
    const { getByText } = render(<Posts {...props} />)

    const firstCommentNode = getByText(comment1.content)
    const firstAuthorTagNode = getByText(comment1.user.username)
    const secondCommentNode = getByText(comment2.content)
    const secondAuthorTagNode = getByText(comment2.user.username)
    expect(firstCommentNode).toBeDefined()
    expect(firstAuthorTagNode).toBeDefined()
    expect(secondCommentNode).toBeDefined()
    expect(secondAuthorTagNode).toBeDefined()
  })
})