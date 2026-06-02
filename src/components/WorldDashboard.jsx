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

        const day = now.toLocaleString("en-US", {
          timeZone: city.zone,
          weekday: "long",
        });

        let status = "closed";

        if (
          day === "Saturday" ||
          day === "Sunday"
        ) {
          status = "weekend";
        } else if (
          hour >= 9 &&
          hour < 17
        ) {
          status = "open";
        } else if (
          hour >= 17 &&
          hour < 18
        ) {
          status = "closing";
        }

        data[city.name] = {
          time: now.toLocaleTimeString(
            "en-US",
            {
              timeZone: city.zone,
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }
          ),

          date: now.toLocaleDateString(
            "en-US",
            {
              timeZone: city.zone,
              weekday: "short",
              month: "short",
              day: "numeric",
            }
          ),

          status,
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
            "repeat(auto-fit,minmax(300px,1fr))",
          gap: "25px",
          marginBottom: "40px",
        }}
      >
        {cities.map((city) => (
          <CityCard
            key={city.name}
            city={city}
            time={
              times[city.name]?.time
            }
            date={
              times[city.name]?.date
            }
            status={
              times[city.name]?.status
            }
          />
        ))}
      </div>
    </>
  );
}

export default WorldDashboard;