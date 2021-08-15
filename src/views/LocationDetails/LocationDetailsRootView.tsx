import { RouteComponentProps } from 'react-router-dom';
import { StaticContext, useHistory } from 'react-router';
import type { QueryResponse } from 'react-fetching-library';
import LocationDetailsContent from './LocationDetailsContent';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import {
  customLocationKey,
  getLocationWeatherKey,
} from '../../constants/localStorage';
import * as routes from '../routes';
import { IWeatherResponse } from '../../api/types/Weather';

interface ILocationDetailsProps
  extends RouteComponentProps<
    {
      locationName: string;
    },
    StaticContext,
    {
      isCustomLocation: boolean;
    }
  > {}

const useGoToHomeWhenWrongLocation = (
  payload: QueryResponse<IWeatherResponse>,
  error: boolean
) => {
  const history = useHistory();

  if (!payload || error) {
    history.replace(routes.DASHBOARD_URL);
  }
};

const LocationDetailsRootView: React.FC<ILocationDetailsProps> = ({
  match: {
    params: { locationName },
  },
  location: {
    state: { isCustomLocation },
  },
}) => {
  const [getItem] = useLocalStorage(
    getLocationWeatherKey(isCustomLocation ? customLocationKey : locationName),
    {}
  );

  const { payload, error } = getItem();

  useGoToHomeWhenWrongLocation(payload, error);

  return <LocationDetailsContent payload={payload} error={error} />;
};

export default LocationDetailsRootView;
