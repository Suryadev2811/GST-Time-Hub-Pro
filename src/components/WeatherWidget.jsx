import { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchWeather = () => {
    setLoading(true);

    axios
      .get(
        "https://api.open-meteo.com/v1/forecast?latitude=17.385&longitude=78.4867&current=temperature_2m,relative_humidity_2m,wind_speed_10m"
      )
      .then((res) => {
        setWeather(res.data.current);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const getWeatherIcon = (temp) => {
    if (temp >= 35) return "☀️";
    if (temp >= 25) return "🌤️";
    if (temp >= 15) return "⛅";
    return "☁️";
  };

  const getWeatherText = (temp) => {
    if (temp >= 35) return "Hot";
    if (temp >= 25) return "Pleasant";
    if (temp >= 15) return "Cool";
    return "Cold";
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#1e293b,#0f172a)",
        padding: "30px",
        borderRadius: "24px",
        marginTop: "25px",
        textAlign: "center",
        border:
          "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.4)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        🌤 Hyderabad Weather
      </h2>

      {loading ? (
        <p>Loading Weather...</p>
      ) : (
        <>
          <h1
            style={{
              fontSize: "54px",
              margin: "0",
            }}
          >
            {getWeatherIcon(
              weather.temperature_2m
            )}
          </h1>

          <h1
            style={{
              color: "#38bdf8",
              marginTop: "10px",
            }}
          >
            {weather.temperature_2m}°C
          </h1>

          <p
            style={{
              color: "#fbbf24",
              fontWeight: "bold",
            }}
          >
            {getWeatherText(
              weather.temperature_2m
            )}
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "25px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3>💧 Humidity</h3>
              <p>
                {
                  weather.relative_humidity_2m
                }
                %
              </p>
            </div>

            <div>
              <h3>🌬 Wind</h3>
              <p>
                {weather.wind_speed_10m}
                km/h
              </p>
            </div>
          </div>

          <button
            onClick={fetchWeather}
            style={{
              marginTop: "20px",
              padding:
                "10px 18px",
              borderRadius:
                "10px",
              border: "none",
              background:
                "#38bdf8",
              color: "white",
              cursor:
                "pointer",
              fontWeight:
                "bold",
            }}
          >
            🔄 Refresh
          </button>
        </>
      )}
    </div>
  );
}