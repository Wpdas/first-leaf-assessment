import { CountryData } from "../../types";

export type CountryState = {
  countries: CountryData[];
  allCountriesCache: CountryData[];
  error: Error | null;
  loading: boolean;
};

export const LOADING_STATUS = "country/loadingStatus";
export const FETCH_COUNTRIES = "country/fetchCountries";
export const FETCH_FILTERED_COUNTRIES = "country/fetchFilteredCountries";

export interface LoadingStatusPayload {
  loading: boolean;
}

export interface LoadingStatusAction {
  type: typeof LOADING_STATUS;
  payload: LoadingStatusPayload;
}

export interface FetchCountriesPayload {
  countries: CountryData[];
  error: Error | null;
}

export interface FetchCountriesAction {
  type: typeof FETCH_COUNTRIES;
  payload: FetchCountriesPayload;
}

export interface FetchFilteredCountriesPayload {
  countries: CountryData[];
  error: Error | null;
}

export interface FetchFilteredCountriesAction {
  type: typeof FETCH_FILTERED_COUNTRIES;
  payload: FetchCountriesPayload;
}

export type CountryActionTypes =
  | LoadingStatusAction
  | FetchCountriesAction
  | FetchFilteredCountriesAction;
