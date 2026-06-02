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
          "radial-gradient(circle at top, #1e3a8a 0%, #0f172a 40%, #020617 100%)",
        color: "white",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "20px",
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
              fontSize: "clamp(42px,5vw,72px)",
              fontWeight: "900",
              marginBottom: "15px",
              lineHeight: "1.1",
              color: "#38bdf8",
              textShadow:
                "0 0 25px rgba(56,189,248,0.35)",
            }}
          >
            GST Time Hub Pro 🌍
          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "24px",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            Global Time Intelligence Platform
          </p>

          <div
            style={{
              marginTop: "25px",
            }}
          >
            <ThemeToggle />
          </div>
        </div>

        {/* CLOCK */}
        <GSTClock />

        <WeatherWidget />

        {/* STATS */}
        <StatsCards />

        {/* MEETING PLANNER */}
        <MeetingPlanner />

        {/* WORLD DASHBOARD */}
        <section
          style={{
            marginTop: "50px",
          }}
        >
          <WorldDashboard />
        </section>

        {/* CONVERTER */}
        <section
          style={{
            marginTop: "40px",
          }}
        >
          <TimeConverter />
        </section>

        {/* SEARCH */}
        <section
          style={{
            marginTop: "40px",
          }}
        >
          <TimezoneSearch />
        </section>

        {/* FAVORITES */}
        <section
          style={{
            marginTop: "40px",
          }}
        >
          <Favorites />
        </section>

        {/* FOOTER */}
        <footer
          style={{
            textAlign: "center",
            marginTop: "80px",
            paddingTop: "30px",
            paddingBottom: "30px",
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
            Built with React • Day.js • Modern Web APIs
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