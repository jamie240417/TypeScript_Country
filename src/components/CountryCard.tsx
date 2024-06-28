import React from "react";
import { Country } from "../types/country";

interface CountryCardProps {
  country: Country;
  handleSelectCountry: (country: Country) => void;
}

const CountryCard: React.FC<CountryCardProps> = ({ country, handleSelectCountry }) => {
  return (
    <div style={styles.card} onClick={() => handleSelectCountry(country)} className="country-card">
      <img src={country.flags.svg} style={styles.image} alt={`${country.name.common} flag`} />
      <h3 style={{ fontSize: "22px" }}>{country.name.common}</h3>
    </div>
  );
};

const styles = {
  card: {
    width: "350px",
    height: "180px",
    border: "1px solid #585858",
    borderRadius: "14px",
    margin: "8px",
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s",
    cursor: "pointer",
  } as React.CSSProperties,
  image: {
    width: "50px",
    height: "50px",
  } as React.CSSProperties,
};

const containerStyle = document.createElement("style");
containerStyle.innerHTML = `
  .country-card:hover {
    background-color: #cccccc;
  }
`;
document.head.appendChild(containerStyle);

export default CountryCard;
