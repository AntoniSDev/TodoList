import { ButtonProps } from "../interface/types";

export const Button = (props: ButtonProps) => {
  return (
    <>
      <button
        onClick={props.onClick}
        style={{ backgroundColor: props.backgroundColor }}
      >
        {props.label}
      </button>
    </>
  );
};
