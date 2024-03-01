import React, { useState } from "react";
import "./index.css";
import {
  Button,
  Checkbox,
  Text,
  Input,
  Center,
  Box,
  flexbox,
} from "@chakra-ui/react";
import {
  PhoneIcon,
  AddIcon,
  WarningIcon,
  EditIcon,
  DeleteIcon,
  CircleIcon,
} from "@chakra-ui/icons";
import purpleCircle from "../../assets/image/Purple_Circle.png";

function Todo() {
  const [count, setCount] = useState(0);
  const [todos, settodo] = useState([]);
  const [value, setvalue] = useState("");
  const [del, setdel] = useState("");
  // const [input,setinput]= useState("")
  // function increment() {
  //   setCount(count + 1);
  // }

  // function decrement() {
  //   setCount(count - 1);

  //   if (count == 0) {
  //     alert("your number is lowest");
  //     return setCount(0);
  //   }
  // }

  function addVal() {
    todos.push(value);
    settodo([...todos]);
    setvalue("");
  }

  function deleteTodo(name) {
    todos.splice(name, 1);
    settodo([...todos]);
  }
  function update(index,get){
    todos[index] = get.target.value
    settodo([...todos])
    setvalue("")
  }
  return (
    <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
      <Box>
        <Text fontSize={"50px"} fontWeight={"700"} color={"blueviolet"}>
          Todo
        </Text>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"100%"}
      >
        <Input
          value={value}
          placeholder="what's to do"
          onChange={(e) => setvalue(e.target.value)}
          mt={"15%"}
          w={"40%"}
          id="input"
        />
        <Box mt={"15%"} ml={"0.5%"}>
          <Button colorScheme="purple" variant="outline" onClick={addVal}>
            Add task
          </Button>
        </Box>
      </Box>

      {todos.map((val, index) => {
        console.log(index);
        return (
          <Box
            width={"100%"}
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            mt={"40px"}
          >
            <Box
              display={"flex"}
              w={"40%"}
              alignItems={"center"}
              h={"50px"}
            >
              <Input
                value={val}
                placeholder="what's to do"
                onChange={(get)=> update(index,get)}
                w={"100%"}
                id="input"

              />
            </Box>
            {/* <Box>
              <a href="#">
                <EditIcon
                  color={"blueviolet"}
                  ml={"10px"}
                  width={"25px"}
                  height={"40px"}
                />
              </a>
            </Box> */}
            <Box>
              <a href="#">
                {" "}
                <DeleteIcon
                  color={"blueviolet"}
                  ml={"5px"}
                  width={"20px"}
                  height={"40px"}
                  onClick={() => deleteTodo(index)}
                />
              </a>
            </Box>
          </Box>
        );
      })}
    </Box>
    //  <Box display={"flex"} flexDirection={"row"}>Add</Box>
  );
}

export default Todo;
