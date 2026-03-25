
'use client';

import React, { useState } from 'react';
import {
  Box,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Typography, Chip
} from '@mui/material';

const ConnectedPages = () => {
  const [connect] = useState([
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft: "60 days", rotate: "Rotated" },
    { PageNumber: '2', PageName: 'Ali Store', connectAt: "01-03-2026", expiresOn: "01-04-2026", DaysLeft: "5 days", rotate: "Rotate Now" },
    { PageNumber: '3', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft: "34 days", rotate: "Rotated" },
    { PageNumber: '4', PageName: 'Ali Store', connectAt: "01-03-2026", expiresOn: "01-04-2026", DaysLeft: "5 days", rotate: "Rotate Now" },
    { PageNumber: '5', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft: "30 days", rotate: "Rotated" },
    { PageNumber: '6', PageName: 'Ali Store', connectAt: "01-03-2026", expiresOn: "01-04-2026", DaysLeft: "5 days", rotate: "Rotate Now" },
  ]);

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
              border: '1px solid #ccc',
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell
                colSpan={6}
                sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  backgroundColor: '#09362f',
                }}
              >
                Connected Facebook Pages
              </TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: "#09362f" }}>
              {["Page #", "Page Name", "Connected On", "Expires On", "Days Left", "Token Rotate"].map((head) => (
                <TableCell
                  key={head}
                  sx={{
                    color: '#fff',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    border: '1px solid #ccc', // ensure header borders
                  }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {connect.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
                  '&:hover': {
                    backgroundColor: '#e3f2fd',
                  },
                }}
              >
                <TableCell align="center">{row.PageNumber}</TableCell>
                <TableCell align="center">{row.PageName}</TableCell>
                <TableCell align="center">{row.connectAt}</TableCell>
                <TableCell align="center">{row.expiresOn}</TableCell>

                <TableCell align="center">
                  <Chip
                    label={row.DaysLeft}
                    color={row.DaysLeft.includes('5') ? 'error' : 'success'}
                    size="small"
                  />
                </TableCell>

                <TableCell align="center">
                  <Chip
                    label={row.rotate}
                    color={row.rotate === 'yes' ? 'success' : 'default'}
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