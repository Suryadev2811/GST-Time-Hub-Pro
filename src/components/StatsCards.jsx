export default function StatsCards() {
  const stats = [
    ["🌎 Timezones", "597"],
    ["🌍 Countries", "195+"],
    ["⭐ Favorites", "∞"],
    ["⚡ Live Sync", "24/7"],
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
          key={s[0]}
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
          }}
        >
          <h1
            style={{
              margin: 0,
              color: "#38bdf8",
            }}
          >
            {s[1]}
          </h1>

          <p
            style={{
              marginTop: "10px",
              color: "#cbd5e1",
              fontSize: "18px",
            }}
          >
            {s[0]}
          </p>
        </div>
      ))}
    </div>
  );
}