import { Box, Typography } from "@mui/material";
import { styles } from "./style";

const Index = () => {
  return (
    <Box sx={{ m: 0, backgroundColor: "red" }}>
      <Box sx={{ ...styles.backgroundImageContainer }}>
        <Box sx={{ ...styles.container }}>
          <Box>
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: "700",
                letterSpacing: "2px",
                lineHeight: "1",
              }}
            >
              Welcome to
            </Typography>
            <Typography
              sx={{
                fontSize: "60px",
                fontWeight: "700",
                letterSpacing: "2px",
                color: "#ffa500",
                lineHeight: "1",
              }}
            >
              B.tech
            </Typography>
          </Box>
        </Box>
          <Box
            sx={{
              border: "2px solid #fff",
              padding: "5px",
              margin: "5px",
              borderRadius: "5px",
            }}
          >
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <Typography sx={{padding:"2px",color:"#fff", backgroundColor:"#000"}} >Previous Year Question Paper</Typography>
            </Box>
          </Box>
      </Box>
    </Box>
  );
};

export default Index;
