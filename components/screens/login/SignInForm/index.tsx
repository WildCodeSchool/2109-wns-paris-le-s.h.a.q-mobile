import React from "react";
import {
    Button,
    Center,
    Checkbox,
    Divider,
    Hidden,
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
import {Controller, useForm} from "react-hook-form";
import {Entypo} from "@expo/vector-icons";
import IconGoogle from "@components/icons/IconGoogle";
import IconFacebook from "@components/icons/IconFacebook";
import {gql, useLazyQuery} from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {removeItem} from "constants/services";

const LOGIN = gql`
  query Login($password: String!, $email: String!) {
    login(password: $password, email: $email)
  }
`;

interface ISignInInput {
    email: string;
    password: string;
}

const SignInForm = ({props}) => {
    const [showPass, setShowPass] = React.useState(false);
    const [
        getLogin,
        {loading: loginLoading, error: loginError, data: loginData},
    ] = useLazyQuery(LOGIN);
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
        },
    });
    const onChange = (arg) => {
        return {
            value: arg.nativeEvent.text,
        };
    };
    if (loginLoading) {
        console.log("loginLoading | ", loginLoading);
        return <Text>Pouette</Text>;
    }

    if (loginError) {
        console.log("loginError | ", loginError);
        return <Text>{loginError.message}</Text>;
    }

    const onSubmit = async (formData: ISignInInput) => {
        await getLogin({
            variables: {email: formData.email, password: formData.password}
        })
        props.navigation.navigate("Tasks");
    }
    if (loginData) {
        // console.log("loginData:", loginData.login)
        try {
            AsyncStorage.setItem(
                "token",
                loginData.login
            );
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <>
            <Hidden till="md">
                <Text fontSize="lg" fontWeight="normal"></Text>
            </Hidden>
            <VStack>
                <VStack space="3">
                    <VStack space={{base: "7", md: "4"}}>
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
                    <Link
                        ml="auto"
                        _text={{
                            fontSize: "xs",
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
                    >
                        Forgot password?
                    </Link>
                    <Checkbox
                        alignItems="flex-start"
                        mt="5"
                        value="demo"
                        colorScheme="primary"
                        accessibilityLabel="Remember me"
                    >
                        <Text
                            pl="3"
                            fontWeight="normal"
                            _light={{color: "coolGray.800"}}
                            _dark={{color: "coolGray.400"}}
                        >
                            Remember me and keep me logged in
                        </Text>
                    </Checkbox>
                    <Button
                        mt="5"
                        size="md"
                        borderRadius="4"
                        _text={{
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
                        SIGN IN
                    </Button>
                    <Button
                        mt="5"
                        size="md"
                        borderRadius="4"
                        _text={{
                            fontWeight: "medium",
                        }}
                        _light={{
                            bg: "primary.900",
                        }}
                        _dark={{
                            bg: "primary.700",
                        }}
                        onPress={async () => await removeItem('token')}
                    >
                        Delete token </Button>
                    <HStack
                        mt="5"
                        space="2"
                        mb={{base: 6, md: 7}}
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Divider
                            w="30%"
                            _light={{bg: "coolGray.200"}}
                            _dark={{bg: "coolGray.700"}}
                        ></Divider>
                        <Text
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
            </VStack>
            <HStack
                mb="4"
                space="1"
                safeAreaBottom
                alignItems="center"
                justifyContent="center"
                mt={{base: "auto", md: "8"}}
            >
                <Text
                    _light={{color: "coolGray.800"}}
                    _dark={{color: "coolGray.400"}}
                >
                    Don't have an account?
                </Text>
                {/* Opening Link Tag navigateTo:"SignUp" */}
                <Link
                    _text={{
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
                        props.navigation.navigate("SignUp");
                    }}
                >
                    Sign up
                </Link>
            </HStack>
        </>
    );
};

export default SignInForm;
