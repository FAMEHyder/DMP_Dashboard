'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Chip
} from '@mui/material';

const ConnectedPages = () => {

  const [pages, setPages] = useState([]);

  // ✅ API CALL
  useEffect(() => {
    axios
      .get("https://sat-tara-backend.vercel.app/api/pages/facebook")
      .then(res => {
        console.log("res is :", res.data)
        setPages(res.data.pages || []);
      })
      .catch(err => {
        console.error("Error fetching pages:", err);
      });
  }, []);

  return (
    <Box m={3}>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "2px 2px 2px 2px gray",
        }}
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
          <TableHead>

            {/* 🔥 Top Heading */}
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
                Connected Facebook Pages
              </TableCell>
            </TableRow>

            {/* 🔥 Column Headers */}
            <TableRow sx={{ backgroundColor: "#09362f" }}>
              {["P-N", "Page Name", "Connected On", "T-Issued On", "T-Expires On", "Days Left", "Token Rotate"].map((head) => (
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

          <TableBody>
            {pages.map((row, index) => (
              <TableRow
                key={row._id || index}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  },
                }}
              >
                <TableCell align="center">{row.pageNumber}</TableCell>
                <TableCell align="center">{row.pageName}</TableCell>
                <TableCell align="center">
                  {new Date(row.connectedAt).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {new Date(row.tokenIssuedAt).toLocaleDateString()}
                </TableCell>
                <TableCell align="center">
                  {new Date(row.tokenExpiresAt).toLocaleDateString()}
                </TableCell>

                {/* ✅ Days Left */}
                <TableCell align="center">
                  <Chip
                    label={`${row.daysLeft} days`}
                    color={
                      row.daysLeft <= 5
                        ? 'error'
                        : row.daysLeft <= 15
                          ? 'warning'
                          : 'success'
                    }
                    size="small"
                  />
                </TableCell>

                {/* ✅ Status / Rotate */}
                <TableCell align="center">
                  <Chip
                    label={row.status}
                    color={
                      row.status === "expired"
                        ? "error"
                        : row.status === "expiring-soon"
                          ? "warning"
                          : "success"
                    }
                    size="small"
                  />
                </TableCell>

              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>
    </Box>
  );
};

export default ConnectedPages;