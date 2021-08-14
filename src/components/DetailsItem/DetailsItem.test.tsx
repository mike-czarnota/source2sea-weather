import pretty from 'pretty';
import { render, screen } from '@testing-library/react';
import DetailsItem from './DetailsItem';

describe('testing DetailsItem.test.tsx', () => {
  it('should render properly with passed props', () => {
    expect(
      pretty(
        render(<DetailsItem label="some label" value="some value" />)
          .baseElement.innerHTML
      )
    ).toMatchSnapshot();

    const label = screen.getByText('some label');
    expect(label).toBeInTheDocument();

    const value = screen.getByText('some value');
    expect(value).toBeInTheDocument();
  });
});
