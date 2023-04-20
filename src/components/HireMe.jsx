import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const HireMe = () => {
  return (
    <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Typography variant='h6' py={1} px={4} sx={{bgcolor: "secondary.main", color:"primary.light", borderRadius: "5px", cursor: "pointer", transition: "1s", ":hover" : {
            bgcolor: "primary.main"
        }}} onClick={() => alert("THANK YOU :-)")}>Hire Me!</Typography>
    </Box>
  )
}

export default HireMe