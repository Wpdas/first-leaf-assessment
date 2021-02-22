import React from "react";
import useModal from "../../hooks/useModal";
import "./styles.css";

interface CountryCardProps {
  name: string;
  region: string;
  capital: string;
  population: number;
  flagImage: string;
}

const CountryCard: React.FC<CountryCardProps> = ({
  name,
  region,
  capital,
  population,
  flagImage,
}) => {
  const { showModal } = useModal();

  const onClickCardHandler = () => {
    showModal({
      name,
      region,
      capital,
      population,
      flagImage,
    });
  };

  return (
    <div onClick={onClickCardHandler} className="country-card">
      <h4 className="country-card-title">{name}</h4>
      <div className="country-card-content">
        <img className="country-card-flag" src={flagImage} alt="Country Flag" />
      </div>
    </div>
  );
};

export default CountryCard;
