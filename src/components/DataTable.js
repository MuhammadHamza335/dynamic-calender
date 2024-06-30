import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, LinearProgress } from "@mui/material";
import { convertMinutes } from "../utils/utils";

const DataTable = ({ rows }) => {
  //columns of table ,values and its styling
  const columns = [
    { field: "taskDesc", headerName: "Bucket", width: 450 },
    {
      field: "opCodeDesc",
      headerName: "Op-Code",
      width: 500,
      renderCell: (params) =>
        `${params.row.opCode || ""} ${params.row.opCodeDesc || ""}`,
    },
    {
      field: "yearlyMinsSetAside",
      headerName: "Hours Used",
      width: 150,
      renderCell: (params) => convertMinutes(params.value),
    },
    {
      field: "usedTime",
      headerName: "Total Hours",
      width: 150,
      renderCell: (params) => convertMinutes(params.value),
    },
    {
      field: "graphs",
      headerName: "Graphs",
      width: 150,
      renderCell: (params) => (
        <Box sx={{ width: "100%" }}>
          <LinearProgress
            variant="buffer"
            value={Math.random() * 100}
            style={{ height: 12, borderRadius: 5 }}
          />
        </Box>
      ),
    },
  ];

  //Transformining rows to add id for identity
  const transformedRows = rows.map((row, index) => ({
    id: index + 1,
    ...row,
  }));
  return (
    <DataGrid
      rows={transformedRows}
      columns={columns}
      density={"compact"}
      disableSelectionOnClick
      components={{
        Toolbar: GridToolbar,
      }}
    />
  );
};

export default DataTable;
