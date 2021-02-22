import axios from "axios";
import { CountryData } from "../types";

const baseURL = "https://restcountries.eu/rest/v2";

const api = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
});

export const getAllCountries = () => {
  return api.get<CountryData[]>("/all");
};

export const searchCountries = (name: string) => {
  return api.get<CountryData[]>(`/name/${name}`);
};
