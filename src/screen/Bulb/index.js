import { Box, Button, Img, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useState } from "react";

const Bulb = () => {
  const [btn, setbtn] = useState("");
  const Buttonon = () => {
    setbtn("buttonon");
  }; 
  const Buttonof =() =>{
    setbtn("buttonof")
  }
  return (
    <Box display={"flex"} justifyContent={"center"}>
      {btn == "buttonon" &&<Img
        src="https://cdn-icons-png.freepik.com/256/1946/1946226.png"
        mt={"15%"}
        // ml={"2%"}
      />}
      {btn =="buttonof" &&<Img
        src="https://cdn-icons-png.flaticon.com/256/445/445738.png"
        mt={"15%"}
        // ml={"2.3%"}
      />}
      <Box display={"flex"} justifyContent={"center"} ml={"-100px"}>
        <Button colorScheme="purple" variant="outline" onClick={Buttonon} position={"absolute"} mt={"5%"} ml={"-20%"}>
          on
        </Button>
       <Button colorScheme="purple" variant="outline" onClick={Buttonof} mt={"5%"} ml={"10%"}  position={"absolute"}>
          of
        </Button>
      </Box>
    </Box>
  );
};
export default Bulb;
