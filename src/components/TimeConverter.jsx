import { useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

const cities = [
  { city: "🇦🇪 Dubai", zone: "Asia/Dubai", diff: "0:00" },
  { city: "🇮🇳 India", zone: "Asia/Kolkata", diff: "+1:30" },
  { city: "🇬🇧 London", zone: "Europe/London", diff: "-3:00" },
  { city: "🇫🇷 Paris", zone: "Europe/Paris", diff: "-2:00" },
  { city: "🇩🇪 Berlin", zone: "Europe/Berlin", diff: "-2:00" },
  { city: "🇺🇸 New York", zone: "America/New_York", diff: "-8:00" },
  { city: "🇺🇸 Los Angeles", zone: "America/Los_Angeles", diff: "-11:00" },
  { city: "🇨🇦 Toronto", zone: "America/Toronto", diff: "-8:00" },
  { city: "🇸🇬 Singapore", zone: "Asia/Singapore", diff: "+4:00" },
  { city: "🇯🇵 Tokyo", zone: "Asia/Tokyo", diff: "+5:00" },
  { city: "🇰🇷 Seoul", zone: "Asia/Seoul", diff: "+5:00" },
  { city: "🇦🇺 Sydney", zone: "Australia/Sydney", diff: "+6:00" },
];

function TimeConverter() {
  const [gstTime, setGstTime] = useState("");

  const convertTime = (zone) => {
    if (!gstTime) return "";

    const today = dayjs().format("YYYY-MM-DD");

    const gstDateTime = dayjs.tz(
      `${today} ${gstTime}`,
      "Asia/Dubai"
    );

    return gstDateTime
      .tz(zone)
      .format("hh:mm A");
  };

  const copyTimes = () => {
    if (!gstTime) {
      alert("Please select a GST time first.");
      return;
    }

    let text = "🌍 GST Time Conversion\n\n";

    cities.forEach((city) => {
      text += `${city.city}: ${convertTime(city.zone)}\n`;
    });

    navigator.clipboard.writeText(text);

    alert("✅ Times copied successfully!");
  };

  const exportTxt = () => {
    if (!gstTime) {
      alert("Please select a GST time first.");
      return;
    }

    let text = "🌍 GST Time Conversion\n\n";

    cities.forEach((city) => {
      text += `${city.city}: ${convertTime(city.zone)}\n`;
    });

    const blob = new Blob([text], {
      type: "text/plain",
    });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "gst-conversion.txt";

    link.click();
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#1e293b,#0f172a)",
        padding: "30px",
        borderRadius: "24px",
        marginTop: "40px",
        boxShadow:
          "0 10px 40px rgba(0,0,0,0.4)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        🌍 GST Time Converter
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <input
          type="time"
          value={gstTime}
          onChange={(e) =>
            setGstTime(e.target.value)
          }
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "none",
          }}
        />

        <button
          onClick={copyTimes}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            border: "none",
            background: "#38bdf8",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          📋 Copy All
        </button>

        <button
          onClick={exportTxt}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            border: "none",
            background: "#22c55e",
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          📄 Export TXT
        </button>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: "15px",
        }}
      >
        Selected GST Time:{" "}
        <b>{gstTime || "None"}</b>
      </p>

      <p
        style={{
          textAlign: "center",
          color: "#38bdf8",
          marginTop: "8px",
        }}
      >
        Showing {cities.length} cities
      </p>

      {gstTime && (
        <table
          style={{
            width: "100%",
            marginTop: "25px",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "12px" }}>
                🌎 City
              </th>

              <th style={{ padding: "12px" }}>
                ⏱ GST Difference
              </th>

              <th style={{ padding: "12px" }}>
                🕒 Converted Time
              </th>
            </tr>
          </thead>

          <tbody>
            {cities.map((city) => (
              <tr key={city.city}>
                <td
                  style={{
                    padding: "12px",
                    borderTop:
                      "1px solid #334155",
                  }}
                >
                  {city.city}
                </td>

                <td
                  style={{
                    padding: "12px",
                    borderTop:
                      "1px solid #334155",
                  }}
                >
                  GST {city.diff}
                </td>

                <td
                  style={{
                    padding: "12px",
                    borderTop:
                      "1px solid #334155",
                    color: "#38bdf8",
                    fontWeight: "bold",
                  }}
                >
                  {convertTime(city.zone)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TimeConverter;