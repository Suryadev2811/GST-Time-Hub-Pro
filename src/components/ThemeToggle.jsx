import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      dark ? "dark" : "light"
    );

    localStorage.setItem(
      "theme",
      dark ? "dark" : "light"
    );
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        padding: "12px 20px",
        borderRadius: "12px",
        border: "1px solid var(--border)",
        cursor: "pointer",
        fontWeight: "bold",
        background: "var(--card)",
        color: "var(--text)",
        boxShadow: "0 4px 12px var(--shadow)",
        transition: "all 0.3s ease",
      }}
    >
      {dark
        ? "☀️ Light Mode"
        : "🌙 Dark Mode"}
    </button>
  );
}