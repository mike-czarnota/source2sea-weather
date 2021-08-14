import pretty from 'pretty';
import { render, screen } from '@testing-library/react';
import LocationCard from './LocationCard';

describe('testing LocationCard.test.tsx', () => {
  it('should render', () => {
    expect(
      pretty(
        render(
          <LocationCard name="some random name" temperatureInCelsius={23} />
        ).baseElement.innerHTML
      )
    ).toMatchSnapshot();

    const locationName = screen.getByText('some random name');
    expect(locationName).toBeInTheDocument();

    const temperature = screen.getByText('23°C');
    expect(temperature).toBeInTheDocument();
  });
});
