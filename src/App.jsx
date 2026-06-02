import GSTClock from "./components/GSTClock";
import TimeConverter from "./components/TimeConverter";
import WorldDashboard from "./components/WorldDashboard";
import TimezoneSearch from "./components/TimezoneSearch";
import Favorites from "./components/Favorites";
import ThemeToggle from "./components/ThemeToggle";
import StatsCards from "./components/StatsCards";
import MeetingPlanner from "./components/MeetingPlanner";
import WeatherWidget from "./components/WeatherWidget";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top,var(--bg-secondary,#1e3a8a) 0%,var(--bg-primary,#020617) 100%)",
        color: "var(--text-primary,#ffffff)",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "20px",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* HERO */}
        <div
          style={{
            textAlign: "center",
            paddingTop: "40px",
            marginBottom: "50px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(48px,6vw,82px)",
              fontWeight: "900",
              marginBottom: "15px",
              lineHeight: "1.1",
              color: "#38bdf8",
              textShadow:
                "0 0 30px rgba(56,189,248,0.35)",
            }}
          >
            GST Time Hub Pro 🌍
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "24px",
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            Global Time Intelligence Platform
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              marginTop: "25px",
              flexWrap: "wrap",
            }}
          >
            <ThemeToggle />

            <a
              href="https://github.com/Suryadev2811/GST-Time-Hub-Pro"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                🚀 GitHub
              </button>
            </a>

            <a
              href="https://gst-time-hub-pro.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: "bold",
                  background: "#22c55e",
                  color: "white",
                }}
              >
                🌐 Live Demo
              </button>
            </a>
          </div>
        </div>

        <GSTClock />

        <WeatherWidget />

        <StatsCards />

        <MeetingPlanner />

        <section
          style={{
            marginTop: "50px",
          }}
        >
          <WorldDashboard />
        </section>

        <section
          style={{
            marginTop: "40px",
          }}
        >
          <TimeConverter />
        </section>

        <section
          style={{
            marginTop: "40px",
          }}
        >
          <TimezoneSearch />
        </section>

        <section
          style={{
            marginTop: "40px",
          }}
        >
          <Favorites />
        </section>

        <footer
          style={{
            textAlign: "center",
            marginTop: "80px",
            paddingTop: "35px",
            paddingBottom: "35px",
            borderTop:
              "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h2
            style={{
              color: "#38bdf8",
              marginBottom: "15px",
            }}
          >
            🌍 GST Time Hub Pro
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              marginBottom: "10px",
            }}
          >
            Real-Time Global Time Intelligence
          </p>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "10px",
            }}
          >
            Built with React • Vite • Day.js • Open-Meteo API
          </p>

          <p
            style={{
              color: "#64748b",
              fontSize: "14px",
            }}
          >
            © 2026 Suryadev
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;