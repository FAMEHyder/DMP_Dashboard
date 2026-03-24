'use client';

import { Box, Grid, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

const stockData = [
  { UserName: 'M ali', email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd", status : "Active"},
  { UserName: 'M ali', email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd", status : "Active"},
  { UserName: 'M ali', email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd", status : "Active"},
  { UserName: 'M ali', email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd", status : "Active"},
  { UserName: 'M ali', email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd", status : "Active"},
  { UserName: 'M ali', email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd", status : "Active"},
  { UserName: 'M ali', email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd", status : "Active"},
  { UserName: 'M ali', email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd", status : "Active"},
  { UserName: 'M ali', email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd", status : "Active"},
  { UserName: 'M ali', email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd", status : "Active"},
  { UserName: 'M ali', email: 'abc@gmail.com', phoneNumber: '341341211211', Adress: "hassan colony skd", status : "Active"},

];


export default function DashboardPage() {
  return (
    <Box ml={2} mt={2} >
      <Grid container spacing={4} >
        <Grid item xs={12} md={6} width={"100%"}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Active Users
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>User Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stockData.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{row.UserName}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.phoneNumber}</TableCell>
                    <TableCell>{row.Adress}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell sx={{ color: 'red', fontWeight: 'bold' }}>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>

      </Grid>
    </Box>
  );
}
