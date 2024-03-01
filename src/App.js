import { useState } from "react";
import Counter from "./screen/Counter";
import Todo from "./screen/Todo";
import { Button, ChakraProvider, Text, Box } from "@chakra-ui/react";
import { steps } from "framer-motion";
import Bulb from "./screen/Bulb";
function App() {
  const [app, setapp] = useState("");

  const todoApp = () => {
    setapp("todo");
  };

  const counter = () => {
    setapp("counter");
  };
  const bulb =()=>{
    setapp("bulb")
  }

  return (
    <ChakraProvider>
     {app =="bulb" && <Bulb/>}
      {app == "todo" && <Todo />}
      {app == "counter" && <Counter />}
      {app != "todo" && app != "counter" && app !="bulb" && (
         
         
        <Box display={"flex"}
        justifyContent={"center"}>
          <Text color={"blueviolet"} fontSize={"2.5rem"} fontWeight={"bold"} position={"absolute"} mt={"50px"}>Select App,s </Text>
          <Button
            colorScheme="purple"
            variant="outline"
            onClick={todoApp}
            // ml={"10%"}
            mt={"400px"}
            width={"200px"}
            

          >
            Todo
          </Button>
          <Button
            colorScheme="purple"
            variant="outline"
            onClick={counter}
            mt={"400px"}
            width={"200px"}
            ml={"15%"}
          >
            Counter
          </Button>
          <Button
            colorScheme="purple"
            variant="outline"
            onClick={bulb}
            mt={"400px"}
            width={"200px"}
            ml={"15%"}
          >
          Bulb
          </Button>
        </Box>
      )}
    </ChakraProvider>
  );
}

export default App;
