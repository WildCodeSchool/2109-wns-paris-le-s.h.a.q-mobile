import Layout from "@components/Layout";
import Header from "@components/screens/Header";
import React from "react";
import Container from "@components/Container";
import Task from "@components/screens/task";
import {gql, useQuery} from "@apollo/client";
import {Text} from "native-base";

const TasksQuery = gql`
  query AllTasks {
    allTasks {
      id
      subject
      description
      project
      status
      priority
      user
      initial_time_estimation
      initial_time_spent
      advancement
      deadline
    }
  }
`;

const TaskScreen = (props: { navigation: any; route: any }) => {
    const {data, loading, error} = useQuery(TasksQuery);
    if (loading) {
        console.log("loginLoading | ", loading);
        return <Text>Pouette</Text>;
    }
    if (error) {
        console.log("loginError | ", error);
        return <Text>{error.message}</Text>;
    }
    return (
        <Layout>
            <Header
                navigation={props.navigation}
                route={props.route}
                labelText={"Tableau des taches"}
            />
            <Container>
                <Task data={data}/>
            </Container>
        </Layout>
    );
};
export default TaskScreen;
