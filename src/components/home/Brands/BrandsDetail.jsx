import React from 'react'
import Image from "next/image";
import { Box, Container, Grid, Typography } from '@mui/material';

const data =[
     {
          name:' New to Vaping?',
          detail:'Everything you need',
          img:'/images/home/features/add 1.png'
     },
     {
          name:'ELF BAR',
          detail:'Shop the Entire Range. Multi-buy Offers Available',
          img:'/images/home/features/add 2.png'
     },
] 

export default function BrandsImg() {
     return (
          <Box mb={3}>
               <Container>
                    <Grid container spacing={4}>
                         {data.map((v)=>(
                         <Grid item lg={6} md={6} sm={12} xs={12} key={Math.random()}>
                              <Box sx={{
                                   position: 'relative',
                                   height:'451px',
                                   // span: {
                                   //      width: '100% !important'
                                   // }
                              }}
                              >
                                   <Image
                                        src={v.img}
                                        height={451}
                                        width='100%'
                                        objectFit="cover"
                                        layout='fill'
                                   />
                              <Box sx={{
                                   position:'absolute',
                                   top:'10%',     
                                   width:'100%',
                                   textAlign:'center'
                              }}>
                                   <Typography variant='h4'
                                        fontWeight={900}
                                        fontFamily='Gothic A1'
                                        sx={{ fontSize: '36px', color: '#FFFFFF' }}
                                   >
                                       {v.name}
                                   </Typography>
                                   <Typography variant='body1'
                                        fontWeight={400}
                                        fontFamily='Gothic A1'
                                        sx={{ fontSize: '17px', color: '#FFFFFF' }}
                                   >
                                        {v.detail}
                                   </Typography>
                              </Box>
                              </Box>
                         </Grid>
                         ))}
                    </Grid>
               </Container>
          </Box>
     )
}
