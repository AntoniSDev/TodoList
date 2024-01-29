import { TestProps } from "../interface/types";

export const Test = (props: TestProps) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
};
