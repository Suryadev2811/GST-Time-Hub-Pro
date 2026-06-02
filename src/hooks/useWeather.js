import { useEffect, useState } from "react";
import axios from "axios";

export default function useWeather(lat, lon) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m`
      )
      .then((res) => {
        setWeather(res.data.current);
      })
      .catch((err) => console.log(err));
  }, [lat, lon]);

  return weather;
}