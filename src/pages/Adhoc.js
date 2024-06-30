import React from "react";
import { Box } from "@mui/material";
import DataTable from "../components/DataTable";

const Adhoc = ({ events }) => {
  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <DataTable rows={events} />
    </Box>
  );
};

export default Adhoc;
