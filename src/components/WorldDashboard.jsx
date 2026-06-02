import { useEffect, useState } from "react";
import CityCard from "./CityCard";
import { cities } from "../data/cities";

function WorldDashboard() {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const data = {};

      cities.forEach((city) => {
        const now = new Date();

        const hour = Number(
          now.toLocaleString("en-US", {
            timeZone: city.zone,
            hour: "2-digit",
            hour12: false,
          })
        );

        data[city.name] = {
          time: now.toLocaleTimeString("en-US", {
            timeZone: city.zone,
          }),

          date: now.toLocaleDateString("en-US", {
            timeZone: city.zone,
            weekday: "short",
            month: "short",
            day: "numeric",
          }),

          working: hour >= 9 && hour <= 18,
        };
      });

      setTimes(data);
    };

    updateTimes();

    const interval = setInterval(
      updateTimes,
      1000
    );

    return () =>
      clearInterval(interval);
  }, []);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#38bdf8",
          fontSize: "42px",
        }}
      >
        🌎 Global Time Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
          marginBottom: "40px",
        }}
      >
        {cities.map((city) => (
          <CityCard
            key={city.name}
            city={city}
            time={times[city.name]?.time}
            date={times[city.name]?.date}
            working={
              times[city.name]?.working
            }
          />
        ))}
      </div>
    </>
  );
}

export default WorldDashboard;