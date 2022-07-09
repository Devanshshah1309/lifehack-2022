import { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Icon,
  FormControl,
  FormErrorMessage,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { GiTrade } from "react-icons/gi";
import NextLink from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleShowClick = () => setShowPassword(!showPassword);
  const handleLoginClick = async (values) => {
    try {
      await login(values.email, values.password);
      router.push("/marketplace");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Flex flexDirection="column" alignItems="center">
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Icon as={GiTrade} boxSize="4rem" color="teal.500" />
        <Heading color="teal.400" mb="4">
          Welcome to Trade Eats
        </Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(handleLoginClick)}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              borderRadius="md"
            >
              <FormControl isInvalid={errors.email}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    id="email"
                    placeholder="email address"
                    {...register("email", {
                      required: "Email is a compulsory field",
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.email && errors.email.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={errors.password}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is a compulsory field",
                      minLength: {
                        value: 6,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors.password && errors.password.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                isLoading={isSubmitting}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?
        <NextLink href={"/signup"} passHref>
          <Link color="teal.500"> Sign up</Link>
        </NextLink>
      </Box>
    </Flex>
  );
};

export default Login;
