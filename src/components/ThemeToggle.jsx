import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {
    document.body.style.background =
      dark ? "#020617" : "#f8fafc";

    document.body.style.color =
      dark ? "#ffffff" : "#0f172a";

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
        border: "none",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}