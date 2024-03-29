import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Home from "./components/homepage/index";
import Projects from "./components/projects/index";
import Photography from "./components/photography/index";


export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/photography" element={<Photography/>} />
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
