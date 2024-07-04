import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { format, parseISO, addDays } from "date-fns";
import ToolTipCustom from "../components/ToolTipCustom";

const today = new Date();
const todayFormatted = format(today, "yyyy-MM-dd");

// data of days week with date to show in the header

const daysOfWeek = Array.from({ length: 7 }).map((_, index) => {
  const date = addDays(today, index);
  const fullDayName = format(date, "EEEE");
  return {
    short:
      fullDayName.slice(0, 2).charAt(0).toUpperCase() +
      fullDayName.slice(1, 2).toLowerCase(),
    full: format(date, "EEEE"), // Full day name (e.g., 'Monday')
    date: format(date, "yyyy-MM-dd"),
  };
});

console.log("Dayyys", daysOfWeek);
// rendering calender
const WeekCalendar = ({ events }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Determine the maximum number of rows required
  const maxRows = Math.max(...events.map((event) => event.rowNumber));

  // Organize events by day
  const eventsByDay = daysOfWeek.reduce((acc, day) => {
    acc[day.short] = events.filter((event) => event.day === day.short);
    return acc;
  }, {});

  return (
    <Box overflowX="auto" width={`${width}px`}>
      <Box minWidth={"1300px"}>
        <Grid
          container
          spacing={2}
          style={{
            paddingBlock: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {daysOfWeek.map((day, index) => (
            <Grid
              item
              key={day.short}
              style={{
                width: 175,
                padding: "0px",
                border:
                  todayFormatted === day.date
                    ? "3px solid blue"
                    : "1px solid black",
                backgroundColor:
                  day.short === "Sa" || day.short === "Su"
                    ? "#D3D3D3"
                    : "transparent",
              }}
            >
              <div
                style={{
                  height: todayFormatted === day.date ? "68px" : "70px",
                }}
              >
                <Box display="block" textAlign="center">
                  <Typography variant="h6">
                    <strong>{day.full}</strong>
                  </Typography>
                </Box>
                <Box
                  display="block"
                  textAlign="center"
                  style={{
                    borderTop: "1px solid black",
                    display: "flex",
                    flexDirection: "row",
                    marginTop: todayFormatted === day.date ? "-1.5px" : "0px",
                    height: "37px",
                    backgroundColor:
                      todayFormatted === day.date ? "#4169E1" : "transparent",
                  }}
                >
                  <Typography
                    variant="p"
                    color={todayFormatted === day.date ? "white" : "gray"}
                  >
                    {format(parseISO(day.date), "dd")}
                  </Typography>
                </Box>
              </div>
              {[...Array(maxRows)].map((_, rowIndex) => {
                const event = eventsByDay[day.short]?.find(
                  (event) => event.rowNumber - 1 === rowIndex
                );
                return <ToolTipCustom event={event} rowIndex={rowIndex} />;
              })}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default WeekCalendar;
