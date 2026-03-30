'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Typography
} from '@mui/material';

const ConnectedPages = () => {

  const [users, setUsers] = useState([]);

  // ✅ API CALL
  useEffect(() => {
    axios
      .get("https://sat-tara-backend.vercel.app/api/pages/facebook")
      .then((res) => {
        console.log(res.data); // debug
        setUsers(res.data.pages || []);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  return (
    <Box m={3}>

      <TableContainer
        component={Paper}
        sx={{ boxShadow: "2px 2px 2px 2px gray" }}
      >
        <Table
          sx={{
            border: '1px solid #ccc',
            borderCollapse: 'collapse',
            '& th, & td': {
              border: '1px solid black',
            },
          }}
        >

          {/* ✅ TABLE HEADER */}
          <TableHead>

            <TableRow>
              <TableCell
                colSpan={7}
                sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  backgroundColor: '#09362f',
                  color: "white"
                }}
              >
                Active Users
              </TableCell>
            </TableRow>

            <TableRow sx={{ backgroundColor: "#09362f" }}>
              {["S No.", "Full Name", "User Name", "DOB", "Email", "Phone Number", "Address"].map((head) => (
                <TableCell
                  key={head}
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>

          </TableHead>

          {/* ✅ TABLE BODY */}
          <TableBody>

            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">
                  No Data Found
                </TableCell>
              </TableRow>
            ) : (
              users.map((user, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
                    '&:hover': { backgroundColor: '#e3f2fd' },
                  }}
                >
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell align="center">{user.fullName}</TableCell>
                  <TableCell align="center">{user.userName}</TableCell>
                  <TableCell align="center">{user.dob || "-"}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.phoneNumber}</TableCell>
                  <TableCell align="center">{user.address}</TableCell>
                </TableRow>
              ))
            )}

          </TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
};

export default ConnectedPages;