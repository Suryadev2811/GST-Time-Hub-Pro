import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (dark) {
      root.style.setProperty(
        "--bg-primary",
        "#020617"
      );

      root.style.setProperty(
        "--bg-secondary",
        "#0f172a"
      );

      root.style.setProperty(
        "--text-primary",
        "#ffffff"
      );

      root.style.setProperty(
        "--text-secondary",
        "#94a3b8"
      );

      document.body.style.background =
        "#020617";
    } else {
      root.style.setProperty(
        "--bg-primary",
        "#f8fafc"
      );

      root.style.setProperty(
        "--bg-secondary",
        "#ffffff"
      );

      root.style.setProperty(
        "--text-primary",
        "#0f172a"
      );

      root.style.setProperty(
        "--text-secondary",
        "#475569"
      );

      document.body.style.background =
        "#f8fafc";
    }

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
        background: dark
          ? "#f8fafc"
          : "#0f172a",
        color: dark
          ? "#0f172a"
          : "#ffffff",
        transition: "all 0.3s ease",
        boxShadow:
          "0 4px 15px rgba(0,0,0,0.2)",
      }}
    >
      {dark
        ? "☀️ Light Mode"
        : "🌙 Dark Mode"}
    </button>
  );
}