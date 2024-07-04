import React, { useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./App.css";
import Adhoc from "./pages/Adhoc";
import { Box } from "@mui/material";

import Calendar from "./pages/Calender";
import WeekCalendar from "./pages/WeekCalender";
import { routineData } from "./utils/data/RoutineData";
import { periodicData } from "./utils/data/PeriodicData";
import { adhocData } from "./utils/data/AdhocData";

const buttonStyles = {
  backgroundColor: "#D3D3D3",
  color: "white",
  marginLeft: "1px",
  borderRadius: "20px 0 0 0",
};

const AdHocComponent = () => (
  <Box style={{ marginInline: "120px" }}>
    <Adhoc events={adhocData} />
  </Box>
);

const PeriodicComponent = () => (
  <Box>
    <Calendar events={periodicData} />
  </Box>
);

const RoutineComponent = () => (
  <Box display="flex" justifyContent={"center"} alignItems={"center"}>
    <WeekCalendar events={routineData} />
  </Box>
);

const App = () => {
  const [selectedButton, setSelectedButton] = useState("Ad-hoc");

  // const [alignment, setAlignment] = React.useState("Ad-hoc");

  const handleChange = (event, newAlignment) => {
    setSelectedButton(newAlignment);
  };

  const renderComponent = () => {
    switch (selectedButton) {
      case "Ad-hoc":
        return <AdHocComponent />;
      case "Periodic":
        return <PeriodicComponent />;
      case "Routine":
        return <RoutineComponent />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <ToggleButtonGroup
        value={selectedButton}
        exclusive
        onChange={handleChange}
        aria-label="selection"
        style={{
          marginTop: "45px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ToggleButton
          value="Ad-hoc"
          style={{
            ...buttonStyles,
            backgroundColor:
              selectedButton === "Ad-hoc"
                ? "#4169E1"
                : buttonStyles.backgroundColor,
          }}
        >
          Ad-hoc
        </ToggleButton>
        <ToggleButton
          value="Periodic"
          style={{
            ...buttonStyles,
            backgroundColor:
              selectedButton === "Periodic"
                ? "#4169E1"
                : buttonStyles.backgroundColor,
          }}
        >
          Periodic
        </ToggleButton>
        <ToggleButton
          value="Routine"
          style={{
            ...buttonStyles,
            backgroundColor:
              selectedButton === "Routine"
                ? "#4169E1"
                : buttonStyles.backgroundColor,
          }}
        >
          Routine
        </ToggleButton>
      </ToggleButtonGroup>

      <Box mt={2}>{renderComponent()}</Box>
    </Box>
  );
};

export default App;
