export default function MeetingPlanner() {
  const zones = [
    {
      name: "🇮🇳 India",
      zone: "Asia/Kolkata",
    },
    {
      name: "🇦🇪 Dubai",
      zone: "Asia/Dubai",
    },
    {
      name: "🇬🇧 London",
      zone: "Europe/London",
    },
  ];

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#1e293b,#0f172a)",
        padding: "30px",
        borderRadius: "24px",
        textAlign: "center",
      }}
    >
      <h2>🤝 Smart Meeting Planner</h2>

      <p>
        Recommended Meeting Window
      </p>

      <h1
        style={{
          color: "#22c55e",
        }}
      >
        2:00 PM GST
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {zones.map((z) => (
          <div key={z.name}>
            <h3>{z.name}</h3>
          </div>
        ))}
      </div>

      <h3
        style={{
          color: "#38bdf8",
        }}
      >
        Meeting Score: 92%
      </h3>
    </div>
  );
}