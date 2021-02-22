import buildAsyncThunkAction from "../utils/buildAsyncThunkAction";
import {
  CountryActionTypes,
  FETCH_COUNTRIES,
  FETCH_FILTERED_COUNTRIES,
  LOADING_STATUS,
} from "./types";
import * as api from "../../api";
import store from "..";

export const loadingStatus = (isLoading: boolean): CountryActionTypes => {
  return {
    type: LOADING_STATUS,
    payload: {
      loading: isLoading,
    },
  };
};

export const fetchAllCountries = buildAsyncThunkAction<
  void,
  CountryActionTypes
>(async (_, dispatch) => {
  const currentCountryState = store.getState().country;

  // Use cached countries
  if (currentCountryState.allCountriesCache.length > 0) {
    return {
      type: FETCH_COUNTRIES,
      payload: {
        countries: currentCountryState.allCountriesCache,
        error: null,
      },
    };
  }

  dispatch(loadingStatus(true));

  try {
    const result = await api.getAllCountries();
    return {
      type: FETCH_COUNTRIES,
      payload: {
        countries: result.data,
        error: null,
      },
    };
  } catch (error) {
    return {
      type: FETCH_COUNTRIES,
      payload: {
        countries: [],
        error,
      },
    };
  }
});

interface FetchFilteredCountriesProps {
  countryName: string;
}

export const fetchFilteredCountries = buildAsyncThunkAction<
  FetchFilteredCountriesProps,
  CountryActionTypes
>(async ({ countryName }, dispatch) => {
  dispatch(loadingStatus(true));

  try {
    const result = await api.searchCountries(countryName);
    return {
      type: FETCH_FILTERED_COUNTRIES,
      payload: {
        countries: result.data,
        error: null,
      },
    };
  } catch (error) {
    return {
      type: FETCH_FILTERED_COUNTRIES,
      payload: {
        countries: [],
        error,
      },
    };
  }
});
