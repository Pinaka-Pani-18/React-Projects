import { Button, Center, Icon, Stack, Text, VStack } from "@chakra-ui/react";
import Card from "../../components/Card";

import { BsFillPatchCheckFill } from "react-icons/bs";

const RegisterSuccessful = () => {
  return (
    <Center minH={"100vh"}>
      <Card>
        <VStack spacing={6}>
          <Icon as={BsFillPatchCheckFill} boxSize={12} color={"green"} />
          <Stack textAlign={"center"} spacing={4}>
            <Text textStyle={"h4"} color={"p.black"} fontWeight={"medium"}>
              Successfully Registration
            </Text>
            <Text textStyle={"p2"} color={"black.60"}>
              Hurray! You have successfully created your account. Enter the app
              to explore all it’s features.
            </Text>
          </Stack>
          <Button w={"full"} fontWeight={"medium"}>
            Enter the App
          </Button>
        </VStack>
      </Card>
    </Center>
  );
};

export default RegisterSuccessful;
