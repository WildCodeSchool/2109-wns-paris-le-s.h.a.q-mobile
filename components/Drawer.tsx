import * as React from "react";
import {DrawerContentScrollView} from "@react-navigation/drawer";
import {Box, Divider, HStack, Pressable, Text, VStack} from "native-base";
import {getName} from "../constants/lib";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} safeArea>
      <VStack space="6" my="2" mx="1">
        <Box px="4">
          <Text bold color="gray.300">
            Mail
          </Text>
          <Text fontSize="14" mt="1" color="gray.300" fontWeight="500">
            john_doe@gmail.com
          </Text>
        </Box>
        <VStack divider={<Divider />} space="4">
          <VStack space="3">
            {props.state.routeNames.map((name: string, index: number) => (
              <Pressable
                key={name}
                px="5"
                py="3"
                rounded="md"
                bg={
                  index === props.state.index
                    ? "rgba(6, 182, 212, 0.1)"
                    : "transparent"
                }
                onPress={(event) => {
                  props.navigation.navigate(name);
                }}
              >
                <HStack space="7" alignItems="center">
                  <Text
                    fontWeight="500"
                    color={
                      index === props.state.index ? "primary.500" : "gray.400"
                    }
                  >
                    {getName(name)}
                  </Text>
                </HStack>
              </Pressable>
            ))}
          </VStack>
        </VStack>
      </VStack>
    </DrawerContentScrollView>
  );
}
