import React from "react";
import { getConuntries } from "../api/countries";
import { Country } from "../types/country";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const [countries, setCountries] = React.useState<Country[]>([]);
  const [selectedCountries, setSelectedCountries] = React.useState<Country[]>([]);

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getConuntries();
        setCountries(data);
      } catch (error) {
        alert("데이터를 불러오는 중 에러가 발생했습니다.");
      }
    };
    fetchCountries();
  }, []);

  const handleSelectCountry = (country: Country): void => {
    if (!selectedCountries.find((selectedCountry: Country) => 
      selectedCountry.name.common === country.name.common)) {
      setSelectedCountries([...selectedCountries, country]);
      setCountries(countries.filter((c: Country) => c.name.common !== country.name.common));
    } else {
      setSelectedCountries(selectedCountries.filter(
        (selectedCountry: Country) => 
        selectedCountry.name.common !== country.name.common));
      setCountries([...countries, country]);
    }
  };

  console.log("countries:", countries);
  return (
    <>
      <div>
        <h1>선택된 목록</h1>
        <div style={styles.grid}>
          {selectedCountries.map((country: Country) => {
            return (
              <CountryCard 
                key={country.name.common} 
                country={country} 
                handleSelectCountry={handleSelectCountry} 
              />
            );
          })}
        </div>
      </div>
      <div>
        <h1>나라 목록</h1>
        <div style={styles.grid}>
          {countries.map((country: Country) => {
            return (
              <CountryCard 
                key={country.name.common} 
                country={country} 
                handleSelectCountry={handleSelectCountry} 
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '8px',
  },
};

export default CountryList;