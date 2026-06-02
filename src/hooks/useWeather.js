import { useEffect, useState } from "react";
import axios from "axios";

export default function useWeather(lat, lon) {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const cacheKey = `weather_${lat}_${lon}`;

    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      const parsed = JSON.parse(cached);

      const age =
        Date.now() - parsed.timestamp;

      if (age < 600000) {
        setWeather(parsed.data);
        return;
      }
    }

    axios
      .get(
        `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&daily=sunrise,sunset&timezone=auto`
      )
      .then((res) => {
        const weatherData = {
          ...res.data.current,
          sunrise:
            res.data.daily?.sunrise?.[0],
          sunset:
            res.data.daily?.sunset?.[0],
          updatedAt:
            new Date().toLocaleTimeString(),
        };

        setWeather(weatherData);

        localStorage.setItem(
          cacheKey,
          JSON.stringify({
            timestamp: Date.now(),
            data: weatherData,
          })
        );
      })
      .catch((err) => {
        console.error(err);

        if (cached) {
          const parsed =
            JSON.parse(cached);

          setWeather(parsed.data);
        }
      });
  }, [lat, lon]);

  return weather;
}