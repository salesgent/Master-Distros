import React from 'react'
import { Box, Link, Stack, Divider } from '@mui/material'
export default function NavigationBar() {
  return (
    <Box sx={{
      bgcolor: '#068176',
    }}>
      <Stack direction="row"
        alignItems="center"
        spacing={2}
        justifyContent='center'
        divider={<Divider orientation="vertical" flexItem />}
        sx={{
          py: 1.5,
          a: {
            color: '#fff',
            fontWeight: 700,
            fontSize: '14px',textTransform:'uppercase'
          },
          hr:{
            borderColor:'#ffff'
          }
        }}
      >
        <Link underline='none' href="#">Accepted Debit/Credit Card & Apple Pay</Link>
        <Link underline='none' href="#">8 AM to 1 AM Online Customer Service</Link>
        <Link underline='none' href="#">USA Delivery Within One Day</Link>     
      </Stack>
    </Box>
  )
}
