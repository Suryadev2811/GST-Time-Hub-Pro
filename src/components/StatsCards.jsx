import { useEffect, useState } from "react";

export default function StatsCards() {
  const [favoritesCount, setFavoritesCount] =
    useState(0);

  const [gstTime, setGstTime] =
    useState("");

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
            timeZone: "Asia/Dubai",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }
        )
      );
    };

    updateGST();

    const interval =
      setInterval(
        updateGST,
        60000
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
              "var(--card)",
            padding: "24px",
            borderRadius: "24px",
            textAlign: "center",
            border:
              "1px solid var(--border)",
            boxShadow:
              "0 10px 30px var(--shadow)",
          }}
        >
          <div
            style={{
              fontSize: "32px",
            }}
          >
            {s.icon}
          </div>

          <h2
            style={{
              margin:
                "10px 0",
              color:
                "#38bdf8",

              fontSize:
                s.label ===
                "Current GST"
                  ? "22px"
                  : "48px",

              fontWeight:
                "700",

              lineHeight:
                "1.1",

              overflowWrap:
                "break-word",
            }}
          >
            {s.value}
          </h2>

          <p
            style={{
              color:
                "var(--secondary)",
              fontSize:
                "18px",
              margin: 0,
            }}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  );
}