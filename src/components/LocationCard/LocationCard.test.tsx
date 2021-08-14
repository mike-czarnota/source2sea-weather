import pretty from 'pretty';
import { screen } from '@testing-library/react';
import LocationCard from './LocationCard';
import { renderWithWrapper } from '../../utils/testUtils';

describe('testing LocationCard.test.tsx', () => {
  it('should render', () => {
    expect(
      pretty(
        renderWithWrapper(
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
