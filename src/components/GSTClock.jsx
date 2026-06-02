import { useEffect, useState } from "react";

function GSTClock() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Dubai",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );

      setDate(
        now.toLocaleDateString("en-US", {
          timeZone: "Asia/Dubai",
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      );
    };

    updateClock();

    const interval = setInterval(
      updateClock,
      1000
    );

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#1e293b,#0f172a)",
        padding: "35px",
        borderRadius: "24px",
        textAlign: "center",
        marginBottom: "35px",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.4)",
        border:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "10px",
          fontSize: "28px",
        }}
      >
        🇦🇪 Gulf Standard Time (GST)
      </h2>

      <h1
        style={{
          fontSize:
            "clamp(42px,7vw,90px)",
          margin: "0",
          fontWeight: "900",
          color: "#ffffff",
          letterSpacing: "2px",
        }}
      >
        {time}
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginTop: "15px",
          fontSize: "20px",
        }}
      >
        {date}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <span
          style={{
            background:
              "rgba(34,197,94,0.15)",
            color: "#22c55e",
            padding:
              "8px 14px",
            borderRadius: "999px",
            fontWeight: "bold",
          }}
        >
          Live
        </span>

        <span
          style={{
            background:
              "rgba(56,189,248,0.15)",
            color: "#38bdf8",
            padding:
              "8px 14px",
            borderRadius: "999px",
            fontWeight: "bold",
          }}
        >
          UTC +04:00
        </span>
      </div>
    </div>
  );
}

export default GSTClock;