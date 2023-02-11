import axios from "axios";
import React from "react";
import { useState } from "react";
import { cities } from "./cities";

const Search = ({ setData }) => {
  const [location, setLocation] = useState();

  const api = "38665b1c160745a5957152406231002";
  const url = `https://api.weatherapi.com/v1/forecast.json?key=38665b1c160745a5957152406231002&q={location}&days=7&aqi=no&alerts=no`;

  const onSearch = async (event) => {
    setLocation(event.target.value);
    await axios(url).then((res) => setData(res.data.forecast));
  };
  return (
    <div className="search">
      <h1>Weather Forecast</h1>
      <select id="select" value={location} onChange={onSearch}>
        {cities.map((city) => {
          return <option key={city.plaka}>{city.il_adi}</option>;
        })}
      </select>
    </div>
  );
};

export default Search;
