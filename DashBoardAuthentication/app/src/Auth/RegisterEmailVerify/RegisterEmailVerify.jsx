import {
  Button,
  Center,
  Container,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Card from "../../components/Card";

import { MdEmail } from "react-icons/md";

const RegisterEmailVerify = () => {
  return (
    <Center minH={"100vh"}>
      <Card>
        <VStack spacing={6}>
          <Icon as={MdEmail} boxSize={12} color={"p.purple"} />
          <Stack textAlign={"center"} spacing={4}>
            <Text textStyle={"h4"} color={"p.black"} fontWeight={"medium"}>
              Email Verification
            </Text>
            <Text textStyle={"p2"} color={"black.60"}>
              We have sent you an email verification to{" "}
              <Text as={"span"} color={"p.black"} fontWeight={"bold"}>
                jenny.wilson@gmail.com
              </Text>
              . If you didn’t receive it, click the button below.
            </Text>
          </Stack>
          <Button w={"full"} variant={"outline"}>
            Re-Send Email
          </Button>
        </VStack>
      </Card>
    </Center>
  );
};

export default RegisterEmailVerify;
