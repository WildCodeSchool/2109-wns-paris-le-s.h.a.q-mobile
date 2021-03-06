import React from "react";
import { Center, Hidden, Image } from "native-base";
import SignUpForm from "@components/screens/login/SignUpForm";
import Header from "@components/screens/Header";
import Layout from "@components/Layout";
import Container from "@components/Container";

export default function SignUp(props: any) {
  return (
    <Layout>
      <Hidden from="md">
        <Header {...props} labelText={"Sign up to continue"} />
      </Hidden>
      <Hidden till="md">
        <Center
          flex="1"
          bg="primary.700"
          borderTopLeftRadius={{ base: "0", md: "xl" }}
          borderBottomLeftRadius={{ base: "0", md: "xl" }}
        >
          <Image
            h="24"
            size="80"
            alt="NativeBase Startup+ "
            resizeMode={"contain"}
            source={require("@assets/images/logo.png")}
          />
        </Center>
      </Hidden>
      <Container>
        <SignUpForm props={props} />
      </Container>
    </Layout>
  );
}
