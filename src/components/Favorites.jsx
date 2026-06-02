import { useState, useEffect } from "react";

const TIMEZONES = [
  { label: "🇮🇳 India", value: "Asia/Kolkata" },
  { label: "🇬🇧 London", value: "Europe/London" },
  { label: "🇺🇸 New York", value: "America/New_York" },
  { label: "🇺🇸 Los Angeles", value: "America/Los_Angeles" },
  { label: "🇸🇬 Singapore", value: "Asia/Singapore" },
  { label: "🇯🇵 Tokyo", value: "Asia/Tokyo" },
  { label: "🇦🇺 Sydney", value: "Australia/Sydney" },
  { label: "🇩🇪 Berlin", value: "Europe/Berlin" },
];

function Favorites() {
  const [selectedTimezone, setSelectedTimezone] =
    useState("Asia/Kolkata");

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const addFavorite = () => {
    if (favorites.includes(selectedTimezone)) return;

    const updated = [...favorites, selectedTimezone];

    setFavorites(updated);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  };

  const removeFavorite = (timezone) => {
    const updated = favorites.filter(
      (item) => item !== timezone
    );

    setFavorites(updated);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );
  };

  const getTime = (timezone) => {
    return new Date().toLocaleTimeString(
      "en-US",
      {
        timeZone: timezone,
      }
    );
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#1e293b,#0f172a)",
        padding: "25px",
        borderRadius: "24px",
        marginTop: "40px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
        }}
      >
        ⭐ Favorite Timezones
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "25px",
          flexWrap: "wrap",
        }}
      >
        <select
          value={selectedTimezone}
          onChange={(e) =>
            setSelectedTimezone(e.target.value)
          }
        >
          {TIMEZONES.map((tz) => (
            <option
              key={tz.value}
              value={tz.value}
            >
              {tz.label}
            </option>
          ))}
        </select>

        <button onClick={addFavorite}>
          Add
        </button>
      </div>

      {favorites.length === 0 ? (
        <p
          style={{
            textAlign: "center",
          }}
        >
          No favorites added.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
          }}
        >
          {favorites.map((timezone) => (
            <div
              key={timezone}
              style={{
                background:
                  "rgba(255,255,255,0.05)",
                padding: "20px",
                borderRadius: "18px",
                textAlign: "center",
                border:
                  "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3>
                🌍{" "}
                {timezone.split("/")[1] ||
                  timezone}
              </h3>

              <h2
                style={{
                  color: "#38bdf8",
                }}
              >
                {getTime(timezone)}
              </h2>

              <button
                onClick={() =>
                  removeFavorite(timezone)
                }
                style={{
                  marginTop: "10px",
                }}
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;