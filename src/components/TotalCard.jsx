import { Box, Button, Divider, Stack, Typography } from "@mui/material";

const TotalCard = ({ delivery = "" || undefined, children }) => {
  return (
    <Stack
      spacing={2}
      sx={{
        width: "405px",
        minHeight: "299px",
        boxShadow:
          "0px 2px 3px 2px #E8F6FC, 0px 8px 12px 4px rgba(0, 155, 144, 0.08)",
        borderRadius: "8px",
        p: "28px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography  sx={{fontWeight:"700", fontSize:"20px", mb: "20px"}}>
        Total
      </Typography>
      <Box
        color="gray"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography fontWeight="400">Sub Total</Typography>
        <Typography fontWeight="700"> Rp. 13.000</Typography>
      </Box>
      {delivery ? (
        <Box
          color="gray"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography fontWeight="400">Pengiriman</Typography>
          <Typography fontWeight="700"> Rp. {delivery}</Typography>
        </Box>
      ) : undefined}
      <Divider />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontWeight="700">Total</Typography>
        <Typography fontWeight="700">Rp. 20.000</Typography>
      </Box>
      {children}
    </Stack>
  );
};

export default TotalCard;
