import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { VStack } from "native-base";

const Container = ({ children }) => {
  return (
    <>
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        style={{ flex: 1 }}
      >
        <VStack
          flex="1"
          px="6"
          py="9"
          _light={{ bg: "white" }}
          _dark={{ bg: "coolGray.800" }}
          justifyContent="space-between"
          space="3"
          borderTopRightRadius={{ base: "2xl", md: "xl" }}
          borderBottomRightRadius={{ base: "0", md: "xl" }}
          borderTopLeftRadius={{ base: "2xl", md: "0" }}
        >
          <VStack space="8">
            <VStack space={{ base: "7", md: "4" }}>{children}</VStack>
          </VStack>
        </VStack>
      </KeyboardAwareScrollView>
    </>
  );
};

export default Container;
