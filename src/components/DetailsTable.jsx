import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import {
  DataGrid,
  
} from "@mui/x-data-grid";


import toast from "react-hot-toast";
import { ImSpinner2 } from "react-icons/im";


const DetialsTable = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [col, setCol] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate fetching data
        const res = [
          {
            _id: "66b30d1479b3edb9837d1674",
            name: "Testing Two",
            employeeId: "124231",
            phone: "8888888888",
            password:
              "$2a$10$6255M4bI7F3IPgtYIj/7xulCM0XNu9MUOBpLimRev.yv9/vUtVAPa",
            isDriving: false,
            isDeleted: false,
            createdAt: "2024-08-07T05:58:44.367Z",
            updatedAt: "2024-08-07T05:58:44.367Z",
            __v: 0,
          },
          {
            _id: "66b1b87ca5576f378ef780a1",
            name: "Salman",
            employeeId: "358544",
            phone: "9999999999",
            password:
              "$2a$10$Tfl1hGySQacptLm14ar6z./KnYUW0SDR0hkhdziKoy7YI0wONneQu",
            isDriving: true,
            isDeleted: false,
            createdAt: "2024-08-06T05:45:32.926Z",
            updatedAt: "2024-08-06T05:45:32.926Z",
            __v: 0,
          },
          {
            _id: "66b0bc4c139a8f8b55843c2c",
            name: "Testing",
            employeeId: "325414",
            phone: "7777777777",
            password:
              "$2a$10$50zLtKQT9GfVBs8C1XiTv.6w9YNQzF1El7lGrJ.Kg23VqxZFwaxLu",
            isDriving: true,
            isDeleted: false,
            createdAt: "2024-08-05T11:49:32.778Z",
            updatedAt: "2024-08-07T09:39:19.779Z",
            __v: 0,
          },
          {
            _id: "66b0ade290fb0a6e5e58052b",
            name: "Satheesh",
            employeeId: "322109",
            phone: "6666666666",
            password:
              "$2a$10$45XO.Oldm1W10bMNlCg0B.xJI8jB4v9Hd4O.nxVr7w/uHAsCwEcm2",
            isDriving: false,
            isDeleted: false,
            createdAt: "2024-08-05T10:48:02.281Z",
            updatedAt: "2024-08-07T09:09:33.049Z",
            __v: 0,
          },
        ];

        setCol([
          { field: "id", headerName: "Sr. No" },
          { field: "employeeId", headerName: "Emp ID", flex: 0.5 },

          { field: "name", headerName: "Name", flex: 1 },
          { field: "phone", headerName: "Phone Number", flex: 1 },
          {
            field: "isDriving",
            headerName: "Status",
            flex: 0.5,
            renderCell: (params) => (
              <div className="flex items-center">
                <span
                  className={`text-sm rounded-full px-4 py-1 mt-1 font-medium ${
                    params.row.isDriving ? "bg-green-400/50" : "bg-red-400/50"
                  }`}
                >
                  {params.row.isDriving ? "Delivered" : "Cancelled"}
                </span>
              </div>
            ),
          },
        //   {
        //     field: "isVerified",
        //     headerName: "Verified",
        //     flex: 0.5,
        //     renderCell: (params) => (
        //       <div className="flex items-center">
        //         <span
        //           className={`text-sm rounded px-4 py-1 mt-1 font-medium ${
        //             params.row.isVerified ? "text-green-700" : "text-red-700"
        //           }`}
        //         >
        //           {params.row.isVerified ? "Yes" : "No"}
        //         </span>
        //       </div>
        //     ),
        //   },
        ]);

        setData(res.map((item, index) => ({ ...item, id: index + 1 })));
        setLoading(false);
      } catch (err) {
        setError(err);
        toast.error("An error occurred. Please try again.");
        navigate("/login");
        setLoading(false);
      }
    };

    fetchData();
  }, [navigate]);



  return (
    <Box m="8px 0 0 0">
      <Box
        height="100%"
        border={1}
        borderColor="grey.800"
        borderRadius="10px"
        sx={{
          "& .MuiDataGrid-root": {
            // border: "1",
            backgroundColor: "#202028",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-pagination": {
            backgroundColor: "#202028",
            color: "white",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: "#202028",
            color: "white",
          },
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: "#202028", // Remove background color
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: "black", // Set toolbar button text color to white
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "#202028", // Remove background color from column headers
            color: "black", // Set column header text color to white
          },
        }}
      >
        {loading ? (
          <div className="flex items-center justify-center h-full gap-4 text-xl">
            <ImSpinner2 className="text-2xl animate-spin" />
            Fetching data...
          </div>
        ) : error ? (
          <div>Error ~ Something went wrong</div>
        ) : (
          <DataGrid
            rows={data}
            columns={col}
            // components={{ Toolbar: CustomToolbar }}

            sx={{
              backgroundColor: "#202028", // Remove background color from DataGrid
              color: "white", // Set DataGrid text color to white
              fontSize: 15,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default DetialsTable;
