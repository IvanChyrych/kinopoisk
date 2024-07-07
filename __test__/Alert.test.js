import { expect, jest, test } from '@jest/globals'
import { render, fireEvent, screen } from '@testing-library/react'
import { Alert } from '../src/components/alert/index'

test('Test Alert', () => {
  const content = 'The Form has empty fields!'
  const type = 'danger'
  const { getByText } = render(<Alert type={type}>{content}</Alert>)

  const alertElement = getByText(content)

  expect(alertElement).toBeInTheDocument()
  expect(alertElement).toHaveTextContent(content)
  expect(alertElement).toHaveClass(`alert-${type}`)
})
