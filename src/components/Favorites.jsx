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

  const [, setTick] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
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
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      }
    );
  };

  const getDate = (timezone) => {
    return new Date().toLocaleDateString(
      "en-US",
      {
        timeZone: timezone,
        weekday: "short",
        month: "short",
        day: "numeric",
      }
    );
  };

  const copyTimezone = (timezone) => {
    navigator.clipboard.writeText(timezone);
    alert("Copied timezone!");
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#1e293b,#0f172a)",
        padding: "30px",
        borderRadius: "24px",
        marginTop: "40px",
        border:
          "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.4)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "25px",
          fontSize: "36px",
        }}
      >
        ⭐ Favorite Timezones
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <select
          value={selectedTimezone}
          onChange={(e) =>
            setSelectedTimezone(e.target.value)
          }
          style={{
            padding: "12px",
            borderRadius: "10px",
          }}
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

        <button
          onClick={addFavorite}
          style={{
            padding: "12px 20px",
            borderRadius: "10px",
            border: "none",
            cursor: "pointer",
            background: "#22c55e",
            color: "white",
            fontWeight: "bold",
          }}
        >
          ➕ Add Favorite
        </button>
      </div>

      {favorites.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "20px",
          }}
        >
          No favorites added.
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          {favorites.map((timezone) => (
            <div
              key={timezone}
              style={{
                background:
                  "rgba(255,255,255,0.05)",
                padding: "25px",
                borderRadius: "20px",
                textAlign: "center",
                border:
                  "1px solid rgba(255,255,255,0.08)",
                transition: "0.3s",
              }}
            >
              <h3
                style={{
                  marginBottom: "15px",
                }}
              >
                🌍{" "}
                {timezone.split("/")[1] ||
                  timezone}
              </h3>

              <h1
                style={{
                  color: "#38bdf8",
                  fontSize: "32px",
                  margin: "0",
                }}
              >
                {getTime(timezone)}
              </h1>

              <p
                style={{
                  color: "#94a3b8",
                  marginTop: "10px",
                }}
              >
                {getDate(timezone)}
              </p>

              <p
                style={{
                  fontSize: "14px",
                  color: "#cbd5e1",
                  marginTop: "10px",
                }}
              >
                {timezone}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  marginTop: "15px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={() =>
                    copyTimezone(timezone)
                  }
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#38bdf8",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  📋 Copy
                </button>

                <button
                  onClick={() =>
                    removeFavorite(timezone)
                  }
                  style={{
                    padding: "8px 14px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#ef4444",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;