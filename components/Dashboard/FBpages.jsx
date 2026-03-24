'use client';

import React, { useState } from 'react';
import {
  Box,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Typography, Select, MenuItem
} from '@mui/material';

const connectedPages = () => {
  const [connect, setconnect] = useState([
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},

  ]);

  return (
    <Box ml={2} mt={2} mb={2}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Connected Facebook Pages
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Page Number</strong></TableCell>
              <TableCell><strong>Page Name</strong></TableCell>
              <TableCell><strong>Connected On</strong></TableCell>
              <TableCell><strong>Expirs On</strong></TableCell>
              <TableCell><strong>Days Left</strong></TableCell>
              <TableCell><strong>Token Rotate</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {connect.map((connects, index) => (
              <TableRow key={connects.PageNumber}>
                <TableCell>{connects.PageNumber}</TableCell>
                <TableCell>{connects.PageName}</TableCell>
                <TableCell>{connects.connectAt}</TableCell>
                <TableCell>{connects.expiresOn}</TableCell>
                <TableCell>{connects.DaysLeft}</TableCell>
                <TableCell>{connects.rotate}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default connectedPages;
