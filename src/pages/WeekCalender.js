import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { format, parseISO } from "date-fns";
import ToolTipCustom from "../components/ToolTipCustom";

const today = new Date();
const todayFormatted = format(today, "yyyy-MM-dd");

// data of days week with date to show in the header
const daysOfWeek = [
  { short: "Su", full: "Sunday", date: format(today, "yyyy-MM-dd") },
  {
    short: "Mo",
    full: "Monday",
    date: format(today.setDate(today.getDate() + 1), "yyyy-MM-dd"),
  },
  {
    short: "Tu",
    full: "Tuesday",
    date: format(today.setDate(today.getDate() + 1), "yyyy-MM-dd"),
  },
  {
    short: "We",
    full: "Wednesday",
    date: format(today.setDate(today.getDate() + 1), "yyyy-MM-dd"),
  },
  {
    short: "Th",
    full: "Thursday",
    date: format(today.setDate(today.getDate() + 1), "yyyy-MM-dd"),
  },
  {
    short: "Fr",
    full: "Friday",
    date: format(today.setDate(today.getDate() + 1), "yyyy-MM-dd"),
  },
  {
    short: "Sa",
    full: "Saturday",
    date: format(today.setDate(today.getDate() + 1), "yyyy-MM-dd"),
  },
];

// rendering calender
const WeekCalendar = ({ events }) => {
  // Determine the maximum number of rows required
  const maxRows = Math.max(...events.map((event) => event.rowNumber));

  // Organize events by day
  const eventsByDay = daysOfWeek.reduce((acc, day) => {
    acc[day.short] = events.filter((event) => event.day === day.short);
    return acc;
  }, {});

  return (
    <Box overflowX="auto">
      <Box minWidth={daysOfWeek.length * 190}>
        <Grid
          container
          spacing={2}
          style={{
            padding: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {daysOfWeek.map((day, index) => (
            <Grid
              item
              key={day.short}
              style={{
                width: 150,
                padding: "0px",
                border:
                  todayFormatted === day.date
                    ? "3px solid blue"
                    : "1px solid black",
              }}
            >
              <Typography variant="h6" align="center">
                <strong>{day.full}</strong>
                <br />
                {format(parseISO(day.date), "MMM dd")}
              </Typography>
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
