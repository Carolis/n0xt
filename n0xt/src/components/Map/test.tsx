import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map/>', () => {
  it('should render without any marker', () => {
    render(<Map />)
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker at the correct place', () => {
    const place = {
      id: '1',
      name: 'Atibaia',
      slug: 'atibaia',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Bragança Paulista',
      slug: 'braganca paulista',
      location: {
        latitude: 123,
        longitude: -321
      }
    }
    render(<Map places={[place, placeTwo]} />)
    expect(screen.getByTitle(/atibaia/i)).toBeInTheDocument()
    expect(screen.getByTitle(/bragança paulista/i)).toBeInTheDocument()
  })
})
