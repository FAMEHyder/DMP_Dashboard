import Header from "./header/page.jsx";
import Sidebar from "./Sidebar/page.jsx";
import { Box } from '@mui/material';



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
          <Box width={'100%'} ml={20}>{children}</Box>

        </Box>

        
      </body>
    </html>
  );
}
