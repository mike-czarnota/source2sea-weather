import pretty from 'pretty';
import { act, screen } from '@testing-library/react';
import { Client, ClientContextProvider } from 'react-fetching-library';
import { renderWithWrapper } from '../../utils/testUtils';
import CustomLocationCard from './CustomLocationCard';
import { IWeatherResponse } from '../../api/types/Weather';
import { useLocalStorage } from '../../hooks/useLocalStorage';

jest.mock('../../hooks/useLocalStorage', () => ({
  useLocalStorage: jest.fn(),
}));

describe('testing CustomLocationCard.test.tsx', () => {
  it('should fetch data and render correctly', async () => {
    (useLocalStorage as unknown as jest.Mock).mockImplementation(() => {
      const getItem = () => {
        return {
          payload: {
            weather: [
              {
                main: 'Sunny',
              },
            ],
            name: 'Kuala Lumpur',
            main: {
              temp: 900,
              humidity: 901,
              temp_max: 902,
              temp_min: 899,
            },
            sys: {
              sunrise: Date.now(),
              sunset: Date.now(),
            },
            visibility: 2390,
          },
        };
      };

      const setItem = () => {};

      return [getItem, setItem];
    });

    const payload: IWeatherResponse = {
      weather: [
        {
          main: 'Sunny',
        },
      ],
      name: 'Kuala Lumpur',
      main: {
        temp: 100,
        humidity: 101,
        temp_max: 102,
        temp_min: 99,
      },
      sys: {
        sunrise: Date.now(),
        sunset: Date.now(),
      },
      visibility: 2390,
    };

    const client = {
      query: async () => ({
        error: false,
        status: 200,
        payload,
      }),
    };

    jest.useFakeTimers();

    const component = renderWithWrapper(
      <ClientContextProvider client={client as unknown as Client}>
        <CustomLocationCard />
      </ClientContextProvider>
    );

    expect(pretty(component.baseElement.innerHTML)).toMatchSnapshot();

    expect(screen.getByText('Kuala Lumpur')).toBeInTheDocument();
    expect(screen.getByText('900°C')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();

    await act(async () => {
      jest.runAllTimers();
    });

    expect(pretty(component.baseElement.innerHTML)).toMatchSnapshot();

    expect(screen.getByText('Kuala Lumpur')).toBeInTheDocument();
    expect(screen.getByText('100°C')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
  });

  it('should not load when empty', async () => {
    (useLocalStorage as unknown as jest.Mock).mockImplementation(() => {
      const getItem = () => {
        return '';
      };

      const setItem = () => {};

      return [getItem, setItem];
    });

    const payload: IWeatherResponse = {
      weather: [
        {
          main: 'Sunny',
        },
      ],
      name: 'Kuala Lumpur',
      main: {
        temp: 100,
        humidity: 101,
        temp_max: 102,
        temp_min: 99,
      },
      sys: {
        sunrise: Date.now(),
        sunset: Date.now(),
      },
      visibility: 2390,
    };

    const client = {
      query: async () => ({
        error: false,
        status: 200,
        payload,
      }),
    };

    const component = renderWithWrapper(
      <ClientContextProvider client={client as unknown as Client}>
        <CustomLocationCard />
      </ClientContextProvider>
    );

    expect(pretty(component.baseElement.innerHTML)).toMatchSnapshot();

    expect(
      screen.getByPlaceholderText('Where do you want to check the weather?')
    ).toBeInTheDocument();
    expect(screen.getByText('Hit "Enter" to search')).toBeInTheDocument();
  });

  it('should load with error', async () => {
    (useLocalStorage as unknown as jest.Mock).mockImplementation(() => {
      const getItem = () => {
        return {
          payload: {
            name: 'Salt Lake City',
          },
        };
      };

      const setItem = () => {};

      return [getItem, setItem];
    });

    const payload: IWeatherResponse = {
      whatever: false,
    } as unknown as IWeatherResponse;

    const client = {
      query: async () => ({
        error: true,
        status: 200,
        payload,
      }),
    };

    jest.useFakeTimers();

    const component = renderWithWrapper(
      <ClientContextProvider client={client as unknown as Client}>
        <CustomLocationCard />
      </ClientContextProvider>
    );

    expect(pretty(component.baseElement.innerHTML)).toMatchSnapshot();
    expect(
      screen.getByText('Error while loading location:')
    ).toBeInTheDocument();
    expect(screen.getByText('Salt Lake City')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();

    await act(async () => {
      jest.runAllTimers();
    });
  });
});
