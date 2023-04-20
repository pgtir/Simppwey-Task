import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../projects";
console.log(projects);

const Projects = () => {
  return (
    <>
      <Box mb={4}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
           color='primary.dark'
            mb={3}
            variant="h5"
            sx={{
              borderBottom: "1.5px solid ",
              borderColor: 'primary.dark',
              width: "fit-content",
              fontWeight: "600",
            }}
          >
            {" "}
            My Projects
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item lg={4} md={6} sm={12}>
              <ProjectCard
                name={project.name}
                description={project.description}
                code={project.code}
                video={project.video}
                deployedLink={project.deployedLink}
                image={project.image}
                techStack={project.techStack}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
