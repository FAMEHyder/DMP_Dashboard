'use client';

import React, { useState } from 'react';
import {
  Box,
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Typography, Select, MenuItem
} from '@mui/material';

const InvoiceTable = () => {
  const [invoices, setInvoices] = useState([
    { ref: 'INV001', customer: 'John Doe', amount: 200, status: 'Paid' },
    { ref: 'INV002', customer: 'Jane Smith', amount: 450, status: 'Due' },
    { ref: 'INV003', customer: 'Ahmed Khan', amount: 300, status: 'Paid' },
    { ref: 'INV004', customer: 'Fatima Noor', amount: 150, status: 'Due' },
    { ref: 'INV005', customer: 'Ali Rehman', amount: 600, status: 'Paid' },
  ]);

  const handleStatusChange = (event, index) => {
    const updatedInvoices = [...invoices];
    updatedInvoices[index].status = event.target.value;
    setInvoices(updatedInvoices);
  };

  const getColorStyles = (status) => {
    return {
      color: status === 'Paid' ? 'green' : 'red',
      fontWeight: 'bold',
      borderColor: status === 'Paid' ? 'green' : 'red',
    };
  };

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
              <TableCell><strong>Connected Date</strong></TableCell>
              <TableCell><strong>Expiry Date</strong></TableCell>
              <TableCell><strong>Days Left</strong></TableCell>
              <TableCell><strong>Token Rotate</strong></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {invoices.map((invoice, index) => (
              <TableRow key={invoice.ref}>
                <TableCell>{invoice.ref}</TableCell>
                <TableCell>{invoice.customer}</TableCell>
                <TableCell>${invoice.amount}</TableCell>
                <TableCell>
                  <Select
                    value={invoice.status}
                    onChange={(e) => handleStatusChange(e, index)}
                    size="small"
                    fullWidth
                    sx={getColorStyles(invoice.status)}
                  >
                    <MenuItem value="Paid">Paid</MenuItem>
                    <MenuItem value="Due">Due</MenuItem>
                  </Select>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default InvoiceTable;
