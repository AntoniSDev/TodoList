export interface ButtonProps {
  onClick: () => void;
  label: string;
  backgroundColor: string;
}

export interface InputProps {
  placeholder: string;
  name: string;
  onTaskChange: (task: string) => void;
}

export interface TestProps {
  title: string;
  text: string;
}

export interface TodolistProps {
  tasks: string[];
  IdTask: (index: number) => void;
  TaskInfo: (taskInfo: string, index: number) => void;
}
