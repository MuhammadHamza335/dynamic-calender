import React from "react";
import { format, parseISO } from "date-fns";
import { styled } from "@mui/material/styles";
import { convertMinutes } from "../utils/utils";
import { Paper, Tooltip, Typography, tooltipClasses } from "@mui/material";

const colorMap = {
  grey: "#808080",
  red: "#FF0000",
};

function hexToRgba(hex, alpha) {
  hex = hex.replace(/^#/, "");
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const ToolTipCustom = ({ event, rowIndex }) => {
  const getStripedBackground = (color) => {
    return `repeating-linear-gradient(
      45deg,
      ${color},
      ${color} 5px,
      white 5px,
      white 10px
    )`;
  };
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
          backgroundColor: "transparent",
          height: "75px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          cursor: event ? "pointer" : "default",
        }}
      >
        {event && (
          <div
            style={{
              // marginLeft: "8px",
              display: "flex",
              backgroundColor: event
                ? hexToRgba(
                    colorMap[event.color],
                    event.color === "red" ? 0.4 : 0.7
                  )
                : "transparent",
              width: "100%",
              height: "90px",
              border: `1px solid ${event.color}`,
            }}
          >
            <div
              className="striped-box"
              style={{
                background: event
                  ? getStripedBackground(event.color)
                  : "transparent",

                borderLeft: `1px solid ${event.color}`,
                borderRight: `1px solid ${event.color}`,
              }}
            >
              {/* Your content here */}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "9px",
              }}
            >
              <Typography variant="subtitle1">{event.cw_route_name}</Typography>
              <Typography variant="caption">
                {convertMinutes(event.cleaning_Time_Min)}
              </Typography>
            </div>
          </div>
        )}
      </Paper>
    </CustomTooltip>
  );
};

export default ToolTipCustom;
