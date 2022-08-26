import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import Post from "./Post"

describe('Comment and reply renders as expected', () => {
  
  test('it renders comment as expected', () => {
    const props = {
      content: 'This is some sample content',
      username: 'ramsesmiron',
      isCurrentUser: false,
      current: 'ramsesmiron',
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
    expect(image).toHaveAttribute('src', 'image-ramsesmiron.webp')
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

describe('User interaction with post functions as expected', () => {
  test('reply toggle works', () => {
    const props = {
      content: 'This is some sample content',
      username: 'ramsesmiron',
      isCurrentUser: false,
      current: 'ramsesmiron',
      score: 4
    }

    const { getByText } = render(<Post {...props} />)
    const replyLink = getByText('Reply')

    fireEvent.click(replyLink)

    expect(screen.getByPlaceholderText(/Add a comment/)).toBeInTheDocument()

  })

})