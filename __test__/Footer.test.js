import { expect, test } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import { Footer } from '../src/components/footer/index'

test('Test Footer', () => {
  const content = '©2022 Blogfolio'
  const contentRights = 'All rights reserved'

  const { unmount } = render(<Footer />)

  const discriptionElement = screen.getByText(content)
  const discriptionRightsElement = screen.getByText(contentRights)

  const footerElement = document.querySelector('.footer')
  const footerContainerElement = document.querySelector('.text-body-secondary')

  expect(footerElement).toBeInTheDocument()
  expect(footerContainerElement).toBeInTheDocument()
  expect(discriptionElement).toBeInTheDocument()
  expect(discriptionRightsElement).toBeInTheDocument()

  expect(footerContainerElement).toHaveClass('text-body-secondary')
  expect(footerElement.tagName).toBe('FOOTER')

  unmount()
})
