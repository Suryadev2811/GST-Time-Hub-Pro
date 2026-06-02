import { useEffect, useState } from "react";
import axios from "axios";

export default function WeatherWidget() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.get(
        "https://api.open-meteo.com/v1/forecast?latitude=17.385&longitude=78.4867&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&daily=sunrise,sunset&timezone=auto"
      );

      setWeather({
        ...res.data.current,
        sunrise: res.data.daily.sunrise[0],
        sunset: res.data.daily.sunset[0],
        updatedAt: new Date().toLocaleTimeString(),
      });
    } catch (err) {
      console.error(err);
      setError("Unable to load weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();

    const interval = setInterval(
      fetchWeather,
      600000
    );

    return () => clearInterval(interval);
  }, []);

  const getWeatherInfo = (code) => {
    if (code === 0)
      return {
        icon: "☀️",
        text: "Clear Sky",
      };

    if ([1, 2, 3].includes(code))
      return {
        icon: "⛅",
        text: "Partly Cloudy",
      };

    if (
      [45, 48].includes(code)
    )
      return {
        icon: "🌫️",
        text: "Foggy",
      };

    if (
      code >= 51 &&
      code <= 67
    )
      return {
        icon: "🌧️",
        text: "Rain",
      };

    if (
      code >= 71 &&
      code <= 77
    )
      return {
        icon: "❄️",
        text: "Snow",
      };

    if (
      code >= 80 &&
      code <= 82
    )
      return {
        icon: "🌦️",
        text: "Rain Showers",
      };

    if (
      code >= 95
    )
      return {
        icon: "⛈️",
        text: "Thunderstorm",
      };

    return {
      icon: "🌤️",
      text: "Weather",
    };
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
        🌦 Hyderabad Live Weather
      </h2>

      {loading ? (
        <p>
          Loading Weather...
        </p>
      ) : error ? (
        <p
          style={{
            color: "#ef4444",
          }}
        >
          {error}
        </p>
      ) : (
        <>
          <h1
            style={{
              fontSize: "60px",
              margin: "0",
            }}
          >
            {
              getWeatherInfo(
                weather.weather_code
              ).icon
            }
          </h1>

          <h2
            style={{
              color: "#fbbf24",
            }}
          >
            {
              getWeatherInfo(
                weather.weather_code
              ).text
            }
          </h2>

          <h1
            style={{
              color: "#38bdf8",
              marginTop: "10px",
              fontSize: "48px",
            }}
          >
            {weather.temperature_2m}°C
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
            }}
          >
            Feels Like{" "}
            {
              weather.apparent_temperature
            }
            °C
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(180px,1fr))",
              gap: "20px",
              marginTop: "25px",
            }}
          >
            <div>
              <h3>
                💧 Humidity
              </h3>
              <p>
                {
                  weather.relative_humidity_2m
                }
                %
              </p>
            </div>

            <div>
              <h3>
                🌬 Wind
              </h3>
              <p>
                {
                  weather.wind_speed_10m
                }
                km/h
              </p>
            </div>

            <div>
              <h3>
                🌅 Sunrise
              </h3>
              <p>
                {weather.sunrise?.slice(
                  11,
                  16
                )}
              </p>
            </div>

            <div>
              <h3>
                🌇 Sunset
              </h3>
              <p>
                {weather.sunset?.slice(
                  11,
                  16
                )}
              </p>
            </div>
          </div>

          <p
            style={{
              color: "#94a3b8",
              marginTop: "20px",
              fontSize: "14px",
            }}
          >
            Updated:{" "}
            {weather.updatedAt}
          </p>

          <button
            onClick={
              fetchWeather
            }
            style={{
              marginTop: "20px",
              padding:
                "12px 20px",
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