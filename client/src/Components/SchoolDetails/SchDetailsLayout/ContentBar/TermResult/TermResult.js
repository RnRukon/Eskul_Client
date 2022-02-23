import { Box, Container, Typography } from "@mui/material";

import React from "react";

const TermResult = () => {
  return (
    <Container>
      <Box
        sx={{
          p: "10px 100px 10px 15px",
          backgroundColor: "#01479b",
          borderRadius: "0px 100px 0px 0px",
          width: "10%",
          mt: 17,
          ml: 25,
          ml: { xs: 0, sm: 0, md: 25 },
          mt: { xs: 5, sm: 5 },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "14px",
          }}
        >
          Term Result
        </Typography>
      </Box>
    </Container>
  );
};

export default TermResult;
