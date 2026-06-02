import useWeather from "../hooks/useWeather";

export default function CityCard({
  city,
  time,
  date,
  working,
}) {
  const weather = useWeather(
    city.lat,
    city.lon
  );

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#1e293b,#0f172a)",
        padding: "30px",
        borderRadius: "24px",
        textAlign: "center",
        border:
          "1px solid rgba(255,255,255,0.1)",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.4)",
      }}
    >
      <h2>
        {city.flag} {city.name}
      </h2>

      {weather ? (
        <>
          <p
            style={{
              color: "#fbbf24",
              fontSize: "18px",
            }}
          >
            🌤️ {weather.temperature_2m}°C
          </p>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Humidity:{" "}
            {weather.relative_humidity_2m}%
          </p>
        </>
      ) : (
        <p>Loading Weather...</p>
      )}

      <h1
        style={{
          color: "#38bdf8",
        }}
      >
        {time}
      </h1>

      <p>{date}</p>

      <p
        style={{
          color: working
            ? "#22c55e"
            : "#ef4444",
          fontWeight: "bold",
        }}
      >
        {working
          ? "🟢 Office Open"
          : "🔴 Office Closed"}
      </p>
    </div>
  );
}