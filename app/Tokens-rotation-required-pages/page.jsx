'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Skeleton,
  Button,
} from '@mui/material';

const ConnectedPages = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);

  // ✅ Rotate token handler
  const handleRotate = async (pageId) => {
    try {
      await axios.post(
        `https://sat-tara-backend.vercel.app/api/pages/rotatenow/${pageId}`
      );
      alert("Token Rotated Successfully 🔥");
      window.location.reload(); // Reload data after rotation
    } catch (error) {
      console.error("Rotate Error:", error);
      alert("Rotation Failed ❌");
    }
  };

  // ✅ Fetch pages
  useEffect(() => {
    axios
      .get("https://sat-tara-backend.vercel.app/api/pages/facebook")
      .then((res) => setPages(res.data.pages || []))
      .catch((err) => console.error("Error fetching pages:", err))
      .finally(() => setLoading(false));
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
            '& th, & td': { border: '1px solid black' },
          }}
        >
          <TableHead>
            {/* Title */}
            <TableRow>
              <TableCell
                colSpan={7}
                sx={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  backgroundColor: '#09362f',
                  color: "white",
                }}
              >
                Connected Facebook Pages
              </TableCell>
            </TableRow>
            {/* Header */}
            <TableRow sx={{ backgroundColor: "#09362f" }}>
              {["P-N", "Page Name", "PageID", "T-Issued On", "T-Expires On", "Days Left", "Token Status"].map((head) => (
                <TableCell
                  key={head}
                  sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {/* ✅ Realistic Skeleton Loader */}
            {loading
              ? [...Array(6)].map((_, rowIndex) => (
                  <TableRow key={rowIndex}>
                    <TableCell align="center"><Skeleton variant="text" width={40} /></TableCell>
                    <TableCell align="center"><Skeleton variant="text" width={120} /></TableCell>
                    <TableCell align="center"><Skeleton variant="text" width={150} /></TableCell>
                    <TableCell align="center"><Skeleton variant="text" width={100} /></TableCell>
                    <TableCell align="center"><Skeleton variant="text" width={100} /></TableCell>
                    <TableCell align="center"><Skeleton variant="text" width={70} /></TableCell>
                    <TableCell align="center"><Skeleton variant="rectangular" width={100} height={30} /></TableCell>
                  </TableRow>
                ))
              : pages.map((row, index) => (
                  <TableRow
                    key={row._id || index}
                    sx={{
                      backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
                      '&:hover': { backgroundColor: '#e3f2fd' },
                    }}
                  >
                    <TableCell align="center">{row.pageNumber}</TableCell>
                    <TableCell align="center">{row.pageName}</TableCell>
                    <TableCell align="center">{row.pageId}</TableCell>
                    <TableCell align="center">
                      {new Date(row.tokenIssuedAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      {new Date(row.tokenExpiresAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        label={`${row.daysLeft} days`}
                        color={
                          row.daysLeft <= 5 ? 'error' :
                          row.daysLeft <= 15 ? 'warning' :
                          'success'
                        }
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="center">
                      {row.status === "rotate-needed" ? (
                        <Button
                          variant="contained"
                          color="warning"
                          size="small"
                          onClick={() => handleRotate(row.pageId)}
                        >
                          Rotate Now
                        </Button>
                      ) : (
                        <Chip
                          label={row.status}
                          color={row.status === "expired" ? "error" : "success"}
                          size="small"
                        />
                      )}
                    </TableCell>
                  </TableRow>
                ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ConnectedPages;