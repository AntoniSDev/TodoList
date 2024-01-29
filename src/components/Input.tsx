import { useState } from "react";
import { InputProps } from "../interface/types";

export const Input = (props: InputProps) => {
  const [value, setValue] = useState<string>("");
  return (
    <input
      placeholder={props.placeholder}
      name={props.name}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        props.onTaskChange(e.target.value);
      }}
    />
  );
};
