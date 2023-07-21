import {
  Button,
  Card,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import { object, string } from "yup";

let signInValidationSchema = object({
  email: string().email("Email is invalid").required("Email is required"),
  password: string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignIn = () => {
  return (
    <Container>
      <Center minH={"100vh"}>
        <Card
          w={"456px"}
          bg={{
            base: "transparent",
            md: "white",
          }}
          p={{
            base: "0",
            md: "6",
          }}
          borderRadius={{
            base: "none",
            md: "1rem",
          }}
          boxShadow={{
            base: "none",
            md: "0px 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <Text fontWeight={"medium"} textStyle={"h1"}>
            Welcome to Crypto App
          </Text>
          <Text textStyle={"p2"} color={"black.60"} mt={"4"}>
            Enter your credentials to access the account.
          </Text>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signInValidationSchema}
          >
            {() => {
              return (
                <Form>
                  <Stack mt={10} spacing={6}>
                    <Field name="email">
                      {({ field, meta }) => {
                        return (
                          <FormControl
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                              {...field}
                              name="email"
                              type="email"
                              placeholder="Enter your email..."
                            />
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        );
                      }}
                    </Field>
                    <Field name="password">
                      {({ field, meta }) => {
                        return (
                          <FormControl
                            isInvalid={!!(meta.error && meta.touched)}
                          >
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <Input
                              {...field}
                              name="password"
                              type="password"
                              placeholder="Enter your password..."
                            />
                            <FormErrorMessage>{meta.error}</FormErrorMessage>
                          </FormControl>
                        );
                      }}
                    </Field>

                    <HStack justify={"space-between"}>
                      <Checkbox defaultChecked>
                        <Text textStyle={"p3"}>Remember me</Text>
                      </Checkbox>
                      <Link to={"/forgot-password"}>
                        <Text textStyle={"p3"} as="span" color={"p.purple"}>
                          Forgot Password?
                        </Text>
                      </Link>
                    </HStack>

                    <Stack>
                      <Button type="submit" textStyle={"p3"}>
                        Log In
                      </Button>
                      <Link to={"/signup"}>
                        <Button
                          fontSize={"sm"}
                          mt={2}
                          variant={"outline"}
                          w={"full"}
                        >
                          Create New Account
                        </Button>
                      </Link>
                    </Stack>
                  </Stack>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};

export default SignIn;
