import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from './graphql/queries';

const todos = await API.graphql(graphqlOperation(listTodos));
console.log(todos);
