import React from 'react'
import { render } from '@testing-library/react'
import {screen} from '@testing-library/dom'
import Post from "./Post"

describe('Post', () => {
  test('it renders comment as expected', () => {    
    const props = {
      content: 'This is some sample content',
      username: 'juliusomo',
      isCurrentUser: false, 
      current: true,
      score: 4
    }   

    const { getByText } = render(<Post {...props} />)
    
    const contentNode = getByText(props.content)
    const usernameNode = getByText(props.username)
    const replyLink = getByText('Reply')

    expect(contentNode).toBeDefined()
    expect(usernameNode).toBeDefined()
    expect(replyLink).toBeDefined()

    const image = screen.getByAltText(/Photo of user/);
    
    expect(image.src).toContain('image-');
    expect(image).toHaveAttribute('src', 'image-juliusomo.webp')
  })

  test('it renders reply as expected', () => {
    const props = {
      content: 'This is some sample content',
      username: 'ramsesmiron',
      isCurrentUser: false, 
      current: true,
      replyingTo: 'maxblagun',
      score: 4,
      comment: false
    }   

    const { getByText } = render(<Post {...props} />)

    const contentNode = getByText(props.content)
    const usernameNode = getByText(props.username)
    const replyLink = getByText('Reply')

    expect(contentNode).toBeDefined()
    expect(usernameNode).toBeDefined()
    expect(replyLink).toBeDefined()

    const image = screen.getByAltText(/Photo of user/);
    
    expect(image.src).toContain('image-');
    expect(image).toHaveAttribute('src', 'image-ramsesmiron.webp')
    
    const reply = props.replyingTo;
    expect(contentNode).toHaveTextContent(`${reply}`)

  })


})