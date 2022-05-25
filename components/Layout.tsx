import { Box, Center, Stack, StatusBar } from "native-base";
import React from "react";

const Layout = ({ children }) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Box
        safeAreaTop
        _light={{ bg: "primary.900" }}
        _dark={{ bg: "coolGray.900" }}
      />
      <Center
        my="auto"
        _dark={{ bg: "coolGray.900" }}
        _light={{ bg: "primary.900" }}
        flex="1"
      >
        <Stack
          flexDirection={{ base: "column", md: "row" }}
          w="100%"
          maxW={{ md: "1016px" }}
          flex={{ base: "1", md: "none" }}
        >
          {children}
        </Stack>
      </Center>
    </>
  );
};

export default Layout;
