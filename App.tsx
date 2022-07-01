import React from "react";
import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {extendTheme, NativeBaseProvider} from "native-base";
import {ApolloProvider} from "@apollo/client";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import client from './client'

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#0088CC",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#003F5E",
    },
    // Redefinig only one shade, rest of the color will remain same.
    amber: {
      400: "#d97706",
    },
  },
  background: {
    paper: "#2A167A",
    default: "#2A167A",
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "dark",
  },
});




export default function App() {
  const colorScheme = useColorScheme();
    return (
      <ApolloProvider client={client}>
        <NativeBaseProvider theme={theme}>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </ApolloProvider>
    )
  }
