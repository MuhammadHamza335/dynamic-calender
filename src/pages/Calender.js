// src/Calendar.js
import React, { useState } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameDay,
  subMonths,
  addMonths,
  isToday,
} from "date-fns";
import { Box, Grid, Typography, Tooltip, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Calendar = ({ events }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  //logic of next month
  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  //logic of prev month
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // ui of periodic header that shows the current month and arrows to see the other months
  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";
    return (
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingInline={2}
      >
        <IconButton onClick={prevMonth}>
          <ArrowBackIos />
        </IconButton>
        <Typography variant="h4">{format(currentMonth, dateFormat)}</Typography>
        <IconButton onClick={nextMonth}>
          <ArrowForwardIos />
        </IconButton>
      </Box>
    );
  };

  // rendering days
  const renderDays = () => {
    const dateFormat = "eeee";
    const days = [];
    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <Grid item xs key={i}>
          <Typography align="center" variant="subtitle1">
            {format(addDays(startDate, i), dateFormat)}
          </Typography>
        </Grid>
      );
    }

    return <Grid container>{days}</Grid>;
  };

  //rendering cell and its higlight logic for current date

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        const isCurrentDay = isToday(cloneDay);

        days.push(
          <Grid
            item
            xs
            key={day.toString()}
            sx={{
              border: isCurrentDay ? 3 : 1,
              borderColor: isCurrentDay ? "darkblue" : "grey.300",
              height: 120,
              position: "relative",
            }}
          >
            <Typography
              variant="body2"
              sx={{ position: "absolute", top: 8, right: 8 }}
            >
              {formattedDate}
            </Typography>
            {renderEvents(cloneDay)}
          </Grid>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <Grid container key={day.toString()} spacing={0}>
          {days}
        </Grid>
      );
      days = [];
    }
    return <Box>{rows}</Box>;
  };

  // rendering of events inside date cell
  const renderEvents = (day) => {
    return events
      .filter((event) => isSameDay(new Date(event.dueDate), day))
      .map((event) => (
        <Tooltip
          key={event.dueDate}
          title={event.task_Desc}
          arrow
          style={{ marginTop: "30px" }}
        >
          <Box
            sx={{
              mt: 2,
              p: 1,
              backgroundColor: event.color,
              color: "white",
              borderRadius: 1,
              cursor: "pointer",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {event.task_Desc.length > 10
              ? `${event.task_Desc.substring(0, 10)}...`
              : event.task_Desc}
          </Box>
        </Tooltip>
      ));
  };

  return (
    <Box
      paddingX={1}
      paddingY={5}
      height="1100px"
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      alignItems={"center"}
      alignContent={"center"}
    >
      {renderHeader()}
      <Box
        flex={1}
        overflowX="auto"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box minWidth={800}>
          {renderDays()}
          {renderCells()}
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
