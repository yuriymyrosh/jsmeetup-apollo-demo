import {gql} from "apollo-boost";

export default gql`
    query TodoApp {
        tasks {
            ...ToDoListScreen
        }
    }

    fragment ToDoListScreen on Task {
        id
        title
        completed
        project {
            name
        }
    }
`
