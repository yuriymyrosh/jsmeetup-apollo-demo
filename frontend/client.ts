import 'cross-fetch/polyfill';
import ApolloClient from 'apollo-boost';
import query from './queries/todo';
import {TodoApp} from "./queries/types/TodoApp";
import {ToDoListScreen} from "./queries/types/ToDoListScreen";


const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

client.query({
    query,
  })
  .then((response: {data: {tasks: ToDoListScreen[]}}) => {
    console.log(response.data.tasks)
  })
  .catch(error => console.error(error));
