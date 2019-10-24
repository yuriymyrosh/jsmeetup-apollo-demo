/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TodoApp
// ====================================================

export interface TodoApp_tasks_project {
  __typename: "Project";
  name: string | null;
}

export interface TodoApp_tasks {
  __typename: "Task";
  id: string;
  title: string;
  completed: boolean;
  project: TodoApp_tasks_project;
}

export interface TodoApp {
  tasks: (TodoApp_tasks | null)[] | null;
}
