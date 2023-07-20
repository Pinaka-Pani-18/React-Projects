import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

const SideNav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "DashBoard",
      link: "/",
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      boxShadow={{
        base: "none",
        lg: "lg",
      }}
      justifyContent={"space-between"}
      width={{
        base: "full",
        lg: "16rem",
      }}
      height={"100vh"}
      bg={"white"}
    >
      <Box>
        <Heading textAlign={"center"} fontSize={"20px"} as={"h1"} pt={"3.5rem"}>
          @DEVELOPERPANI
        </Heading>
        <Box mt={"6"} mx={"3"}>
          {navLinks.map((nav) => {
            return (
              <Link key={nav.text} to={nav.link}>
                <HStack
                  borderRadius={"10px"}
                  color={"#797E82"}
                  px={"3"}
                  py={"4"}
                  _hover={{ bg: "#f3f3f7", color: "#171717" }}
                  cursor={"pointer"}
                >
                  <Icon as={nav.icon} />
                  <Text fontWeight="medium" fontSize={"14px"}>
                    {nav.text}
                  </Text>
                </HStack>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box mb={"6"} mx={"3"}>
        <Link to={"/support"}>
          <HStack
            borderRadius={"10px"}
            color={"#797E82"}
            px={"3"}
            py={"4"}
            _hover={{ bg: "#f3f3f7", color: "#171717" }}
            cursor={"pointer"}
          >
            <Icon as={BiSupport} />
            <Text fontWeight="medium" fontSize={"14px"}>
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
