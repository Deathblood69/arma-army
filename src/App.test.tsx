import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders the get started heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: 'Get started' }),
    ).toBeInTheDocument()
  })

  it('increments the counter on repeated clicks', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: /count is 0/i })

    fireEvent.click(button)
    expect(button).toHaveTextContent('Count is 1')

    fireEvent.click(button)
    expect(button).toHaveTextContent('Count is 2')
  })

  it('renders the hero images', () => {
    render(<App />)
    expect(screen.getByRole('img', { name: 'React logo' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Vite logo' })).toBeInTheDocument()
  })

  it('renders the documentation links', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: 'Documentation' }),
    ).toBeInTheDocument()

    const exploreVite = screen.getByRole('link', { name: /explore vite/i })
    expect(exploreVite).toHaveAttribute('href', 'https://vite.dev/')

    const learnMore = screen.getByRole('link', { name: /learn more/i })
    expect(learnMore).toHaveAttribute('href', 'https://react.dev/')
  })

  it('renders the connect-with-us links', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { name: 'Connect with us' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/vitejs/vite',
    )
    expect(screen.getByRole('link', { name: /discord/i })).toHaveAttribute(
      'href',
      'https://chat.vite.dev/',
    )
    expect(screen.getByRole('link', { name: /x\.com/i })).toHaveAttribute(
      'href',
      'https://x.com/vite_js',
    )
    expect(screen.getByRole('link', { name: /bluesky/i })).toHaveAttribute(
      'href',
      'https://bsky.app/profile/vite.dev',
    )
  })
})
