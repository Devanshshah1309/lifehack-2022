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
  Icon,
  FormControl,
  FormErrorMessage,
  InputRightElement,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaPen } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { GiTrade } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaPen = chakra(FaPen);

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleSignupClick = async (values) => {
    console.log(values);
    try {
      await signup(values.email, values.password).then((userCredential) => {
        const user = userCredential.user;
        setDoc(doc(db, "users", user.uid), {
          email: user.email,
          registeredAt: Timestamp.fromDate(new Date()),
          postal: values.postal,
          name: values.name,
        });
      });
      router.push("/marketplace");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
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
          <form onSubmit={handleSubmit(handleSignupClick)}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="xl"
              borderRadius="md"
            >
              <Flex>
                <FormControl isInvalid={errors.name} mr="3">
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaPen color="gray.300" />}
                    />
                    <Input
                      type="name"
                      id="name"
                      placeholder="Name"
                      {...register("name", {
                        required: "Name is a compulsory field",
                      })}
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.name && errors.name.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={errors.postal}>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={<CFaPen color="gray.300" />}
                    />
                    <Input
                      type="postal"
                      id="postal"
                      placeholder="Postal"
                      {...register("postal", {
                        required: "postal is a compulsory field",
                      })}
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {errors.postal && errors.postal.message}
                  </FormErrorMessage>
                </FormControl>
              </Flex>
              <FormControl isInvalid={errors.email}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email"
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
                Sign up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignUp;
