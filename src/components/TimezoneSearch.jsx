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

  const copyTimezone = () => {
    navigator.clipboard.writeText(
      timezone
    );

    alert(
      "✅ Timezone copied!"
    );
  };

  return (
    <div
      style={{
        background: "var(--card)",
        color: "var(--text)",
        padding: "25px",
        borderRadius: "24px",
        marginTop: "40px",
        textAlign: "center",
        border:
          "1px solid var(--border)",
        boxShadow:
          "0 10px 40px var(--shadow)",
      }}
    >
      <h2
        style={{
          marginBottom: "20px",
          color: "#38bdf8",
        }}
      >
        🔍 Timezone Search
      </h2>

      <input
        type="text"
        placeholder="Search timezone..."
        value={search}
        onChange={(e) =>
          setSearch(
            e.target.value
          )
        }
        style={{
          padding: "12px",
          width: "320px",
          maxWidth: "100%",
          marginBottom: "15px",
          borderRadius: "10px",
          border:
            "1px solid var(--border)",
          background:
            "var(--card)",
          color:
            "var(--text)",
        }}
      />

      <br />

      <select
        value={timezone}
        onChange={(e) =>
          setTimezone(
            e.target.value
          )
        }
        style={{
          padding: "12px",
          width: "320px",
          maxWidth: "100%",
          borderRadius: "10px",
          border:
            "1px solid var(--border)",
          background:
            "var(--card)",
          color:
            "var(--text)",
        }}
      >
        {filteredTimezones.map(
          (tz) => (
            <option
              key={tz}
              value={tz}
            >
              {tz}
            </option>
          )
        )}
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
          color:
            "var(--text)",
        }}
      >
        {getTime()}
      </p>

      <button
        onClick={
          copyTimezone
        }
        style={{
          marginTop: "15px",
          padding:
            "10px 18px",
          borderRadius:
            "10px",
          border: "none",
          background:
            "#38bdf8",
          color: "white",
          cursor:
            "pointer",
          fontWeight:
            "bold",
        }}
      >
        📋 Copy Timezone
      </button>
    </div>
  );
}

export default TimezoneSearch;