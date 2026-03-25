import Header from "./header/page.jsx";
import Sidebar from "./Sidebar/page.jsx";
import { Box, Typography } from '@mui/material';
import "./layout.css"


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <Header />

        <Box display={'flex'} mt={4}>

          {/* To adjust the side bar  */}
          <Box>
            <Sidebar />
          </Box>


          {/* The main component */}

          <Box width={'100%'} ml={32} mt={4}>
            <Typography fontSize={25} fontWeight={600} textAlign={"center"} color="Balck">Overview</Typography>
            {children}</Box>

        </Box>

        
      </body>
    </html>
  );
}
