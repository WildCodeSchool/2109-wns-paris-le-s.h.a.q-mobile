import React from "react";
import {
    Button,
    Center,
    Checkbox,
    Divider,
    HStack,
    Icon,
    IconButton,
    Input,
    Link,
    Pressable,
    Text,
    useColorModeValue,
    VStack,
} from "native-base";
import {Entypo} from "@expo/vector-icons";
import IconFacebook from "@components/icons/IconFacebook";
import IconGoogle from "@components/icons/IconGoogle";
import {Controller, useForm} from "react-hook-form";
import {gql, useMutation} from "@apollo/client";

const SIGNUP = gql`
  mutation CreateUser($createUserInput: CreateUserInput!) {
    createUser(input: $createUserInput) {
      firstName
      lastName
      email
      password
    }
  }
`;

interface ISignUnInput {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

function SignUpForm({props}: any) {
    // const router = useRouter(); //use incase of Nextjs
    const [signUp, {loading, error, data: formData}] = useMutation(SIGNUP);
    const [showPass, setShowPass] = React.useState(false);
    const [showConfirmPass, setShowConfirmPass] = React.useState(false);
    const {
        register,
        setValue,
        handleSubmit,
        control,
        reset,
        formState: {errors},
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        },
    });

    const onSubmit = async (data: ISignUnInput) => {
        await signUp({
            variables: {createUserInput: data},
        });
        reset()
        props.navigation.navigate("Home");
    };

    return (
        <>
            <VStack space="3">
                <VStack space={{base: "7", md: "4"}}>
                    <Text>Prénom</Text>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <Input
                                onBlur={onBlur}
                                placeholder="Prénom"
                                onChangeText={(val) => onChange(val)}
                                value={value}
                                labelColor="#9ca3af"
                                labelBGColor={useColorModeValue("#fff", "#1f2937")}
                                borderRadius="4"
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
                        )}
                        name="firstName"
                        rules={{required: true}}
                        defaultValue=""
                    />
                    <Text>Nom</Text>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <Input
                                onBlur={onBlur}
                                placeholder="Nom"
                                onChangeText={(val) => onChange(val)}
                                value={value}
                                labelColor="#9ca3af"
                                labelBGColor={useColorModeValue("#fff", "#1f2937")}
                                borderRadius="4"
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
                        )}
                        name="lastName"
                        rules={{required: true}}
                        defaultValue=""
                    />
                    <Text>Email</Text>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <Input
                                onBlur={onBlur}
                                placeholder="Email"
                                onChangeText={(val) => onChange(val)}
                                value={value}
                                labelColor="#9ca3af"
                                labelBGColor={useColorModeValue("#fff", "#1f2937")}
                                borderRadius="4"
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
                        )}
                        name="email"
                        rules={{required: true}}
                        defaultValue=""
                    />

                    <Text>Password</Text>
                    <Controller
                        control={control}
                        render={({field: {onChange, onBlur, value}}) => (
                            <Input
                                type={showPass ? "text" : "password"}
                                onBlur={onBlur}
                                placeholder="Password"
                                onChangeText={(value: string) => onChange(value)}
                                value={value}
                                labelColor="#9ca3af"
                                labelBGColor={useColorModeValue("#fff", "#1f2937")}
                                borderRadius="4"
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
                                            setShowPass(true);
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
                        )}
                        name="password"
                        rules={{required: "Field is required", minLength: 3}}
                        defaultValue=""
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
                    onPress={handleSubmit(onSubmit)}
                >
                    SIGN UP
                </Button>
                <HStack
                    space="2"
                    mb={{base: "6", md: "7"}}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Divider
                        w="30%"
                        _light={{bg: "coolGray.200"}}
                        _dark={{bg: "coolGray.700"}}
                    ></Divider>
                    <Text
                        fontSize="sm"
                        fontWeight="medium"
                        _light={{color: "coolGray.300"}}
                        _dark={{color: "coolGray.500"}}
                    >
                        or
                    </Text>
                    <Divider
                        w="30%"
                        _light={{bg: "coolGray.200"}}
                        _dark={{bg: "coolGray.700"}}
                    ></Divider>
                </HStack>
            </VStack>
            <Center>
                <HStack space="4">
                    <Pressable>
                        <IconFacebook/>
                    </Pressable>
                    <Pressable>
                        <IconGoogle/>
                    </Pressable>
                </HStack>
            </Center>
            <HStack
                mb="4"
                space="1"
                alignItems="center"
                justifyContent="center"
                mt={{base: "auto", md: "8"}}
            >
                <Text
                    fontSize="sm"
                    _light={{color: "coolGray.800"}}
                    _dark={{color: "coolGray.400"}}
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
