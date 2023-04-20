import imgLinkify from "./images/Linkify.png";
import imgCart from "./images/Cart.png";
import imgShortly from "./images/Shortly.png";
import imgDashboard from "./images/Dashboard.png";
import imgMentro from "./images/mentro.png";
import imgRecipe from "./images/Recipe.png";

const projects = [
  {
    name: "Linkify",
    image: imgLinkify,
    description:
      "Multiuser application with search, filter, grouping, authentication, image uploads",
    video: "https://youtu.be/DqdN4DeHf-g",
    code: "https://github.com/pgtir/Contact-Manager-Frontend",
    deployedLink: "https://linkify.onrender.com/",
    techStack: "React, Redux, Material UI, Node, Express, MongoDB",
  },
  {
    name: "Recipe Master",
    image: imgRecipe,
    description:
      "Search food recipe, Get recipe details , Adjust servings, Upload new recipe and Interactive Feedback Section",
    video: "https://youtu.be/emfZe4C3mfk",
    code: "https://github.com/pgtir/Recipe-Master",
    deployedLink: "https://pgtir.github.io/Recipe-Master/",
    techStack: "HTML CSS JavaScript",
  },
  {
    name: "Mentro",
    image: imgMentro,
    description: "Profile overview of various mentors with beautiful design and stunning animations",
    video: "https://user-images.githubusercontent.com/87230033/224326839-7465dc8c-d100-4f7f-adfa-6b83133f7484.gif",
    code: "https://github.com/pgtir/mentro_assignment",
    deployedLink: "https://mentro-assignment-jy2d.onrender.com/",
    techStack: " React JS and CSS",
  },
  {
    name: "React Theme Switcher",
    image: imgDashboard,
    description:
      "Responsive Dashboard with Theme Switching Feature",
    video: "",
    code: "https://github.com/pgtir/React-Social-Media-Dashboard",
    deployedLink: "https://suspicious-agnesi-e2493d.netlify.app/",
    techStack: " React + Bootstrap",
  },
  {
    name: "Redux Shopping Cart",
    image: imgCart,
    description: "Application for CRUD operations on a shopping cart",
    video: "",
    code: "https://github.com/pgtir/Redux-Shopping-Cart",
    deployedLink: "https://brilliant-maamoul-b79732.netlify.app/",
    techStack: "React + Redux",
  },

  {
    name: "Shortly",
    image: imgShortly,
    description: "Shorten any entered URL, Copy new URL to clipboard",
    video: "https://youtu.be/Q78RS3B7nmE",
    code: "https://github.com/pgtir/Link-Shortening-API-Project",
    deployedLink: "https://pgtir.github.io/Link-Shortening-API-Project/",
    techStack: "HTML, CSS, JavaScript",
  },


];

export default projects;
