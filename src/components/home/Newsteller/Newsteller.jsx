import styled from "styled-components";
import Image from "next/image";
import React from "react";
import {Container,Grid,Typography,Stack,Box, useTheme} from '@mui/material'

const InputBox = styled.form`
  width: 100%;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  border-radius: 29px;
  input {
    border-radius: 29px;
    width: 100%;
    height: 100%;
    padding: 0.2em 1em;
    font-size: 1.5rem;
    color: #b6b5b5;
    color: black;
    font-weight: 400;
    border: none;
    outline: none;
    &:hover,
    &:focus {
      outline: none;
      border: none;
    }

    &::placeholder {
      font-size: 1.5rem;
      color: #b6b5b5;
    }
  }
  button {
    padding: 0.65em 1.9em;
    background: #181736;
    color: #ffffff;
    font-size: 22px;
    height:52px;
    text-transform: uppercase;
    /* letter-spacing: 0.32em; */
    border: none;
    border-radius: 0px;
    border-bottom-right-radius: 29px;
    border-top-right-radius: 29px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.2s;
    &:hover,
    &:focus {
      outline: none;
      border: none;
      transform: scale(1.1);
    }
  }
  @media only screen and (max-width: 640px) {
    max-width: 100%;
    button {
      padding: 0.4em 1.4em;
      height:52px;
      font-size:12px;
    }
  }
`;

const Newsteller = () => {
  const theme =useTheme()
  return (
    <Box sx={{
      bgcolor:'#DDA60A',
      py:1.5,
      mt:6,
    }}>
    <Container>
    <Grid container spacing={2} py={5} justifyContent='center'>
          <Grid item lg={6} md={6} sm={12}>
            <Stack direction='row' alignItems="center" spacing={2}>
              <Image
                src={`/images/home/newsteller/postsvg.svg`}
                placeholder="blur"
                blurDataURL={`/images/home/newsteller/postsvg.svg`}
                height="50px"
                width="55px"
                alt="post-img"
              />
              <Typography variant="h5" sx={{
                fontWeight: 900,
                fontSize: '33px',
                fontFamily: 'Gothic A1',
                color: '#fff',
                [theme.breakpoints.down('md')]:{
                  fontSize:'20px',
                }
              }}>Get Latest Update & News</Typography>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} sm={12}>
            <InputBox>
              <input type="email" placeholder="Your Email Address.." required />
              <button>subscribe</button>
            </InputBox>
          </Grid>
        </Grid>
      </Container>
      </Box>
  );
};

export default Newsteller;
