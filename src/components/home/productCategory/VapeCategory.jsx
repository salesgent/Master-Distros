import React from "react";
import { Container, Grid, Paper, Stack, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const data = [
  {
    img: "vape",
    name: "E-LIQUID",
    detail: "Browse the best brands and flavours",
  },
  {
    img: "vape1",
    name: "VAPE COILS",
    detail: "Browse the best brands and flavours",
  },
  {
    img: "vape2",
    name: "VAPE MODS",
    detail: "Browse the best brands and flavours",
  },
  {
    img: "vape3",
    name: "VAPE POPS",
    detail: "Browse the best brands and flavours",
  },
  {
    img: "vape4",
    name: "VAPING KITS",
    detail: "Browse the best brands and flavours",
  },
];

const useStyles = makeStyles({
  root: {
    borderRadius: "50%",
    width: "207px",
    height: "207px",
    border: "1px solid #EEEEEE",
    display: "flex",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    background: "tranparent",
  },
  img: {
    height: 99,
    width: 66,
  },
});
export default function VapeCategory() {
  const classes = useStyles();
  return (
    <Box py={5} bgcolor="#fff">
      <Container>
        <Stack
          spacing={2}
          alignItems="center"
          justifyContent="center"
          direction="row"
          sx={{
            display: {
              md: "flex",
              xs: "none",
            },
          }}
        >
          {data.map((v) => (
            <Paper elevation={0} class={classes.root} key={Math.random()}>
              <Stack
                justifyContent="center"
                textAlign="center"
                alignItems="center"
                p={4}
              >
                <img
                  src={`/images/home/landing/${v.img}.png`}
                  alt="landing-img"
                  className={classes.img}
                />
                <Typography variant="h6" color="error" fontWeight={600}>
                  {v.name}
                </Typography>
                <Typography variant="body2">{v.detail}</Typography>
              </Stack>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
