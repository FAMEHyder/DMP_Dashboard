// 'use client';

// import React, { useState } from 'react';
// import {
//   Box,
//   Table, TableBody, TableCell, TableContainer, TableHead,
//   TableRow, Paper, Typography, Select, MenuItem
// } from '@mui/material';

// const connectedPages = () => {
//   const [connect, setconnect] = useState([
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},
//     { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft:"60 days" ,rotate:"yes"},

//   ]);

//   return (
//     <Box ml={2} mt={2} mb={2}>
//       <Typography variant="h6" fontWeight="bold" gutterBottom>
//         Connected Facebook Pages
//       </Typography>

//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell><strong>Page Number</strong></TableCell>
//               <TableCell><strong>Page Name</strong></TableCell>
//               <TableCell><strong>Connected On</strong></TableCell>
//               <TableCell><strong>Expirs On</strong></TableCell>
//               <TableCell><strong>Days Left</strong></TableCell>
//               <TableCell><strong>Token Rotate</strong></TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {connect.map((connects, index) => (
//               <TableRow key={connects.PageNumber}>
//                 <TableCell>{connects.PageNumber}</TableCell>
//                 <TableCell>{connects.PageName}</TableCell>
//                 <TableCell>{connects.connectAt}</TableCell>
//                 <TableCell>{connects.expiresOn}</TableCell>
//                 <TableCell>{connects.DaysLeft}</TableCell>
//                 <TableCell>{connects.rotate}</TableCell>

//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Box>
//   );
// };

// export default connectedPages;


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
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft: "34 days", rotate: "Rotated" },
    { PageNumber: '2', PageName: 'Ali Store', connectAt: "01-03-2026", expiresOn: "01-04-2026", DaysLeft: "5 days", rotate: "Rotate Now" },
    { PageNumber: '1', PageName: 'haji ali', connectAt: "02-04-2026", expiresOn: "02-06-2026", DaysLeft: "30 days", rotate: "Rotated" },
    { PageNumber: '2', PageName: 'Ali Store', connectAt: "01-03-2026", expiresOn: "01-04-2026", DaysLeft: "5 days", rotate: "Rotate Now" },
  ]);

  return (
    <Box m={3}>
      <Typography variant="h5" fontWeight="bold" mb={2} textAlign={"center"}>
        Connected Facebook Pages
      </Typography>

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
            <TableRow sx={{ backgroundColor: '#1976d2' }}>
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