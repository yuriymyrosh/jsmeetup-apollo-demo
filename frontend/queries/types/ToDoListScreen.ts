/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: ToDoListScreen
// ====================================================

export interface ToDoListScreen_project {
  __typename: "Project";
  name: string | null;
}

export interface ToDoListScreen {
  __typename: "Task";
  id: string;
  title: string;
  completed: boolean;
  project: ToDoListScreen_project;
}
