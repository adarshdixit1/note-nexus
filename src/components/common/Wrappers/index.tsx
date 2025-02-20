import { Box } from "@mui/material";
import { LayoutProps } from "../../../schemas";
import { Sidebar } from "../Sidebar";
import { Header } from "../Header";

export const Wrappers = ({ children }: LayoutProps) => {
  return (
    <>
      <Box>
        <Header />
        <Box sx={{ display: "flex", flex: 1 }}>
          <Sidebar />
          <Box
            sx={{
              flex: 1,
              overflow: "auto",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};
