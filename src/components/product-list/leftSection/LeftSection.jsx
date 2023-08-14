import React from "react";
import { GiAppleSeeds } from "react-icons/gi";
/////
import { DropContent, DropDownHeading, LeftNavContainer } from "./Left.style";
import { useDatafetcher } from "../../../utilities/hooks/useDatafetcher";
import NavDrawer from "../../Navigation/NavDrawer/NavDrawer";
// import Features from "../../home/Features/Features";
import Image from "next/image";
import { Box } from "@mui/material";

const LeftSection = () => {
  const { data, error } = useDatafetcher(
    "/brand?name=appl&page=0&size=2&sort=name&sortDirection=ASC",
    true
  );

  return (
    <LeftNavContainer>
      {/* <Box mb={2} sx={{ width: "100%" }}>
        <DropDownHeading>Brands</DropDownHeading>
        <DropContent style={{ padding: " 0em 1em 0em 0em" }}>
          {data?.content?.map((brand, i) => (
            <Box key={Math.random()} sx={{ padding: "1em 0em 1em 1.5em" }}>
              <p key={i}>
                <GiAppleSeeds className="icon" />
                {brand?.name}
              </p>
            </Box>
          ))}
        </DropContent>
      </Box> */}
      <DropDownHeading>Filter</DropDownHeading>
      <DropContent style={{ padding: " 0em 1em 1.2em 0em" }}>
        <NavDrawer onListPage={true} />
      </DropContent>
      {/* <Features onListPage={true} /> */}
    </LeftNavContainer>
  );
};

export default LeftSection;
