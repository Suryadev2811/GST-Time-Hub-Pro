import { useState } from "react";

export default function MeetingPlanner() {
  const [meetingTime, setMeetingTime] =
    useState("14:00");

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
    {
      name: "🇺🇸 New York",
      zone: "America/New_York",
    },
  ];

  const getLocalTime = (zone) => {
    const today =
      new Date().toISOString().split("T")[0];

    const date = new Date(
      `${today}T${meetingTime}:00`
    );

    return date.toLocaleTimeString(
      "en-US",
      {
        timeZone: zone,
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  };

  const getMeetingScore = () => {
    let score = 0;

    zones.forEach((z) => {
      const today =
        new Date().toISOString().split("T")[0];

      const gstDate = new Date(
        `${today}T${meetingTime}:00`
      );

      const localHour = Number(
        gstDate.toLocaleString(
          "en-US",
          {
            timeZone: z.zone,
            hour: "2-digit",
            hour12: false,
          }
        )
      );

      if (
        localHour >= 9 &&
        localHour <= 17
      ) {
        score += 25;
      }
    });

    return score;
  };

  const exportMeeting = () => {
    let text =
      "GST Time Hub Meeting Schedule\n\n";

    zones.forEach((z) => {
      text += `${z.name}: ${getLocalTime(
        z.zone
      )}\n`;
    });

    text += `\nMeeting Score: ${getMeetingScore()}%`;

    const blob = new Blob(
      [text],
      {
        type: "text/plain",
      }
    );

    const link =
      document.createElement("a");

    link.href =
      URL.createObjectURL(blob);

    link.download =
      "meeting-schedule.txt";

    link.click();
  };

  const score =
    getMeetingScore();

  return (
    <div
      style={{
        background: "var(--card)",
        color: "var(--text)",
        padding: "30px",
        borderRadius: "24px",
        textAlign: "center",
        boxShadow:
          "0 10px 40px var(--shadow)",
        border:
          "1px solid var(--border)",
      }}
    >
      <h2
        style={{
          color: "#38bdf8",
          marginBottom: "10px",
        }}
      >
        🤝 Smart Meeting Planner
      </h2>

      <p
        style={{
          color: "var(--secondary)",
        }}
      >
        Select GST Meeting Time
      </p>

      <input
        type="time"
        value={meetingTime}
        onChange={(e) =>
          setMeetingTime(
            e.target.value
          )
        }
        style={{
          padding: "12px",
          borderRadius: "10px",
          marginTop: "10px",
          background:
            "var(--card)",
          color: "var(--text)",
          border:
            "1px solid var(--border)",
        }}
      />

      <h3
        style={{
          color: "#22c55e",
          marginTop: "20px",
        }}
      >
        Selected GST Time:
        {" "}
        {meetingTime}
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        {zones.map((z) => (
          <div
            key={z.name}
            style={{
              background:
                "rgba(56,189,248,0.08)",
              padding: "20px",
              borderRadius: "18px",
              border:
                "1px solid var(--border)",
            }}
          >
            <h3>{z.name}</h3>

            <h2
              style={{
                color: "#38bdf8",
              }}
            >
              {getLocalTime(
                z.zone
              )}
            </h2>
          </div>
        ))}
      </div>

      <h3
        style={{
          color:
            score >= 75
              ? "#22c55e"
              : score >= 50
              ? "#f59e0b"
              : "#ef4444",
          marginTop: "25px",
        }}
      >
        Meeting Score: {score}%
      </h3>

      <p
        style={{
          color:
            "var(--secondary)",
          marginTop: "8px",
        }}
      >
        Based on how many locations
        fall within standard business
        hours (9 AM – 5 PM).
      </p>

      <button
        onClick={exportMeeting}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          borderRadius: "10px",
          border: "none",
          background: "#22c55e",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        📄 Export Schedule
      </button>
    </div>
  );
}