/* eslint-disable react/prop-types */
import { Box, HStack, Heading, Icon } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaUserCircle } from "react-icons/fa";

const TopNav = ({ title }) => {
  return (
    <Box>
      <HStack
        h={16}
        justifyContent={"space-between"}
        mx={"auto"}
        maxW={"70rem"}
      >
        <Heading fontWeight={"medium"} fontSize={"28px"}>
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaUserCircle} fontSize={"24px"} />
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Help</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
