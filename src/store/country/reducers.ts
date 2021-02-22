import {
  CountryActionTypes,
  CountryState,
  FetchCountriesPayload,
  FETCH_COUNTRIES,
  FETCH_FILTERED_COUNTRIES,
  LoadingStatusPayload,
  LOADING_STATUS,
} from "./types";

export const initialState: CountryState = {
  countries: [],
  allCountriesCache: [],
  error: null,
  loading: false,
};

const loadingStatusCase = (
  state: CountryState,
  payload: LoadingStatusPayload
) => {
  return {
    ...state,
    ...payload,
  };
};

const fetchCountriesCase = (
  state: CountryState,
  payload: FetchCountriesPayload
) => {
  return {
    ...state,
    countries: payload.countries,
    allCountriesCache: payload.countries,
    error: payload.error,
    loading: false,
  };
};

const fetchFilteredCountriesCase = (
  state: CountryState,
  payload: FetchCountriesPayload
) => {
  return {
    ...state,
    countries: payload.countries,
    error: payload.error,
    loading: false,
  };
};

export const countryReducer = (
  state = initialState,
  action: CountryActionTypes
): CountryState => {
  switch (action.type) {
    case LOADING_STATUS:
      return loadingStatusCase(state, action.payload);
    case FETCH_COUNTRIES:
      return fetchCountriesCase(state, action.payload);
    case FETCH_FILTERED_COUNTRIES:
      return fetchFilteredCountriesCase(state, action.payload);
    default:
      return state;
  }
};
