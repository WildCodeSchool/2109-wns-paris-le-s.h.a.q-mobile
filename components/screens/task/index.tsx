import React from "react";
import {Avatar, Box, HStack, Text, VStack} from "native-base";

const Task = ({data}) => {
    console.log(data)
    return (data.allTasks.map((item, itemI) => (
        <Box
            key={itemI}
            borderBottomWidth="1"
            _dark={{
                borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
        >
            <HStack space={3} justifyContent="space-between">
                <Avatar
                    size="48px"
                    source={{
                        uri: item.priority,
                    }}
                />
                <VStack>
                    <Text
                        _dark={{
                            color: "warmGray.50",
                        }}
                        color="coolGray.800"
                        bold
                    >
                        {item.subject}
                    </Text>
                    <Text
                        color="coolGray.600"
                        _dark={{
                            color: "warmGray.200",
                        }}
                    >
                        {item.description}
                    </Text>
                </VStack>
                <Text
                    fontSize="xs"
                    _dark={{
                        color: "warmGray.50",
                    }}
                    color="coolGray.800"
                    alignSelf="flex-start"
                >
                    {item.user}
                </Text>
            </HStack>
        </Box>
    )));
};

export default Task;
