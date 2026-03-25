
'use client';

import React, { useState } from 'react';
import {
  Box,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Typography, Chip
} from '@mui/material';

const ConnectedPages = () => {
  const [connect] = useState([
    { SerialNo :"1", FullName:"M ali" ,UserName: 'lee',Gender :"male", email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd",},
    { SerialNo :"2", FullName:"M ali" ,UserName: 'lee',Gender :"male", email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd",},
    { SerialNo :"3", FullName:"M ali" ,UserName: 'lee',Gender :"male", email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd",},
    { SerialNo :"4", FullName:"M ali" ,UserName: 'lee',Gender :"male", email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd",},
    { SerialNo :"5", FullName:"M ali" ,UserName: 'lee',Gender :"male", email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd",},
    { SerialNo :"6", FullName:"M ali" ,UserName: 'lee',Gender :"male", email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd",},

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
              border: '1px solid black',
            },
          }}
        >
          <TableHead>
          <TableRow>
              <TableCell
                colSpan={7}
                sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  backgroundColor: '#09362f',
                  color:"white"
                }}
              >
                Active Users
              </TableCell>
            </TableRow>
            <TableRow sx={{ backgroundColor: "#09362f"}}>
              {["S No. #", "Full Name", "User Name","Gender" , "Email", "Phone Number", "Address"].map((head) => (
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
                <TableCell align="center">{row.SerialNo}</TableCell>
                <TableCell align="center">{row.FullName}</TableCell>
                <TableCell align="center">{row.UserName}</TableCell>
                <TableCell align="center">{row.Gender}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.phoneNumber}</TableCell>
                <TableCell align="center">{row.Adress}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ConnectedPages;