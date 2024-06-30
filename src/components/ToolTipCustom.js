import React from "react";
import { format, parseISO } from "date-fns";
import { styled } from "@mui/material/styles";
import { convertMinutes } from "../utils/utils";
import { Paper, Tooltip, Typography, tooltipClasses } from "@mui/material";

const ToolTipCustom = ({ event, rowIndex }) => {
  //transformaing Tooltip component for custom ui
  const CustomTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "yellow",
      color: "black",
      fontSize: 14,
      fontWeight: "bold",
      border: "none",
    },
  });
  return (
    <CustomTooltip
      key={rowIndex}
      title={
        event && (
          <div>
            <Typography>
              Date: {format(parseISO(event.d), "yyyy-MM-dd")}
            </Typography>
            <Typography>
              Cleaning Time: {convertMinutes(event.cleaning_Time_Min)}
            </Typography>
            <Typography>Rooms: {event.rooms}</Typography>
            <Typography>Specialties: {event.specialties}</Typography>
          </div>
        )
      }
    >
      <Paper
        style={{
          borderRadius: "0px",
          // borderBottom: "2px solid black",
          borderTop: "1px solid black",
          boxShadow: "none",
          padding: "16px",
          backgroundColor: event ? event.color : "transparent",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          cursor: event ? "pointer" : "default",
        }}
      >
        {event && (
          <div style={{ marginLeft: "8px" }}>
            <Typography variant="subtitle1">{event.cw_route_name}</Typography>
            <Typography variant="caption">
              {convertMinutes(event.cleaning_Time_Min)}
            </Typography>
          </div>
        )}
      </Paper>
    </CustomTooltip>
  );
};

export default ToolTipCustom;
