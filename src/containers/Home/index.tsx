import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { BeatLoader } from "react-spinners";
import Box from "../../components/Box";
import CountryCard from "../../components/CountryCard";
import TextInput from "../../components/TextInput";
import useDebounce from "../../hooks/useDebounce";
import useTypedSelector from "../../hooks/useTypedSelector";
import { countryActions } from "../../store/actions";
import "./styles.css";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { countries, loading, error } = useTypedSelector(
    ({ country }) => country
  );
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearchValue = useDebounce<string>(searchValue, 500);

  useEffect(() => {
    if (debouncedSearchValue === "") {
      dispatch(countryActions.fetchAllCountries());
    }
  }, [dispatch, debouncedSearchValue]);

  useEffect(() => {
    if (debouncedSearchValue) {
      dispatch(
        countryActions.fetchFilteredCountries({
          countryName: debouncedSearchValue,
        })
      );
    }
  }, [dispatch, debouncedSearchValue]);

  const searchCountryHandler = (text: string) => {
    setSearchValue(text);
  };

  const countryItems = countries.map(
    ({ name, region, capital, population, flag }) => {
      return (
        <CountryCard
          key={name}
          name={name}
          region={region}
          capital={capital}
          population={population}
          flagImage={flag}
        />
      );
    }
  );

  return (
    <Box>
      <TextInput
        onChange={searchCountryHandler}
        label="Search:"
        Icon={FaSearch}
      />
      {loading ? (
        <div className="loading">
          <BeatLoader color="#2D3039" size={15} />
        </div>
      ) : (
        <div className="cards">{countryItems}</div>
      )}

      {countryItems.length === 0 && error && (
        <p className="error">No country found!</p>
      )}
    </Box>
  );
};

export default Home;
