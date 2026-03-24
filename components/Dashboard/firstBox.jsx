'use client';

import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReplayIcon from '@mui/icons-material/Replay';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import UndoIcon from '@mui/icons-material/Undo';

export default function FirstBox() {
    return (
        <Box
            width={'97%'}

            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                padding: 2,
                gap: 2,
            }}
        >
            {/* Left Column */}
            <Box sx={{ width: '48%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Paper
                    elevation={3}
                    sx={{
                        display: 'flex',
                        height: '15vh',
                        alignItems: 'center',
                        padding: 2,
                        gap: 2,
                        justifyContent: 'space-between'
                    }}
                >
                    <ShoppingCartIcon fontSize="large" color="primary" />
                    <Box>
                        <Typography variant="subtitle1" color='gray'>Sales</Typography>
                        <Typography variant="h6" sx={{ textAlign: 'end' }}>5000</Typography>
                    </Box>
                </Paper>

                <Paper
                    elevation={3}
                    sx={{
                        display: 'flex',
                        height: '15vh',
                        alignItems: 'center',
                        padding: 2,
                        gap: 2,
                        justifyContent: 'space-between'

                    }}
                >
                    <ReplayIcon fontSize="large" color="secondary" />
                    <Box>
                        <Typography variant="subtitle1" color='gray'>TRR Pages</Typography>
                        <Typography variant="h6" sx={{ textAlign: 'end' }}>5000</Typography>
                    </Box>
                </Paper>
            </Box>

            {/* Right Column */}
            <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Paper
                    elevation={3}
                    sx={{
                        display: 'flex',
                        height: '15vh',
                        alignItems: 'center',
                        padding: 2,
                        gap: 2,
                        justifyContent: 'space-between'

                    }}
                >
                    <LocalMallIcon fontSize="large" color="success" />
                    <Box >
                        <Typography variant="subtitle1" color='gray'>Purchase</Typography>
                        <Typography variant="h6" sx={{ textAlign: 'end' }}>5000</Typography>
                    </Box>
                </Paper>

                <Paper
                    elevation={3}
                    sx={{
                        display: 'flex',
                        height: '15vh',
                        alignItems: 'center',
                        padding: 2,
                        gap: 2,
                        justifyContent: 'space-between'

                    }}
                >
                    <UndoIcon fontSize="large" color="error" />
                    <Box>
                        <Typography variant="subtitle1" color='gray'>Purchase Return</Typography>
                        <Typography variant="h6" sx={{ textAlign: 'end' }}>5000</Typography>
                    </Box>
                </Paper>
            </Box>

        </Box>
    );
}
