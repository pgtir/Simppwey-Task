import React from "react";
import { Card, CardContent } from "@mui/material";
const OverviewCard = (props) => {
    console.log(props.intro)
  return (
    <>
      <Card  sx={
        {flexBasis: `${props.intro ? "60%" : "30%"}`,
         padding: '15px',
         boxShadow: 3,
        
        }}>
        {props.children}
      </Card>
    </>
  );
};

export default OverviewCard;
