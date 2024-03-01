import { Box, Button, Text } from "@chakra-ui/react";
import { color } from "framer-motion";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };
  const decrementCounter =() =>{
    setCount(count -1);
    if(count==0){
        alert("your number is lowest")
        return setCount(count)
    }
  }
  return (
    <Box>
      {count <= 18 ? (
        <Text
          display={"flex"}
          justifyContent={"center"}
          fontWeight={"bold"}
          mt={"50px"}
          fontSize={"30px"}
          color={"#00d100"}
        >
          You are below 18
        </Text>
      ) : (
        <Text
          display={"flex"}
          justifyContent={"center"}
          fontWeight={"bold"}
          mt={"50px"}
          fontSize={"30px"}
          color={"red"}
        >
          You are 18+
        </Text>
      )}
      <Text
        display={"flex"}
        justifyContent={"center"}
        fontWeight={"bold"}
        mt={"150px"}
        fontSize={"30px"}
        color={"blueviolet"}
      >
        {count}
      </Text>
      <Button
        colorScheme="purple"
        variant="outline"
        onClick={decrementCounter}
        display={"flex"}
        mt={"20%"}
        ml={"35%"}
        width={"100px"}
        fontWeight={"bold"}
        fontSize={"35px"}
        position={"absolute"}

      >
       -
      </Button>
      <Button
        colorScheme="purple"
        variant="outline"
        onClick={incrementCounter}
        display={"flex"}
        mt={"20%"}
        position={"absolute"}
        ml={"60%"}
        width={"100px"}
        fontWeight={"bold"}
        fontSize={"35px"}
      >
        +
      </Button>
    </Box>
  );
};

export default Counter;
