import { expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Password } from '../src/components/password/index'

test('Test Password', () => {
  const content = 'Password'

  const { unmount } = render(<Password >{content}</Password >)

  const inputElement = screen.getByPlaceholderText(content)
  const passwordElement = screen.getByRole('test')

  expect(passwordElement).toBeInTheDocument()
  expect(inputElement.tagName).toBe('INPUT')
  expect(inputElement).toHaveClass('form-control')

  unmount()
})
