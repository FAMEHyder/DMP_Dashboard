'use client'; // Needed if you're using Next.js App Router

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import {
  PieChart, Pie, Cell, Tooltip as RechartsTooltip, Legend,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';

const pieData = [
  { name: 'Product A', value: 400 },
  { name: 'Product B', value: 300 },
  { name: 'Product C', value: 300 },
  { name: 'Product D', value: 200 },
];

const barData = [
  { day: 'Mon', Sales: 1000, Purchase: 600 },
  { day: 'Tue', Sales: 1200, Purchase: 900 },
  { day: 'Wed', Sales: 800, Purchase: 700 },
  { day: 'Thu', Sales: 1600, Purchase: 1400 },
  { day: 'Fri', Sales: 900, Purchase: 600 },
  { day: 'Sat', Sales: 1700, Purchase: 1200 },
  { day: 'Sun', Sales: 1400, Purchase: 1000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function ChartsPage() {
  return (
  
      <Grid container spacing={4} ml={2}>
{/* hkghkgk */}
        {/* Pie Chart - Top Selling Products  */}
        <Grid  width={'46%'}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Top Selling Products
            </Typography>
            <PieChart width={350} height={300}>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <RechartsTooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>

        {/* Bar Chart - Weekly Sales vs Purchases */}
        <Grid >
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              This Week's Sales vs Purchase
            </Typography>
            <BarChart width={500} height={300} data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <RechartsTooltip />
              <Legend />
              <Bar dataKey="Sales" fill="#1976d2" />
              <Bar dataKey="Purchase" fill="#388e3c" />
            </BarChart>
          </Paper>
        </Grid>
      </Grid>
  );
}
