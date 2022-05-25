import React, { useState } from "react";
import {
  Button,
  Center,
  Checkbox,
  Divider,
  HStack,
  Icon,
  IconButton,
  Link,
  Pressable,
  Text,
  useColorModeValue,
  VStack,
} from "native-base";
import FloatingLabelInput from "@components/FloatingLabelInput";
import { Entypo } from "@expo/vector-icons";
import IconFacebook from "@components/icons/IconFacebook";
import IconGoogle from "@components/icons/IconGoogle";

function SignUpForm({ props }: any) {
  // const router = useRouter(); //use incase of Nextjs
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [confirm_pass, setConfirmPass] = useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [showConfirmPass, setShowConfirmPass] = React.useState(false);
  return (
    <>
      <VStack space="8">
        <VStack space={{ base: "7", md: "4" }}>
          <FloatingLabelInput
            isRequired
            label="Email"
            labelColor="#9ca3af"
            labelBGColor={useColorModeValue("#fff", "#1f2937")}
            borderRadius="4"
            defaultValue={text}
            onChangeText={(txt: any) => setText(txt)}
            _text={{
              fontSize: "sm",
              fontWeight: "medium",
            }}
            _dark={{
              borderColor: "coolGray.700",
            }}
            _light={{
              borderColor: "coolGray.300",
            }}
          />
          <FloatingLabelInput
            isRequired
            type={showPass ? "" : "password"}
            label="Password"
            borderRadius="4"
            labelColor="#9ca3af"
            labelBGColor={useColorModeValue("#fff", "#1f2937")}
            defaultValue={pass}
            onChangeText={(txt: any) => setPass(txt)}
            InputRightElement={
              <IconButton
                variant="unstyled"
                icon={
                  <Icon
                    size="4"
                    color="coolGray.400"
                    as={Entypo}
                    name={showPass ? "eye-with-line" : "eye"}
                  />
                }
                onPress={() => {
                  setShowPass(!showPass);
                }}
              />
            }
            _text={{
              fontSize: "sm",
              fontWeight: "medium",
            }}
            _dark={{
              borderColor: "coolGray.700",
            }}
            _light={{
              borderColor: "coolGray.300",
            }}
          />

          <FloatingLabelInput
            isRequired
            type={showConfirmPass ? "" : "password"}
            label="Confirm Password"
            borderRadius="4"
            labelColor="#9ca3af"
            labelBGColor={useColorModeValue("#fff", "#1f2937")}
            defaultValue={confirm_pass}
            onChangeText={(txt: any) => setConfirmPass(txt)}
            InputRightElement={
              <IconButton
                variant="unstyled"
                icon={
                  <Icon
                    size="4"
                    color="coolGray.400"
                    as={Entypo}
                    name={showConfirmPass ? "eye-with-line" : "eye"}
                  />
                }
                onPress={() => {
                  setShowConfirmPass(!showConfirmPass);
                }}
              />
            }
            _text={{
              fontSize: "sm",
              fontWeight: "medium",
            }}
            _dark={{
              borderColor: "coolGray.700",
            }}
            _light={{
              borderColor: "coolGray.300",
            }}
          />
        </VStack>
        <Checkbox
          alignItems="flex-start"
          defaultIsChecked
          value="demo"
          colorScheme="primary"
          accessibilityLabel="Remember me"
        >
          <HStack alignItems="center">
            <Text fontSize="sm" color="coolGray.400" pl="2">
              I accept the{" "}
            </Text>
            <Link
              _text={{
                fontSize: "sm",
                fontWeight: "semibold",
                textDecoration: "none",
              }}
              _light={{
                _text: {
                  color: "primary.900",
                },
              }}
              _dark={{
                _text: {
                  color: "primary.500",
                },
              }}
            >
              Terms of Use
            </Link>
            <Text fontSize="sm"> & </Text>

            <Link
              _text={{
                fontSize: "sm",
                fontWeight: "semibold",
                textDecoration: "none",
              }}
              _light={{
                _text: {
                  color: "primary.900",
                },
              }}
              _dark={{
                _text: {
                  color: "primary.500",
                },
              }}
            >
              Privacy Policy
            </Link>
          </HStack>
        </Checkbox>
        <Button
          size="md"
          borderRadius="4"
          _text={{
            fontSize: "sm",
            fontWeight: "medium",
          }}
          _light={{
            bg: "primary.900",
          }}
          _dark={{
            bg: "primary.700",
          }}
          onPress={() => {
            props.navigation.navigate("OTP");
          }}
        >
          SIGN UP
        </Button>
        <HStack
          space="2"
          mb={{ base: "6", md: "7" }}
          alignItems="center"
          justifyContent="center"
        >
          <Divider
            w="30%"
            _light={{ bg: "coolGray.200" }}
            _dark={{ bg: "coolGray.700" }}
          ></Divider>
          <Text
            fontSize="sm"
            fontWeight="medium"
            _light={{ color: "coolGray.300" }}
            _dark={{ color: "coolGray.500" }}
          >
            or
          </Text>
          <Divider
            w="30%"
            _light={{ bg: "coolGray.200" }}
            _dark={{ bg: "coolGray.700" }}
          ></Divider>
        </HStack>
      </VStack>
      <Center>
        <HStack space="4">
          <Pressable>
            <IconFacebook />
          </Pressable>
          <Pressable>
            <IconGoogle />
          </Pressable>
        </HStack>
      </Center>
      <HStack
        mb="4"
        space="1"
        alignItems="center"
        justifyContent="center"
        mt={{ base: "auto", md: "8" }}
      >
        <Text
          fontSize="sm"
          _light={{ color: "coolGray.800" }}
          _dark={{ color: "coolGray.400" }}
        >
          Already have an account?
        </Text>
        {/* Opening Link Tag navigateTo:"SignIn" */}
        <Link
          _text={{
            fontSize: "sm",
            fontWeight: "bold",
            textDecoration: "none",
          }}
          _light={{
            _text: {
              color: "primary.900",
            },
          }}
          _dark={{
            _text: {
              color: "primary.500",
            },
          }}
          onPress={() => {
            props.navigation.navigate("Home");
          }}
        >
          Sign in
        </Link>
        {/* Closing Link Tag */}
      </HStack>
    </>
  );
}
export default SignUpForm;
