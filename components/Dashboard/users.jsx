'use client';

import { Box, Grid, Paper, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

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

const pieData = [
  { name: 'Toggy Business', value: 25.6 },
  { name: 'Solit IT', value: 32.0 },
  { name: 'Walk-In Customer', value: 23.8 },
  { name: 'Medizo Enterprize', value: 9.9 },
  { name: 'Coze IT', value: 8.7 },
];

const COLORS = ['#7D3C98', '#D2B4DE', '#2E86C1', '#F4D03F', '#EC7063'];

export default function DashboardPage() {
  return (
    <Box ml={2} mt={2}>
      <Grid container spacing={4}>
        {/* Left - Stock Alert */}
        <Grid item xs={12} md={6}>
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

        {/* Right - Donut Chart */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' ,height:'92%',width:'97%'}}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Top 05 Customer (January)
            </Typography>
            <PieChart width={350} height={250}>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={70}
                innerRadius={40}
                label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
