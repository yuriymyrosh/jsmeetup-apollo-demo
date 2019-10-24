import {ApolloServer, gql} from "apollo-server";
import {projects, TaskData, tasks} from "./data";

const typeDefs = gql`
    # Projcets
    type Project {
        id: ID!
        name: String
    }
    # Task
    type Task {
        id: ID!
        title: String!
        completed: Boolean!
        project: Project!
    }
  # Query
  type Query {
      tasks: [Task]
      task(id: Int): Task
      projects: [Project]
  }
`;

const resolvers = {
  Query: {
    tasks: () => {
      return tasks;
    },
    projects: () => {
      return projects;
    },
    task: (parent: null, {id}: {id: number}) => {
      return tasks.find(task => task.id === id);
    }
  },
  Task: {
    project: (parent: TaskData) => {
      return projects.find(project => project.id === parent.project_id);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen({
  port: 4000
}).then(({url}) => {
  console.log(`🚀 Server running on ${url}`);
});
