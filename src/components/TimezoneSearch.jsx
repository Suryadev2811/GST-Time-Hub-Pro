import { useState } from "react";

const ALL_TIMEZONES =
  Intl.supportedValuesOf("timeZone");

function TimezoneSearch() {
  const [timezone, setTimezone] =
    useState("Asia/Kolkata");

  const [search, setSearch] =
    useState("");

  const filteredTimezones =
    ALL_TIMEZONES.filter((tz) =>
      tz.toLowerCase().includes(
        search.toLowerCase()
      )
    );

  const getTime = () => {
    try {
      return new Date().toLocaleString(
        "en-US",
        {
          timeZone: timezone,
          dateStyle: "full",
          timeStyle: "medium",
        }
      );
    } catch {
      return "Invalid Timezone";
    }
  };

  return (
    <div
      style={{
        background:
          "linear-gradient(145deg,#1e293b,#0f172a)",
        padding: "25px",
        borderRadius: "24px",
        marginTop: "40px",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
        }}
      >
        🔍 Timezone Search
      </h2>

      <input
        type="text"
        placeholder="Search timezone..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        style={{
          padding: "12px",
          width: "320px",
          maxWidth: "100%",
          marginBottom: "15px",
          borderRadius: "10px",
          border: "none",
        }}
      />

      <br />

      <select
        value={timezone}
        onChange={(e) =>
          setTimezone(e.target.value)
        }
        style={{
          padding: "12px",
          width: "320px",
          maxWidth: "100%",
          borderRadius: "10px",
        }}
      >
        {filteredTimezones.map((tz) => (
          <option
            key={tz}
            value={tz}
          >
            {tz}
          </option>
        ))}
      </select>

      <h3
        style={{
          marginTop: "20px",
          color: "#38bdf8",
        }}
      >
        {timezone}
      </h3>

      <p
        style={{
          marginTop: "10px",
          fontSize: "18px",
        }}
      >
        {getTime()}
      </p>
    </div>
  );
}

export default TimezoneSearch;