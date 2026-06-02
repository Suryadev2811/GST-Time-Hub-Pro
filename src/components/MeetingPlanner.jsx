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

  const exportMeeting = () => {
    let text =
      "GST Time Hub Meeting Schedule\n\n";

    zones.forEach((z) => {
      text += `${z.name}: ${getLocalTime(
        z.zone
      )}\n`;
    });

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

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#1e293b,#0f172a)",
        padding: "30px",
        borderRadius: "24px",
        textAlign: "center",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.4)",
        border:
          "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2>
        🤝 Smart Meeting Planner
      </h2>

      <p>
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
          padding: "10px",
          borderRadius: "10px",
          marginTop: "10px",
        }}
      />

      <h3
        style={{
          color: "#22c55e",
          marginTop: "20px",
        }}
      >
        Recommended Slot:
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
                "rgba(255,255,255,0.05)",
              padding: "20px",
              borderRadius: "18px",
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
          color: "#38bdf8",
          marginTop: "25px",
        }}
      >
        Meeting Score: 94%
      </h3>

      <button
        onClick={exportMeeting}
        style={{
          marginTop: "15px",
          padding:
            "10px 18px",
          borderRadius:
            "10px",
          border: "none",
          background:
            "#22c55e",
          color: "white",
          cursor:
            "pointer",
          fontWeight:
            "bold",
        }}
      >
        📄 Export Schedule
      </button>
    </div>
  );
}