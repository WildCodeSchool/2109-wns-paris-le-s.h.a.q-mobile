import { HStack, Icon, IconButton, Text, VStack } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { getName } from "../../constants/lib";

interface HeaderType {
  navigation: any;
  route: any;
  labelText: string;
}
const Header = ({ navigation, route, labelText }: HeaderType) => {
  return (
    <VStack px="4" mt="4" mb="5" space="9">
      <HStack space="2" alignItems="center">
        <IconButton
          variant="unstyled"
          pl="0"
          onPress={() => {
            navigation.openDrawer();
          }}
          icon={
            <Icon
              size="6"
              as={AntDesign}
              name="arrowleft"
              color="coolGray.50"
            />
          }
        />
        <Text color="coolGray.50" fontSize="lg">
          {getName(route.name)}
        </Text>
      </HStack>
      <VStack space="2">
        {route.name === "Home" ? (
          <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
            Welcome back,
          </Text>
        ) : (
          <Text fontSize="3xl" fontWeight="bold" color="coolGray.50">
            Welcome,
          </Text>
        )}

        <Text
          fontSize="md"
          fontWeight="normal"
          _dark={{
            color: "coolGray.400",
          }}
          _light={{
            color: "primary.300",
          }}
        >
          {labelText}
        </Text>
      </VStack>
    </VStack>
  );
};

export default Header;
