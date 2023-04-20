import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Chip, Link, Stack } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

const ProjectCard = (props) => {
  const { name, description, code, video, deployedLink, image, techStack } =
    props;

  return (
    <>
      <Card sx={{maxWidth: 430, boxShadow: 3 ,transition: "1s", ":hover": {
      transform: "scale(1.05)",
      zIndex: "2",
     boxShadow: '4',
     elevation: '3'
    }}}>
        <CardActionArea href={deployedLink}>
          <CardMedia
            component="img"
            height="240"
            width="300"
            image={image}
            alt="green iguana"
          />
        </CardActionArea>
        <CardContent>
          <Typography
            color="primary.dark"
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: "500" }}
          >
            {name}
          </Typography>
          <Typography color="secondary.main" mb={3} variant="body2">
            {description}
          </Typography>
          <Chip
            sx={{ color: "primary.dark", borderColor: "primary.dark", bgcolor: "primary.light" }}
            label={techStack}
            variant="outlined"
          />
          <Stack mt={3} direction="row" spacing={3}>
            {video && (
                <Link href={video} sx={{textDecoration: 'none'}}>
              <Stack direction="row" alignItems="center" sx={{cursor: "pointer"}} spacing={1}>
                <PlayCircleOutlineIcon
                  sx={{ cursor: "pointer", color: "primary.main" }}
                />
                <Typography sx={{ color: "primary.main" }} variant="body2">
                  Watch Video
                </Typography>
              </Stack></Link>
            )}
            <Link href={deployedLink} sx={{textDecoration: 'none'}}>
            <Stack direction="row" alignItems="center" sx={{cursor: "pointer"}} spacing={1}>
              <VisibilityOutlinedIcon
                sx={{ cursor: "pointer", color: "primary.main" }}
              />
              <Typography sx={{ color: "primary.main" }} variant="body2">
                Go Live
              </Typography>
            </Stack>
            </Link>
            <Link href={code} sx={{textDecoration: "none"}}>
            <Stack sx={{cursor: "pointer"}} direction="row" alignItems="center" spacing={1}>
              <CodeOutlinedIcon
                sx={{ cursor: "pointer", color: "primary.main" }}
              />
              <Typography sx={{ color: "primary.main" }} variant="body2">
                See Code
              </Typography>
            </Stack>
                </Link>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
