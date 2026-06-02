import useWeather from "../hooks/useWeather";

export default function CityCard({
  city,
  time,
  date,
  status,
}) {
  const weather = useWeather(
    city.lat,
    city.lon
  );

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

    if ([45, 48].includes(code))
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
        text: "Showers",
      };

    if (code >= 95)
      return {
        icon: "⛈️",
        text: "Thunderstorm",
      };

    return {
      icon: "🌤️",
      text: "Weather",
    };
  };

  const statusMap = {
    open: {
      color: "#22c55e",
      text: "🟢 Open",
    },

    closing: {
      color: "#f59e0b",
      text: "🟡 Closing Soon",
    },

    closed: {
      color: "#ef4444",
      text: "🔴 Closed",
    },

    weekend: {
      color: "#94a3b8",
      text: "⚫ Weekend",
    },
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#1e293b,#0f172a)",
        padding: "28px",
        borderRadius: "24px",
        textAlign: "center",
        border:
          "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.4)",
        transition:
          "transform 0.3s ease",
      }}
    >
      <h2>
        {city.flag} {city.name}
      </h2>

      {!weather ? (
        <div>
          <h3>🌤️ Weather Unavailable</h3>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Using cached data...
          </p>
        </div>
      ) : (
        <>
          <h2>
            {
              getWeatherInfo(
                weather.weather_code
              ).icon
            }{" "}
            {
              getWeatherInfo(
                weather.weather_code
              ).text
            }
          </h2>

          <h1
            style={{
              color: "#38bdf8",
              marginBottom: "10px",
            }}
          >
            {weather.temperature_2m}°C
          </h1>

          <p>
            🤒 Feels Like{" "}
            {
              weather.apparent_temperature
            }
            °C
          </p>

          <p>
            💧{" "}
            {
              weather.relative_humidity_2m
            }
            %
          </p>

          <p>
            🌬️{" "}
            {
              weather.wind_speed_10m
            }
            km/h
          </p>

          <p>
            🌅{" "}
            {weather.sunrise?.slice(
              11,
              16
            )}
          </p>

          <p>
            🌇{" "}
            {weather.sunset?.slice(
              11,
              16
            )}
          </p>
        </>
      )}

      <h1
        style={{
          color: "#38bdf8",
          marginTop: "20px",
        }}
      >
        {time}
      </h1>

      <p>{date}</p>

      <p
        style={{
          color:
            statusMap[status]?.color,
          fontWeight: "bold",
          fontSize: "18px",
          marginTop: "12px",
        }}
      >
        {
          statusMap[status]?.text
        }
      </p>
    </div>
  );
}