// import {ApolloClient, ApolloLink, HttpLink, InMemoryCache} from '@apollo/client';
// import {AsyncStorage} from 'react-native';
// import {setContext} from '@apollo/client/link/context';
// import Constants from "expo-constants";
//
// const { manifest } = Constants;
import Constants from "expo-constants";
import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const {manifest} = Constants;


const httpLink = createHttpLink({
    uri: `http://${manifest.debuggerHost.split(":").shift()}:5050/graphql`,
});

const authLink = setContext(async (_, {headers}) => {
    // get the authentication token from local storage if it exists
    const token = await AsyncStorage.getItem('token');
    // console.log(token)
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `${token}` : '',
        },
    };
});

export default new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});
