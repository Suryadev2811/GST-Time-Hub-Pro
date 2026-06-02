import { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=17.385&longitude=78.4867&current=temperature_2m,relative_humidity_2m"
      )
      .then((res) => {
        setWeather(res.data.current);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#1e293b,#0f172a)",
        padding: "25px",
        borderRadius: "24px",
        marginTop: "25px",
        textAlign: "center",
        border:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2>🌤 Hyderabad Weather</h2>

      {weather ? (
        <>
          <h1
            style={{
              color: "#38bdf8",
            }}
          >
            {weather.temperature_2m}°C
          </h1>

          <p>
            Humidity:{" "}
            {weather.relative_humidity_2m}%
          </p>
        </>
      ) : (
        <p>Loading Weather...</p>
      )}
    </div>
  );
}