import {  IconButton } from "@chakra-ui/react";
import { useColorMode, } from "@/components/ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
      <IconButton variant="outline" onClick={toggleColorMode} size="sm">
        {colorMode === "light" ? <LuSun /> : <LuMoon />}
      </IconButton>
   
  );
};

export default ColorModeSwitch;
