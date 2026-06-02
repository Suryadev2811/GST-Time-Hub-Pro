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
        text: "Clear",
      };

    if ([1, 2, 3].includes(code))
      return {
        icon: "⛅",
        text: "Cloudy",
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
        text: "Storm",
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
        background: "var(--card)",
        color: "var(--text)",
        padding: "24px",
        borderRadius: "24px",
        textAlign: "center",
        border:
          "1px solid var(--border)",
        boxShadow:
          "0 10px 40px var(--shadow)",
      }}
    >
      <h2>
        {city.flag} {city.name}
      </h2>

      {!weather ? (
        <div>
          <h3>
            🌤 Weather
            Unavailable
          </h3>

          <p
            style={{
              color:
                "var(--secondary)",
            }}
          >
            Cached data unavailable
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
              marginBottom: "8px",
            }}
          >
            {weather.temperature_2m}°C
          </h1>

          <p
            style={{
              color:
                "var(--secondary)",
              marginBottom: "0",
            }}
          >
            Feels Like{" "}
            {
              weather.apparent_temperature
            }
            °C
          </p>
        </>
      )}

      <h1
        style={{
          color: "#38bdf8",
          marginTop: "18px",
          fontSize: "32px",
        }}
      >
        {time}
      </h1>

      <p
        style={{
          color:
            "var(--secondary)",
        }}
      >
        {date}
      </p>

      <p
        style={{
          color:
            statusMap[status]
              ?.color,
          fontWeight: "bold",
          fontSize: "18px",
          marginTop: "10px",
        }}
      >
        {
          statusMap[status]
            ?.text
        }
      </p>
    </div>
  );
}