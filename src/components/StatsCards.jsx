import { useEffect, useState } from "react";

export default function StatsCards() {
  const [favoritesCount, setFavoritesCount] =
    useState(0);

  const [gstTime, setGstTime] = useState("");

  useEffect(() => {
    const favorites =
      JSON.parse(
        localStorage.getItem("favorites")
      ) || [];

    setFavoritesCount(
      favorites.length
    );

    const updateGST = () => {
      const now = new Date();

      setGstTime(
        now.toLocaleTimeString(
          "en-US",
          {
            timeZone:
              "Asia/Dubai",
            hour: "2-digit",
            minute: "2-digit",
          }
        )
      );
    };

    updateGST();

    const interval =
      setInterval(
        updateGST,
        1000
      );

    return () =>
      clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: "🌎",
      label: "Timezones",
      value: "597",
    },

    {
      icon: "🌍",
      label: "Countries",
      value: "195+",
    },

    {
      icon: "⭐",
      label: "Favorites",
      value:
        favoritesCount,
    },

    {
      icon: "⏰",
      label: "Current GST",
      value: gstTime,
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
        gap: "20px",
        margin: "40px 0",
      }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          style={{
            background:
              "linear-gradient(145deg,#1e293b,#0f172a)",
            padding: "25px",
            borderRadius: "24px",
            textAlign: "center",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.4)",
            border:
              "1px solid rgba(255,255,255,0.08)",
            transition:
              "all 0.3s ease",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              fontSize: "32px",
            }}
          >
            {s.icon}
          </div>

          <h1
            style={{
              margin:
                "10px 0",
              color:
                "#38bdf8",
            }}
          >
            {s.value}
          </h1>

          <p
            style={{
              color:
                "#cbd5e1",
              fontSize:
                "18px",
            }}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}