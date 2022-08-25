import React from 'react'
import { render } from '@testing-library/react'
import Post from "./Post"

describe('Post', () => {
  test('it renders the post props', () => {    
    const props = {
      content: 'This is some sample content',
      username: 'juliusomo',
      isCurrentUser: false, 
      current: true,
      score: 4
    }   
     render(<Post {...props} />)
  })
})