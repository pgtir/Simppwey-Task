import React from 'react'
import { Box, Card, CardContent, Link, Stack, Typography } from '@mui/material'
import OverviewCard from './OverviewCard'
import ImgPrgti from '../images/Prgti.jpg'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const Overview = () => {
  return (
    <>
    <Box mb={4} sx={{
        display: 'flex',
        gap: '2%',
    }}>
 <OverviewCard  intro={true} bgColor="seconday.main" color="white">
    <Stack  sx={{ height: "100%"}}  direction='row' alignItems='center' spacing={4}>
    <Box >
        <img height={100} width={100} style={{'borderRadius': '50%', 'objectFit': 'cover'}} src={ImgPrgti} alt="" />
    </Box>
    <Stack  justifyContent='center'>
    <Typography variant='h5'sx={{fontWeight: '600', color: 'primary.dark'}}  gutterBottom>Hi, SimppWey </Typography>
    <Typography sx={{color: "primary.dark"}} variant='h6' gutterBottom>I am Pragati Rawat</Typography>
    <Typography sx={{color: "secondary.main"}} variant='subtitle1' gutterBottom>A Passionate Frontend Web Developer who loves playing with user interfaces</Typography>
    </Stack>
    </Stack>

 </OverviewCard>
 <OverviewCard>
    <Stack justifyContent='center' alignItems='center'>
    <Typography variant='h6' sx={{fontWeight: "600", color: "primary.dark"}} mb={1}>Profile Links</Typography>
    <Box>
        <Stack alignItems='center' mb={2}>
            <Link href='https://www.linkedin.com/in/pragati-rawat-386772185/' sx={{ cursor: 'pointer', textDecoration: 'none'}}>
            <LinkedInIcon/>
            </Link>
            <Typography variant='p' sx={{color: "primary.dark"}}>Linkedin</Typography>
        </Stack>
        <Stack alignItems='center'>
            <Link href='https://github.com/pgtir' sx={{color: "black", cursor: 'pointer', color: "primary.dark", textDecoration: 'none'}}>
            <GitHubIcon/>
            </Link>
            <Typography variant='p' sx={{color: "primary.dark"}}>Github</Typography>
        </Stack>
    </Box>
    </Stack>
 </OverviewCard>
 <OverviewCard>
 <Stack justifyContent='center' alignItems='center'>
    <Typography variant='h6' sx={{fontWeight: "600", color: "primary.dark"}} mb={1}>Skills</Typography>
    <Box sx={{width: "100%"}}>
        <Box  sx={{display: 'flex', justifyContent:'space-between', borderRadius: '5px'}} mb={2}>
            <Typography color="primary.dark" variant='p'>React JS</Typography>
            <Stack direction="row" color="secondary.main">
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarHalfIcon/>
            <StarBorderIcon/>
            </Stack>
        </Box>
     
    </Box>
    <Box sx={{width: "100%"}}>
        <Box  sx={{display: 'flex', justifyContent:'space-between', borderRadius: '5px'}} mb={2}>
            <Typography variant='p' color="primary.dark">JavaScript</Typography>
            <Stack direction="row" color="secondary.main">
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            </Stack>
        </Box>
     
    </Box>
    <Box sx={{width: "100%"}}>
        <Box  sx={{display: 'flex', justifyContent:'space-between', borderRadius: '5px'}} mb={2}>
            <Typography color="primary.dark" variant='p'>CSS</Typography>
            <Stack color="secondary.main" direction="row">
            <StarIcon/>
            <StarIcon/>
            <StarIcon/>
            <StarBorderIcon/>
            <StarBorderIcon/>
            </Stack>
        </Box>
     
    </Box>
    </Stack>
 </OverviewCard>
    </Box>
    </>
  )
}

export default Overview